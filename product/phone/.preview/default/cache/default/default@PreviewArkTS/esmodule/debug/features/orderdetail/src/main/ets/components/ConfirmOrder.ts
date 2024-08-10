if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ConfirmOrder_Params {
    orderList?: Order[];
    amount?: number;
    orderIds?: string[];
    localDataManager?: LocalDataManager;
}
import promptAction from "@ohos:promptAction";
import router from "@ohos:router";
import { AddressInfo } from "@bundle:com.example.multishopping/phone@orderdetail/ets/components/AddressInfo";
import { HeaderBar } from "@bundle:com.example.multishopping/phone@orderdetail/ets/components/HeaderBar";
import { OrderDetailConstants } from "@bundle:com.example.multishopping/phone@orderdetail/ets/constants/OrderDetailConstants";
import { CommodityOrderList } from "@bundle:com.example.multishopping/phone@orderdetail/ets/components/CommodityOrderList";
import { LocalDataManager, OrderOperationStatus, GridConstants, StyleConstants } from "@bundle:com.example.multishopping/phone@common/index";
import type { Order } from "@bundle:com.example.multishopping/phone@common/index";
import type { InsertOrderProps } from '@ohos/common/src/main/ets/viewmodel/OrderModel';
export class ConfirmOrder extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__orderList = this.initializeConsume('orderList', "orderList");
        this.__amount = this.initializeConsume('amount', "amount");
        this.orderIds = [];
        this.localDataManager = LocalDataManager.instance();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ConfirmOrder_Params) {
        if (params.orderIds !== undefined) {
            this.orderIds = params.orderIds;
        }
        if (params.localDataManager !== undefined) {
            this.localDataManager = params.localDataManager;
        }
    }
    updateStateVars(params: ConfirmOrder_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__orderList.purgeDependencyOnElmtId(rmElmtId);
        this.__amount.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__orderList.aboutToBeDeleted();
        this.__amount.aboutToBeDeleted();
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
    private __amount: ObservedPropertyAbstractPU<number>;
    get amount() {
        return this.__amount.get();
    }
    set amount(newValue: number) {
        this.__amount.set(newValue);
    }
    private orderIds: string[];
    private localDataManager: LocalDataManager;
    /**
     * Confirm order to request server.
     */
    confirmOrder(status: number) {
        this.orderList.map((item: Order) => {
            let orderStatus: InsertOrderProps = {
                order: item,
                status: status
            };
            let orderId: string | undefined = this.localDataManager.insertOrder(orderStatus);
            if (orderId !== undefined) {
                this.localDataManager.deleteShopCart([orderId]);
                this.orderIds.push(orderId);
            }
        });
    }
    handleConfirmOrder() {
        try {
            this.confirmOrder(OrderOperationStatus.UN_PAY);
            promptAction.showToast({ message: { "id": 134217771, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            router.replaceUrl({
                url: OrderDetailConstants.PAY_ORDER_PAGE_URL,
                params: { orderIds: this.orderIds }
            });
        }
        catch (err) {
            promptAction.showToast({ message: { "id": 134217770, "type": 10003, params: [err], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.debugLine("features/orderdetail/src/main/ets/components/ConfirmOrder.ets(63:5)", "orderdetail");
            Flex.backgroundColor({ "id": 134217902, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.height(StyleConstants.FULL_HEIGHT);
            Flex.width(StyleConstants.FULL_WIDTH);
        }, Flex);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new HeaderBar(this, {
                        title: { "id": 134217766, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                        onBack: () => router.back()
                    }, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/ConfirmOrder.ets", line: 64, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: { "id": 134217766, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
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
            Column.create();
            Column.debugLine("features/orderdetail/src/main/ets/components/ConfirmOrder.ets(68:7)", "orderdetail");
            Column.flexGrow(StyleConstants.FLEX_GROW);
            Column.padding({ left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/orderdetail/src/main/ets/components/ConfirmOrder.ets(69:9)", "orderdetail");
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
            GridRow.debugLine("features/orderdetail/src/main/ets/components/ConfirmOrder.ets(70:11)", "orderdetail");
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
            GridCol.debugLine("features/orderdetail/src/main/ets/components/ConfirmOrder.ets(77:13)", "orderdetail");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/orderdetail/src/main/ets/components/ConfirmOrder.ets(85:15)", "orderdetail");
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new AddressInfo(this, {}, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/ConfirmOrder.ets", line: 86, col: 17 });
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
                    let componentCall = new CommodityOrderList(this, {}, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/ConfirmOrder.ets", line: 87, col: 17 });
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
        Column.pop();
        GridCol.pop();
        GridRow.pop();
        Scroll.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: GridConstants.COLUMN_FOUR,
                    md: GridConstants.COLUMN_EIGHT,
                    lg: GridConstants.COLUMN_TWELVE
                },
                gutter: GridConstants.GUTTER_TWELVE
            });
            GridRow.debugLine("features/orderdetail/src/main/ets/components/ConfirmOrder.ets(97:7)", "orderdetail");
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
                offset: { lg: GridConstants.OFFSET_TWO }
            });
            GridCol.debugLine("features/orderdetail/src/main/ets/components/ConfirmOrder.ets(105:9)", "orderdetail");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217758, "type": 10003, params: [this.amount], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/orderdetail/src/main/ets/components/ConfirmOrder.ets(113:11)", "orderdetail");
            Text.fontSize({ "id": 134217924, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({ right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Text.fontColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.textAlign(TextAlign.Start);
            Text.width(StyleConstants.FULL_WIDTH);
            Text.height({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        GridCol.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: GridConstants.SPAN_TWO,
                    md: GridConstants.SPAN_THREE,
                    lg: GridConstants.SPAN_THREE
                },
                offset: {
                    md: GridConstants.OFFSET_THREE,
                    lg: GridConstants.OFFSET_THREE
                }
            });
            GridCol.debugLine("features/orderdetail/src/main/ets/components/ConfirmOrder.ets(122:9)", "orderdetail");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 134217759, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Button.debugLine("features/orderdetail/src/main/ets/components/ConfirmOrder.ets(133:11)", "orderdetail");
            Button.backgroundColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Button.height({ "id": 134217788, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Button.width(StyleConstants.FULL_WIDTH);
            Button.margin({ top: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Button.onClick((): void => this.handleConfirmOrder());
        }, Button);
        Button.pop();
        GridCol.pop();
        GridRow.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
