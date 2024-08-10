if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SplashPage_Params {
    currentBreakpoint?: string;
    timeOutId?: number;
}
import router from "@ohos:router";
import { PageConstants } from "@bundle:com.example.multishopping/phone/ets/constants/PageConstants";
import { BreakpointConstants } from "@bundle:com.example.multishopping/phone@common/ets/constants/BreakpointConstants";
import { Adaptive } from "@bundle:com.example.multishopping/phone@common/ets/viewmodel/AdaptiveViewModel";
import { StyleConstants } from "@bundle:com.example.multishopping/phone@common/ets/constants/StyleConstants";
import { Logger } from "@bundle:com.example.multishopping/phone@common/index";
class SplashPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.timeOutId = 0;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SplashPage_Params) {
        if (params.timeOutId !== undefined) {
            this.timeOutId = params.timeOutId;
        }
    }
    updateStateVars(params: SplashPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private timeOutId: number;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column, alignItems: ItemAlign.Center });
            Flex.height(StyleConstants.FULL_HEIGHT);
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.backgroundColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
            Column.flexGrow(StyleConstants.FLEX_GROW);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217889, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width(Adaptive.SplashImageWidth(this.currentBreakpoint));
            Image.aspectRatio(PageConstants.IMAGE_ASPECT_RATIO);
            Image.objectFit(ImageFit.Contain);
        }, Image);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217754, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217745, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217744, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Contain);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217737, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217899, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217908, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.letterSpacing(PageConstants.LETTER_SPACE);
            Text.margin({ top: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, bottom: { "id": 134217743, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        Flex.pop();
    }
    aboutToAppear() {
        this.timeOutId = setTimeout(() => {
            router.replaceUrl({ url: PageConstants.MAIN_PAGE_URL })
                .catch((err: Error) => {
                Logger.error(JSON.stringify(err));
            });
        }, PageConstants.DELAY_TIME);
    }
    aboutToDisappear() {
        clearTimeout(this.timeOutId);
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SplashPage";
    }
}
registerNamedRoute(() => new SplashPage(undefined, {}), "", { bundleName: "com.example.multishopping", moduleName: "phone", pagePath: "pages/SplashPage", pageFullPath: "product/phone/src/main/ets/pages/SplashPage", integratedHsp: "false" });
