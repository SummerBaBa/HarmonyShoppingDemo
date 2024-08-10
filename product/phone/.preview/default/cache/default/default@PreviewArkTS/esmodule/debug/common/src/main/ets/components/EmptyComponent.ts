if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface EmptyComponent_Params {
    outerHeight?: number | string;
}
import { StyleConstants } from "@bundle:com.example.multishopping/phone@common/ets/constants/StyleConstants";
export class EmptyComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.outerHeight = StyleConstants.FULL_HEIGHT;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: EmptyComponent_Params) {
        if (params.outerHeight !== undefined) {
            this.outerHeight = params.outerHeight;
        }
    }
    updateStateVars(params: EmptyComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private outerHeight?: number | string;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.Center,
                alignItems: ItemAlign.Center,
                direction: FlexDirection.Column
            });
            Flex.debugLine("common/src/main/ets/components/EmptyComponent.ets(23:5)", "@ohos/common");
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.height(this.outerHeight !== undefined ? this.outerHeight : StyleConstants.FULL_HEIGHT);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217909, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("common/src/main/ets/components/EmptyComponent.ets(28:7)", "@ohos/common");
            Image.width({ "id": 134217923, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217923, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217895, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("common/src/main/ets/components/EmptyComponent.ets(31:7)", "@ohos/common");
            Text.fontSize({ "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({ top: { "id": 134217937, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
