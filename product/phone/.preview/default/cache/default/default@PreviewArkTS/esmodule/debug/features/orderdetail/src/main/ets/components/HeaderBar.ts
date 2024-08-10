if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HeaderBar_Params {
    title?: string | Resource;
    onBack?: () => void;
}
import { StyleConstants } from "@bundle:com.example.multishopping/phone@common/index";
export class HeaderBar extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.title = '';
        this.onBack = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HeaderBar_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.onBack !== undefined) {
            this.onBack = params.onBack;
        }
    }
    updateStateVars(params: HeaderBar_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private title: string | Resource;
    private onBack: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ alignItems: ItemAlign.Center });
            Flex.debugLine("features/orderdetail/src/main/ets/components/HeaderBar.ets(24:5)", "orderdetail");
            Flex.backgroundColor({ "id": 134217902, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.height({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.width(StyleConstants.FULL_WIDTH);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.debugLine("features/orderdetail/src/main/ets/components/HeaderBar.ets(25:7)", "orderdetail");
            Button.backgroundColor({ "id": 134217908, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Button.onClick(() => this.onBack());
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217799, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/orderdetail/src/main/ets/components/HeaderBar.ets(26:9)", "orderdetail");
            Image.width({ "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.margin({
                left: { "id": 134217797, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217930, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Image);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.title) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.title);
                        Text.debugLine("features/orderdetail/src/main/ets/components/HeaderBar.ets(40:9)", "orderdetail");
                        Text.fontSize({ "id": 134217915, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Text.margin({ left: { "id": 134217798, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
