if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AddressInfo_Params {
    info?: AddressInfoParams;
}
import { StyleConstants } from "@bundle:com.example.multishopping/phone@common/index";
import { addressInfo } from "@bundle:com.example.multishopping/phone@orderdetail/ets/viewmodel/OrderData";
import type { AddressInfoParams } from "@bundle:com.example.multishopping/phone@orderdetail/ets/viewmodel/OrderData";
export class AddressInfo extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.info = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AddressInfo_Params) {
        if (params.info !== undefined) {
            this.info = params.info;
        }
    }
    updateStateVars(params: AddressInfo_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private info?: AddressInfoParams;
    aboutToAppear() {
        this.info = addressInfo[0];
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.Start,
                alignItems: ItemAlign.Center
            });
            Flex.debugLine("features/orderdetail/src/main/ets/components/AddressInfo.ets(28:5)", "orderdetail");
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.backgroundColor(Color.White);
            Flex.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.margin({ bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Flex.padding({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217802, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/orderdetail/src/main/ets/components/AddressInfo.ets(32:7)", "orderdetail");
            Image.width({ "id": 134217930, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217930, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.margin({ right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.SpaceBetween,
                alignItems: ItemAlign.Center
            });
            Flex.debugLine("features/orderdetail/src/main/ets/components/AddressInfo.ets(36:7)", "orderdetail");
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/orderdetail/src/main/ets/components/AddressInfo.ets(40:9)", "orderdetail");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/orderdetail/src/main/ets/components/AddressInfo.ets(41:11)", "orderdetail");
            Row.margin({ bottom: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.info?.name);
            Text.debugLine("features/orderdetail/src/main/ets/components/AddressInfo.ets(42:13)", "orderdetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({ right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.info?.phone);
            Text.debugLine("features/orderdetail/src/main/ets/components/AddressInfo.ets(46:13)", "orderdetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.info?.province}${this.info?.city}${this.info?.region} ${this.info?.detailAddress}`);
            Text.debugLine("features/orderdetail/src/main/ets/components/AddressInfo.ets(51:11)", "orderdetail");
            Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217800, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/orderdetail/src/main/ets/components/AddressInfo.ets(57:9)", "orderdetail");
            Image.height({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217935, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        Flex.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
