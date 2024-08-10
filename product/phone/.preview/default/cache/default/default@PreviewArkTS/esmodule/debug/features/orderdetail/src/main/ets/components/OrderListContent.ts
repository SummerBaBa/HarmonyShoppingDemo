if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface OrderListContent_Params {
    currentBreakpoint?: string;
    orderList?: Order[];
    commodityList?: Commodity[];
    status?: OrderOperationStatus;
    localDataManager?: LocalDataManager;
}
import promptAction from "@ohos:promptAction";
import router from "@ohos:router";
import { CommodityOrderItem } from "@bundle:com.example.multishopping/phone@orderdetail/ets/components/CommodityOrderItem";
import { payEnum, statusEnum } from "@bundle:com.example.multishopping/phone@orderdetail/ets/viewmodel/OrderData";
import { OrderDetailConstants } from "@bundle:com.example.multishopping/phone@orderdetail/ets/constants/OrderDetailConstants";
import { LocalDataManager, Logger, OrderOperationStatus, EmptyComponent, CommodityList, StyleConstants, GridConstants } from "@bundle:com.example.multishopping/phone@common/index";
import type { Order, Commodity } from "@bundle:com.example.multishopping/phone@common/index";
import type { updateOrderProps } from '@ohos/common/src/main/ets/viewmodel/OrderModel';
import { BreakpointConstants } from "@bundle:com.example.multishopping/phone@common/ets/constants/BreakpointConstants";
export class OrderListContent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__orderList = this.initializeConsume("orderList", "orderList");
        this.__commodityList = this.initializeConsume("commodityList", "commodityList");
        this.status = OrderOperationStatus.ALLStatus;
        this.localDataManager = LocalDataManager.instance();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: OrderListContent_Params) {
        if (params.status !== undefined) {
            this.status = params.status;
        }
        if (params.localDataManager !== undefined) {
            this.localDataManager = params.localDataManager;
        }
    }
    updateStateVars(params: OrderListContent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__orderList.purgeDependencyOnElmtId(rmElmtId);
        this.__commodityList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__orderList.aboutToBeDeleted();
        this.__commodityList.aboutToBeDeleted();
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
    private __orderList: ObservedPropertyAbstractPU<Order[]>;
    get orderList() {
        return this.__orderList.get();
    }
    set orderList(newValue: Order[]) {
        this.__orderList.set(newValue);
    }
    private __commodityList: ObservedPropertyAbstractPU<Commodity[]>;
    get commodityList() {
        return this.__commodityList.get();
    }
    set commodityList(newValue: Commodity[]) {
        this.__commodityList.set(newValue);
    }
    private status: OrderOperationStatus;
    private localDataManager: LocalDataManager;
    paymentHandler(orderId: string, status: number, msg: string | Resource) {
        let orderIdStatus: updateOrderProps = { orderId, status };
        this.orderList = this.localDataManager.updateOrder(orderIdStatus);
        promptAction.showToast({ message: `${msg}${OrderDetailConstants.SUCCESS}` });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(51:5)", "orderdetail");
            Column.margin({
                top: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(52:7)", "orderdetail");
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
            GridRow.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(53:9)", "orderdetail");
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
            GridCol.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(60:11)", "orderdetail");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(68:13)", "orderdetail");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.status === OrderOperationStatus.ALLStatus ||
                this.orderList.filter(item => item.status === this.status).length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create();
                        List.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(71:17)", "orderdetail");
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const info = _item;
                            {
                                const itemCreation = (elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    itemCreation2(elmtId, isInitialRender);
                                    if (!isInitialRender) {
                                        ListItem.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                };
                                const itemCreation2 = (elmtId, isInitialRender) => {
                                    ListItem.create(deepRenderFunction, true);
                                    ListItem.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(74:21)", "orderdetail");
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Flex.create({ direction: FlexDirection.Column });
                                        Flex.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(75:23)", "orderdetail");
                                        Flex.onClick(() => {
                                            router.pushUrl({
                                                url: OrderDetailConstants.PAY_ORDER_PAGE_URL,
                                                params: {
                                                    order: info
                                                }
                                            }).catch((err: Error) => {
                                                Logger.error(JSON.stringify(err));
                                            });
                                        });
                                        Flex.width(StyleConstants.FULL_WIDTH);
                                        Flex.backgroundColor(Color.White);
                                        Flex.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Flex.margin({
                                            bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                        });
                                        Flex.padding({
                                            left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                            right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                            top: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                            bottom: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                        });
                                    }, Flex);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Flex.create({ justifyContent: FlexAlign.End });
                                        Flex.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(76:25)", "orderdetail");
                                        Flex.height({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Flex.margin({
                                            top: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                            bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                        });
                                        Flex.width(StyleConstants.FULL_WIDTH);
                                    }, Flex);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create(info.status !== undefined ? statusEnum[info.status] : '');
                                        Text.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(77:27)", "orderdetail");
                                        Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Text.fontColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                    }, Text);
                                    Text.pop();
                                    Flex.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Divider.create();
                                        Divider.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(88:25)", "orderdetail");
                                        Divider.width(StyleConstants.FULL_WIDTH);
                                        Divider.height({ "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Divider.backgroundColor({ "id": 134217899, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Divider.margin({
                                            bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                        });
                                    }, Divider);
                                    {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            if (isInitialRender) {
                                                let componentCall = new CommodityOrderItem(this, { orderData: info }, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/OrderListContent.ets", line: 96, col: 25 });
                                                ViewPU.create(componentCall);
                                                let paramsLambda = () => {
                                                    return {
                                                        orderData: info
                                                    };
                                                };
                                                componentCall.paramsGenerator_ = paramsLambda;
                                            }
                                            else {
                                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                                            }
                                        }, { name: "CommodityOrderItem" });
                                    }
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create({ "id": 134217772, "type": 10003, params: [info.orderId], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Text.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(97:25)", "orderdetail");
                                        Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Text.width(StyleConstants.FULL_WIDTH);
                                        Text.margin({
                                            top: { "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                        });
                                    }, Text);
                                    Text.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Divider.create();
                                        Divider.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(104:25)", "orderdetail");
                                        Divider.width(StyleConstants.FULL_WIDTH);
                                        Divider.height({ "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Divider.backgroundColor({ "id": 134217899, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Divider.margin({
                                            top: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                        });
                                    }, Divider);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Flex.create({
                                            direction: FlexDirection.Column,
                                            alignItems: ItemAlign.End,
                                            justifyContent: FlexAlign.End
                                        });
                                        Flex.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(111:25)", "orderdetail");
                                        Flex.height({ "id": 134217792, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Flex.padding({
                                            top: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                        });
                                    }, Flex);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create({ "id": 134217764, "type": 10003, params: [info.count,
                                                info.status !== undefined ? payEnum[info.status] : '', info.price * info.count], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Text.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(116:27)", "orderdetail");
                                        Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Text.margin({
                                            bottom: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                        });
                                    }, Text);
                                    Text.pop();
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Flex.create({ justifyContent: FlexAlign.End });
                                        Flex.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(122:27)", "orderdetail");
                                        Flex.width(StyleConstants.FULL_WIDTH);
                                    }, Flex);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        If.create();
                                        if (info.status === OrderOperationStatus.UN_PAY) {
                                            this.ifElseBranchUpdateFunction(0, () => {
                                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                    Button.createWithLabel({ "id": 134217778, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                                    Button.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(124:31)", "orderdetail");
                                                    Button.height({ "id": 134217791, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                                    Button.fontColor(Color.White);
                                                    Button.backgroundColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                                    Button.borderRadius({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                                    Button.onClick(() => {
                                                        this.paymentHandler(info.orderId !== undefined ? info.orderId : '', OrderOperationStatus.DELIVERED, OrderDetailConstants.ORDER_PAY);
                                                    });
                                                }, Button);
                                                Button.pop();
                                            });
                                        }
                                        else if (info.status === OrderOperationStatus.DELIVERED) {
                                            this.ifElseBranchUpdateFunction(1, () => {
                                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                    Button.createWithLabel({ "id": 134217761, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                                    Button.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(134:31)", "orderdetail");
                                                    Button.height({ "id": 134217791, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                                    Button.fontColor(Color.White);
                                                    Button.backgroundColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                                    Button.borderRadius({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                                    Button.onClick(() => {
                                                        this.paymentHandler(info.orderId !== undefined ? info.orderId : '', OrderOperationStatus.RECEIPT, OrderDetailConstants.ORDER_CONFIRM);
                                                    });
                                                }, Button);
                                                Button.pop();
                                            });
                                        }
                                        else {
                                            this.ifElseBranchUpdateFunction(2, () => {
                                            });
                                        }
                                    }, If);
                                    If.pop();
                                    Flex.pop();
                                    Flex.pop();
                                    Flex.pop();
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.status === OrderOperationStatus.ALLStatus ?
                            this.orderList : this.orderList.filter(item => item.status === this.status), forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    List.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(178:17)", "orderdetail");
                        Column.width(StyleConstants.FULL_WIDTH);
                    }, Column);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new EmptyComponent(this, { outerHeight: StyleConstants.FIFTY_HEIGHT }, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/OrderListContent.ets", line: 179, col: 19 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        outerHeight: StyleConstants.FIFTY_HEIGHT
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "EmptyComponent" });
                    }
                    Column.pop();
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217765, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/orderdetail/src/main/ets/components/OrderListContent.ets(183:15)", "orderdetail");
            Text.fontSize({ "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({
                top: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Text.width(StyleConstants.FULL_WIDTH);
            Text.textAlign(TextAlign.Start);
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommodityList(this, {
                        commodityList: this.__commodityList,
                        column: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
                            StyleConstants.DISPLAY_TWO : StyleConstants.DISPLAY_THREE,
                        onClickItem: (data: Commodity) => {
                            router.pushUrl({
                                url: OrderDetailConstants.COMMODITY_DETAIL_PAGE_URL,
                                params: {
                                    id: data.id
                                }
                            }).catch((err: Error) => {
                                Logger.error(JSON.stringify(err));
                            });
                        }
                    }, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/OrderListContent.ets", line: 193, col: 15 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            commodityList: this.commodityList,
                            column: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
                                StyleConstants.DISPLAY_TWO : StyleConstants.DISPLAY_THREE,
                            onClickItem: (data: Commodity) => {
                                router.pushUrl({
                                    url: OrderDetailConstants.COMMODITY_DETAIL_PAGE_URL,
                                    params: {
                                        id: data.id
                                    }
                                }).catch((err: Error) => {
                                    Logger.error(JSON.stringify(err));
                                });
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        column: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
                            StyleConstants.DISPLAY_TWO : StyleConstants.DISPLAY_THREE
                    });
                }
            }, { name: "CommodityList" });
        }
        Column.pop();
        GridCol.pop();
        GridRow.pop();
        Scroll.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
