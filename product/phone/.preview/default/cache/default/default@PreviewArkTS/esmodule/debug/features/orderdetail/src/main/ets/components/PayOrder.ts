if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface PayOrder_Params {
    data?: Order[];
    totalPrice?: number;
    localDataManager?: LocalDataManager;
}
import promptAction from "@ohos:promptAction";
import router from "@ohos:router";
import { CommodityOrderList } from "@bundle:com.example.multishopping/phone@orderdetail/ets/components/CommodityOrderList";
import { AddressInfo } from "@bundle:com.example.multishopping/phone@orderdetail/ets/components/AddressInfo";
import { HeaderBar } from "@bundle:com.example.multishopping/phone@orderdetail/ets/components/HeaderBar";
import { OrderDetailConstants } from "@bundle:com.example.multishopping/phone@orderdetail/ets/constants/OrderDetailConstants";
import { LocalDataManager, formatDate, OrderOperationStatus, StyleConstants, GridConstants } from "@bundle:com.example.multishopping/phone@common/index";
import type { Order } from "@bundle:com.example.multishopping/phone@common/index";
import type { updateOrderProps } from '@ohos/common/src/main/ets/viewmodel/OrderModel';
export class PayOrder extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__data = this.initializeConsume('orderList', "data");
        this.__totalPrice = new SynchedPropertySimpleTwoWayPU(params.totalPrice, this, "totalPrice");
        this.localDataManager = LocalDataManager.instance();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PayOrder_Params) {
        if (params.localDataManager !== undefined) {
            this.localDataManager = params.localDataManager;
        }
    }
    updateStateVars(params: PayOrder_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__data.purgeDependencyOnElmtId(rmElmtId);
        this.__totalPrice.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__data.aboutToBeDeleted();
        this.__totalPrice.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __data: ObservedPropertyAbstractPU<Order[]>;
    get data() {
        return this.__data.get();
    }
    set data(newValue: Order[]) {
        this.__data.set(newValue);
    }
    private __totalPrice: SynchedPropertySimpleTwoWayPU<number>;
    get totalPrice() {
        return this.__totalPrice.get();
    }
    set totalPrice(newValue: number) {
        this.__totalPrice.set(newValue);
    }
    private localDataManager: LocalDataManager;
    OrderStatus(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(40:5)", "orderdetail");
            Row.padding({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Row.width(StyleConstants.FULL_WIDTH);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(41:7)", "orderdetail");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(OrderDetailConstants.STATUS_ENUM[this.data[0].status !== undefined ? this.data[0].status : 0]);
            Text.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(42:9)", "orderdetail");
            Text.fontSize({ "id": 134217914, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({ bottom: { "id": 134217941, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(OrderDetailConstants.STATUS_DESC_ENUM[this.data[0]?.status !== undefined ? this.data[0]?.status : 0]);
            Text.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(46:9)", "orderdetail");
            Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.opacity(StyleConstants.SIXTY_OPACITY);
            Text.margin({ bottom: { "id": 134217941, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.data[0].createTime !== undefined ?
                formatDate(new Date(this.data[0].createTime).valueOf(), OrderDetailConstants.DATE_FORMAT) : '');
            Text.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(51:9)", "orderdetail");
            Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.opacity(StyleConstants.SIXTY_OPACITY);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(59:7)", "orderdetail");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217801, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(60:7)", "orderdetail");
            Image.width({ "id": 134217796, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217795, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.margin({ right: { "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217803, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(64:7)", "orderdetail");
            Image.width({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        Row.pop();
    }
    CostInfo(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(73:5)", "orderdetail");
            Column.backgroundColor(Color.White);
            Column.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Column.margin({ bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Column.padding({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(74:7)", "orderdetail");
            Flex.margin({ bottom: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217780, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(75:9)", "orderdetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217893, "type": 10003, params: [this.totalPrice], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(77:9)", "orderdetail");
            Text.textAlign(TextAlign.End);
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(83:7)", "orderdetail");
            Flex.margin({ bottom: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217763, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(84:9)", "orderdetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217768, "type": 10003, params: [OrderDetailConstants.FEE_PRICE], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(86:9)", "orderdetail");
            Text.textAlign(TextAlign.End);
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(92:7)", "orderdetail");
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217777, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(93:9)", "orderdetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217893, "type": 10003, params: [this.totalPrice], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(95:9)", "orderdetail");
            Text.textAlign(TextAlign.End);
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Flex.pop();
        Column.pop();
    }
    BottomBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                alignItems: ItemAlign.Center
            });
            Flex.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(107:5)", "orderdetail");
            Flex.height({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.data[0].status === OrderOperationStatus.UN_PAY) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel({ "id": 134217760, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Button.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(111:9)", "orderdetail");
                        Button.backgroundColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Button.height({ "id": 134217787, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Button.width(StyleConstants.FULL_WIDTH);
                        Button.onClick(() => {
                            this.data.forEach((item: Order) => {
                                if (item.orderId !== undefined) {
                                    let UpdateOrderParameter: updateOrderProps = {
                                        orderId: item.orderId,
                                        status: OrderOperationStatus.DELIVERED
                                    };
                                    this.localDataManager.updateOrder(UpdateOrderParameter);
                                }
                            });
                            promptAction.showToast({
                                message: { "id": 134217767, "type": 10003, params: [OrderDetailConstants.PAYMENT_ENUM[OrderOperationStatus.UN_PAY]], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                            });
                            router.back();
                        });
                    }, Button);
                    Button.pop();
                });
            }
            else if (this.data[0].status === OrderOperationStatus.DELIVERED) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel({ "id": 134217761, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Button.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(131:9)", "orderdetail");
                        Button.height({ "id": 134217787, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Button.width(StyleConstants.FULL_WIDTH);
                        Button.backgroundColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Button.onClick(() => {
                            if (this.data[0].orderId !== undefined) {
                                let UpdateOrderParameter: updateOrderProps = {
                                    orderId: this.data[0].orderId,
                                    status: OrderOperationStatus.RECEIPT
                                };
                                this.localDataManager.updateOrder(UpdateOrderParameter);
                                promptAction.showToast({
                                    message: { "id": 134217767, "type": 10003, params: [OrderDetailConstants.PAYMENT_ENUM[OrderOperationStatus.DELIVERED]], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                });
                                router.back();
                            }
                        });
                    }, Button);
                    Button.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(149:9)", "orderdetail");
                    }, Row);
                    Row.pop();
                });
            }
        }, If);
        If.pop();
        Flex.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(156:5)", "orderdetail");
            Flex.height(StyleConstants.FULL_HEIGHT);
            Flex.backgroundColor({ "id": 134217902, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new HeaderBar(this, {
                        title: { "id": 134217769, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                        onBack: () => router.back()
                    }, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/PayOrder.ets", line: 157, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: { "id": 134217769, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                            onBack: () => router.back()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "HeaderBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.TopStart });
            Stack.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(161:7)", "orderdetail");
            Stack.flexGrow(StyleConstants.FLEX_GROW);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217804, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(162:9)", "orderdetail");
            Image.width(StyleConstants.FULL_WIDTH);
            Image.height({ "id": 134217785, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Auto);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(166:9)", "orderdetail");
            Column.padding({ left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(167:11)", "orderdetail");
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: GridConstants.COLUMN_FOUR,
                    md: GridConstants.COLUMN_EIGHT,
                    lg: GridConstants.COLUMN_TWELVE
                }
            });
            GridRow.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(168:13)", "orderdetail");
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: GridConstants.SPAN_FOUR,
                    md: GridConstants.SPAN_EIGHT,
                    lg: GridConstants.SPAN_EIGHT
                },
                offset: { lg: GridConstants.OFFSET_TWO }
            });
            GridCol.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(175:15)", "orderdetail");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(183:17)", "orderdetail");
        }, Column);
        this.OrderStatus.bind(this)();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new AddressInfo(this, {}, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/PayOrder.ets", line: 185, col: 19 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "AddressInfo" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommodityOrderList(this, {}, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/PayOrder.ets", line: 186, col: 19 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CommodityOrderList" });
        }
        this.CostInfo.bind(this)();
        Column.pop();
        GridCol.pop();
        GridRow.pop();
        Scroll.pop();
        Column.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: GridConstants.COLUMN_FOUR,
                    md: GridConstants.COLUMN_EIGHT,
                    lg: GridConstants.COLUMN_TWELVE
                }
            });
            GridRow.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(198:7)", "orderdetail");
            GridRow.padding({
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            GridRow.border({
                color: { "id": 134217899, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                width: { top: { "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } }
            });
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: GridConstants.SPAN_TWO,
                    md: GridConstants.SPAN_TWO,
                    lg: GridConstants.SPAN_TWO
                },
                offset: {
                    sm: GridConstants.OFFSET_TWO,
                    md: GridConstants.OFFSET_SIX,
                    lg: GridConstants.OFFSET_EIGHT
                }
            });
            GridCol.debugLine("features/orderdetail/src/main/ets/components/PayOrder.ets(205:9)", "orderdetail");
        }, GridCol);
        this.BottomBar.bind(this)();
        GridCol.pop();
        GridRow.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
