if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommodityOrderItem_Params {
    orderData?: Order;
    onCommodityClick?: () => void;
}
import { StyleConstants } from "@bundle:com.example.multishopping/phone@common/index";
import type { Order } from "@bundle:com.example.multishopping/phone@common/index";
export class CommodityOrderItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.orderData = undefined;
        this.onCommodityClick = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommodityOrderItem_Params) {
        if (params.orderData !== undefined) {
            this.orderData = params.orderData;
        }
        if (params.onCommodityClick !== undefined) {
            this.onCommodityClick = params.onCommodityClick;
        }
    }
    updateStateVars(params: CommodityOrderItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private orderData?: Order;
    private onCommodityClick: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.orderData) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Flex.create();
                        Flex.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(31:7)", "orderdetail");
                        Flex.height({ "id": 134217789, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Flex.margin({ bottom: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                        Flex.onClick(() => this.onCommodityClick());
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": -1, "type": 30000, params: [this.orderData.image], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Image.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(32:9)", "orderdetail");
                        Image.height(StyleConstants.FULL_HEIGHT);
                        Image.aspectRatio(1);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Flex.create({ direction: FlexDirection.Column });
                        Flex.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(35:9)", "orderdetail");
                        Flex.margin({ left: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                        Flex.flexShrink(StyleConstants.FLEX_SHRINK);
                        Flex.flexGrow(StyleConstants.FLEX_GROW);
                        Flex.flexBasis(StyleConstants.FLEX_BASIC);
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Flex.create({
                            justifyContent: FlexAlign.SpaceBetween,
                            alignItems: ItemAlign.Center
                        });
                        Flex.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(36:11)", "orderdetail");
                        Flex.flexShrink(StyleConstants.FLEX_SHRINK);
                        Flex.flexGrow(StyleConstants.FLEX_GROW);
                        Flex.flexBasis(StyleConstants.FLEX_BASIC);
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Flex.create();
                        Flex.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(40:13)", "orderdetail");
                        Flex.flexShrink(StyleConstants.FLEX_SHRINK);
                        Flex.flexGrow(StyleConstants.FLEX_GROW);
                        Flex.flexBasis(StyleConstants.FLEX_BASIC);
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 134217894, "type": 10003, params: [this.orderData.title, this.orderData.description], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Text.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(41:15)", "orderdetail");
                        Text.width(StyleConstants.FULL_WIDTH);
                        Text.fontColor(Color.Black);
                        Text.maxLines(StyleConstants.TWO_TEXT_LINE);
                        Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                        Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Text.lineHeight({ "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Text.margin({ bottom: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                    }, Text);
                    Text.pop();
                    Flex.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Flex.create({
                            justifyContent: FlexAlign.Center,
                            direction: FlexDirection.Column,
                            alignItems: ItemAlign.End
                        });
                        Flex.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(52:13)", "orderdetail");
                        Flex.padding({ left: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create({ "id": 134217893, "type": 10003, params: [this.orderData.price], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Text.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(57:15)", "orderdetail");
                        Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    }, Text);
                    Text.pop();
                    Flex.pop();
                    Flex.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Flex.create({ justifyContent: FlexAlign.SpaceBetween });
                        Flex.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(64:11)", "orderdetail");
                        Flex.width(StyleConstants.FULL_WIDTH);
                        Flex.flexShrink(StyleConstants.FLEX_SHRINK);
                        Flex.flexGrow(StyleConstants.FLEX_GROW);
                        Flex.flexBasis(StyleConstants.FLEX_BASIC);
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Flex.create({ direction: FlexDirection.Column });
                        Flex.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(65:13)", "orderdetail");
                        Flex.width(StyleConstants.SEVENTY_HEIGHT);
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.orderData.specifications.length === 2 ?
                            this.orderData.specifications[0].value + '，' + this.orderData.specifications[1].value :
                            this.orderData.specifications.length === 3 ?
                                this.orderData.specifications[0].value + '，' + this.orderData.specifications[1].value + '，' + this.orderData.specifications[2].value :
                                this.orderData.specifications.length === 4 ?
                                    this.orderData.specifications[0].value + '，' + this.orderData.specifications[1].value + '，' + this.orderData.specifications[2].value + '，' + this.orderData.specifications[3].value : '');
                        Text.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(66:15)", "orderdetail");
                        Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    }, Text);
                    Text.pop();
                    Flex.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Flex.create({
                            direction: FlexDirection.Column,
                            alignItems: ItemAlign.End
                        });
                        Flex.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(78:13)", "orderdetail");
                        Flex.padding({ left: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`x${this.orderData.count}`);
                        Text.debugLine("features/orderdetail/src/main/ets/components/CommodityOrderItem.ets(82:15)", "orderdetail");
                        Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    }, Text);
                    Text.pop();
                    Flex.pop();
                    Flex.pop();
                    Flex.pop();
                    Flex.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
