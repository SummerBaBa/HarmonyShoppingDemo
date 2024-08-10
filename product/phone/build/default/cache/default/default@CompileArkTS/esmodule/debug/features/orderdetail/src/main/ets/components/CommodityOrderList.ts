if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommodityOrderList_Params {
    orderList?: Order[];
}
import { CommodityOrderItem } from "@bundle:com.example.multishopping/phone@orderdetail/ets/components/CommodityOrderItem";
import type { Order } from '@ohos/common';
export class CommodityOrderList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__orderList = this.initializeConsume('orderList', "orderList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommodityOrderList_Params) {
    }
    updateStateVars(params: CommodityOrderList_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__orderList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__orderList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __orderList: ObservedPropertyAbstractPU<Order[]>;
    get orderList() {
        return this.__orderList.get();
    }
    set orderList(newValue: Order[]) {
        this.__orderList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(Color.White);
            Column.borderRadius({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Column.margin({ bottom: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Column.padding({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new CommodityOrderItem(this, {
                                orderData: item
                            }, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/CommodityOrderList.ets", line: 26, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    orderData: item
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "CommodityOrderItem" });
                }
            };
            this.forEachUpdateFunction(elmtId, this.orderList, forEachItemGenFunction, (item: Order, index?: number) => JSON.stringify(item) + index, false, true);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.padding({
                top: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Flex.height({ "id": 134217790, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217775, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217776, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.height({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Divider.backgroundColor({ "id": 134217897, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.padding({
                top: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Flex.height({ "id": 134217790, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217773, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217774, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217804, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.margin({ left: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Image);
        Row.pop();
        Flex.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
