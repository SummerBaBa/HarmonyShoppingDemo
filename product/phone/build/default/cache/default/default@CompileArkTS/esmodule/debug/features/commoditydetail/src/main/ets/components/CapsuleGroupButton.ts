if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CapsuleGroupButton_Params {
    configs?: ButtonType[];
}
import type { ButtonType } from '../viewmodel/TypeModel';
import { StyleConstants } from "@bundle:com.example.multishopping/phone@common/index";
export class CapsuleGroupButton extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.configs = [];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CapsuleGroupButton_Params) {
        if (params.configs !== undefined) {
            this.configs = params.configs;
        }
    }
    updateStateVars(params: CapsuleGroupButton_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private configs: ButtonType[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create();
            Flex.backgroundImage({ "id": 134217839, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, ImageRepeat.NoRepeat);
            Flex.backgroundImageSize({ width: StyleConstants.HUNDRED_FIFTEEN_WIDTH, height: StyleConstants.FULL_HEIGHT });
            Flex.backgroundImagePosition(Alignment.Center);
            Flex.borderRadius({ "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.height({ "id": 134217909, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.flexBasis(StyleConstants.FLEX_BASIC);
            Flex.flexGrow(StyleConstants.FLEX_GROW);
            Flex.flexShrink(StyleConstants.FLEX_SHRINK);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const config = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Flex.create({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center });
                    Flex.border({
                        radius: {
                            topLeft: !!index ? 0 : { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                            bottomLeft: !!index ? 0 : { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                            topRight: !!index ? { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } : 0,
                            bottomRight: !!index ? { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } : 0
                        }
                    });
                    Flex.onClick((event?: ClickEvent) => config.onClick(event));
                }, Flex);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(config.text);
                    Text.fontColor(Color.White);
                    Text.fontSize({ "id": 134217919, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.height({ "id": 134217909, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.textAlign(TextAlign.Center);
                }, Text);
                Text.pop();
                Flex.pop();
            };
            this.forEachUpdateFunction(elmtId, this.configs, forEachItemGenFunction, (config: ButtonType) => JSON.stringify(config), true, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
