if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface OrderDetailList_Params {
    currentBreakpoint?: string;
    currentTabIndex?: number;
}
import router from "@ohos:router";
import { HeaderBar } from "@bundle:com.example.multishopping/phone@orderdetail/ets/components/HeaderBar";
import { OrderListContent } from "@bundle:com.example.multishopping/phone@orderdetail/ets/components/OrderListContent";
import { OrderDetailConstants } from "@bundle:com.example.multishopping/phone@orderdetail/ets/constants/OrderDetailConstants";
import { EmptyComponent, OrderOperationStatus, StyleConstants, BreakpointConstants } from "@bundle:com.example.multishopping/phone@common/index";
export class OrderDetailList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__currentTabIndex = this.initializeConsume("currentTabIndex", "currentTabIndex");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: OrderDetailList_Params) {
    }
    updateStateVars(params: OrderDetailList_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTabIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__currentTabIndex.aboutToBeDeleted();
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
    private __currentTabIndex: ObservedPropertyAbstractPU<number>;
    get currentTabIndex() {
        return this.__currentTabIndex.get();
    }
    set currentTabIndex(newValue: number) {
        this.__currentTabIndex.set(newValue);
    }
    OrderTabs(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(StyleConstants.FULL_HEIGHT);
            Column.width(StyleConstants.FULL_WIDTH);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({
                barPosition: BarPosition.Start,
                index: this.currentTabIndex
            });
            Tabs.barHeight({ "id": 134217793, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Tabs.barWidth(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ?
                StyleConstants.SIXTY_WIDTH : StyleConstants.FULL_WIDTH);
            Tabs.barMode(BarMode.Fixed);
            Tabs.margin({
                top: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, bottom: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Tabs.onChange((index: number) => {
                this.currentTabIndex = index;
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new OrderListContent(this, {
                                status: OrderOperationStatus.ALLStatus,
                            }, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/OrderDetailList.ets", line: 34, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    status: OrderOperationStatus.ALLStatus
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "OrderListContent" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBar.call(this, { "id": 134217757, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderDetailConstants.ALL_INDEX);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new OrderListContent(this, {
                                status: OrderOperationStatus.UN_PAY,
                            }, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/OrderDetailList.ets", line: 41, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    status: OrderOperationStatus.UN_PAY
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "OrderListContent" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBar.call(this, { "id": 134217779, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderDetailConstants.PENDING_PAYMENT_INDEX);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.width(StyleConstants.FULL_WIDTH);
                    Column.height(StyleConstants.FULL_HEIGHT);
                }, Column);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new EmptyComponent(this, {}, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/OrderDetailList.ets", line: 49, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
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
            TabContent.tabBar({ builder: () => {
                    this.tabBar.call(this, { "id": 134217784, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderDetailConstants.WAITING_SHIPMENT_INDEX);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new OrderListContent(this, {
                                status: OrderOperationStatus.DELIVERED,
                            }, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/OrderDetailList.ets", line: 57, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    status: OrderOperationStatus.DELIVERED
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "OrderListContent" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBar.call(this, { "id": 134217782, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderDetailConstants.WAITING_RECEIVED_INDEX);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new OrderListContent(this, {
                                status: OrderOperationStatus.RECEIPT,
                            }, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/OrderDetailList.ets", line: 64, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    status: OrderOperationStatus.RECEIPT
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "OrderListContent" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBar.call(this, { "id": 134217781, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderDetailConstants.WAITING_EVALUATE_INDEX);
                } });
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        Column.pop();
    }
    tabBar(text: string | Resource, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center });
            Flex.width(StyleConstants.FULL_WIDTH);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(text);
            Text.fontSize({ "id": 134217919, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.textAlign(TextAlign.Center);
            Text.fontColor(this.currentTabIndex === index ? { "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } : { "id": 134217901, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(this.currentTabIndex === index ? StyleConstants.FONT_WEIGHT_FIVE : StyleConstants.FONT_WEIGHT_FOUR);
            Text.border({
                color: { "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                width: { bottom: this.currentTabIndex === index ? { "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } : { "id": 134217786, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } }
            });
            Text.height({ "id": 134217794, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Flex.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.backgroundColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new HeaderBar(this, { title: { "id": 134217769, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, onBack: () => {
                            router.back();
                        } }, undefined, elmtId, () => { }, { page: "features/orderdetail/src/main/ets/components/OrderDetailList.ets", line: 103, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: { "id": 134217769, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                            onBack: () => {
                                router.back();
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "HeaderBar" });
        }
        this.OrderTabs.bind(this)();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
