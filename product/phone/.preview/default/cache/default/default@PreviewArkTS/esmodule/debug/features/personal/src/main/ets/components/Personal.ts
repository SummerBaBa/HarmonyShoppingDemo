if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Personal_Params {
    currentBreakpoint?: string;
    orderCount?: OrderCount;
    orderIconButton?: IconButtonModel[];
}
import router from "@ohos:router";
import { Logger, OrderType, StyleConstants, BreakpointConstants } from "@bundle:com.example.multishopping/phone@common/index";
import { orderButton, memberButton, activityButton, liveData } from "@bundle:com.example.multishopping/phone@personal/ets/viewmodel/PersonalData";
import { IconButton } from "@bundle:com.example.multishopping/phone@personal/ets/components/IconButton";
import { LiveList } from "@bundle:com.example.multishopping/phone@personal/ets/components/LiveList";
import { PersonalConstants } from "@bundle:com.example.multishopping/phone@personal/ets/constants/PersonalConstants";
import type { IconButtonModel, OrderCount } from '../viewmodel/IconButtonModel';
export class Personal extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', 'md', "currentBreakpoint");
        this.__orderCount = new SynchedPropertyObjectTwoWayPU(params.orderCount, this, "orderCount");
        this.__orderIconButton = new ObservedPropertyObjectPU(orderButton, this, "orderIconButton");
        this.setInitiallyProvidedValue(params);
        this.declareWatch("orderCount", this.onOrderCountChange);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Personal_Params) {
        if (params.orderIconButton !== undefined) {
            this.orderIconButton = params.orderIconButton;
        }
    }
    updateStateVars(params: Personal_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__orderCount.purgeDependencyOnElmtId(rmElmtId);
        this.__orderIconButton.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__orderCount.aboutToBeDeleted();
        this.__orderIconButton.aboutToBeDeleted();
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
    private __orderCount: SynchedPropertySimpleOneWayPU<OrderCount>;
    get orderCount() {
        return this.__orderCount.get();
    }
    set orderCount(newValue: OrderCount) {
        this.__orderCount.set(newValue);
    }
    private __orderIconButton: ObservedPropertyObjectPU<IconButtonModel[]>;
    get orderIconButton() {
        return this.__orderIconButton.get();
    }
    set orderIconButton(newValue: IconButtonModel[]) {
        this.__orderIconButton.set(newValue);
    }
    aboutToAppear() {
        this.onOrderCountChange();
    }
    onOrderCountChange() {
        this.orderIconButton.forEach((item: IconButtonModel) => {
            if (item.key !== undefined) {
                switch (item.key) {
                    case OrderType.PAYMENT:
                        item.count = this.orderCount.payment;
                        break;
                    case OrderType.SHIP:
                        item.count = this.orderCount.ship;
                        break;
                    case OrderType.RECEIPT:
                        item.count = this.orderCount.receipt;
                        break;
                    case OrderType.EVALUATION:
                        item.count = this.orderCount.evaluation;
                        break;
                    case OrderType.SALE:
                        item.count = this.orderCount.sale;
                        break;
                    default:
                        break;
                }
            }
        });
    }
    onOrderButtonClick(key: OrderType) {
        let tabIndex: number = 0;
        switch (key) {
            case OrderType.PAYMENT:
                tabIndex = PersonalConstants.PENDING_PAYMENT_INDEX;
                break;
            case OrderType.SHIP:
                tabIndex = PersonalConstants.WAITING_SHIPMENT_INDEX;
                break;
            case OrderType.RECEIPT:
                tabIndex = PersonalConstants.WAITING_RECEIVED_INDEX;
                break;
            case OrderType.EVALUATION:
                tabIndex = PersonalConstants.WAITING_EVALUATE_INDEX;
                break;
            default:
                break;
        }
        router.pushUrl({
            url: PersonalConstants.ORDER_LIST_PAGE_URL,
            params: { tabIndex: tabIndex }
        }).catch((err: Error) => {
            Logger.error(JSON.stringify(err));
        });
    }
    Avatar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/personal/src/main/ets/components/Personal.ets(96:5)", "@ohos/personal");
            Column.height({ "id": 134217981, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Column.width(StyleConstants.FULL_WIDTH);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/personal/src/main/ets/components/Personal.ets(97:7)", "@ohos/personal");
            Row.height({ "id": 134217983, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Row.width(StyleConstants.FULL_WIDTH);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217863, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/personal/src/main/ets/components/Personal.ets(98:9)", "@ohos/personal");
            Image.width({ "id": 134217983, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217983, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.borderRadius({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/personal/src/main/ets/components/Personal.ets(102:9)", "@ohos/personal");
            Column.justifyContent(FlexAlign.Center);
            Column.margin({ left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217948, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/personal/src/main/ets/components/Personal.ets(103:11)", "@ohos/personal");
            Text.fontSize({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.margin({ bottom: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/personal/src/main/ets/components/Personal.ets(107:11)", "@ohos/personal");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217958, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/personal/src/main/ets/components/Personal.ets(108:13)", "@ohos/personal");
            Text.fontSize({ "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.padding({
                left: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Text.backgroundColor({ "id": 134217905, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({ right: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Text.borderRadius({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217968, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/personal/src/main/ets/components/Personal.ets(120:13)", "@ohos/personal");
            Text.fontSize({ "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.padding({
                left: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Text.backgroundColor({ "id": 134217905, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.borderRadius({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/personal/src/main/ets/components/Personal.ets(139:7)", "@ohos/personal");
            Row.justifyContent(FlexAlign.SpaceAround);
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height({ "id": 134217980, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Row.margin({
                top: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Row);
        this.AccountPoints.bind(this)({ "id": 134217949, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217946, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("features/personal/src/main/ets/components/Personal.ets(141:9)", "@ohos/personal");
            Divider.vertical(true);
            Divider.color({ "id": 134217904, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Divider.height({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Divider);
        this.AccountPoints.bind(this)({ "id": 134217949, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217947, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("features/personal/src/main/ets/components/Personal.ets(146:9)", "@ohos/personal");
            Divider.vertical(true);
            Divider.color({ "id": 134217904, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Divider.height({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Divider);
        this.AccountPoints.bind(this)({ "id": 134217949, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217950, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        Row.pop();
        Column.pop();
    }
    AccountPoints(pointValue: Resource, pointName: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/personal/src/main/ets/components/Personal.ets(166:5)", "@ohos/personal");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(pointValue);
            Text.debugLine("features/personal/src/main/ets/components/Personal.ets(167:7)", "@ohos/personal");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/personal/src/main/ets/components/Personal.ets(170:7)", "@ohos/personal");
            Row.justifyContent(FlexAlign.SpaceAround);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(pointName);
            Text.debugLine("features/personal/src/main/ets/components/Personal.ets(171:9)", "@ohos/personal");
            Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217973, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/personal/src/main/ets/components/Personal.ets(174:9)", "@ohos/personal");
            Image.objectFit(ImageFit.Contain);
            Image.height({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        Row.pop();
        Column.pop();
    }
    Order(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.debugLine("features/personal/src/main/ets/components/Personal.ets(185:5)", "@ohos/personal");
            Flex.height({ "id": 134217789, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.padding({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.backgroundColor(Color.White);
            Flex.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.margin({ bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.SpaceBetween,
                alignItems: ItemAlign.Center
            });
            Flex.debugLine("features/personal/src/main/ets/components/Personal.ets(186:7)", "@ohos/personal");
            Flex.margin({ bottom: { "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217962, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/personal/src/main/ets/components/Personal.ets(190:9)", "@ohos/personal");
            Text.fontSize({ "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/personal/src/main/ets/components/Personal.ets(192:9)", "@ohos/personal");
            Row.onClick(() => {
                router.pushUrl({
                    url: PersonalConstants.ORDER_LIST_PAGE_URL,
                    params: { tabIndex: 0 }
                }).catch((err: Error) => {
                    Logger.error(JSON.stringify(err));
                });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217963, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/personal/src/main/ets/components/Personal.ets(193:11)", "@ohos/personal");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217824, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/personal/src/main/ets/components/Personal.ets(196:11)", "@ohos/personal");
            Image.objectFit(ImageFit.Contain);
            Image.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        Row.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.SpaceAround,
                alignItems: ItemAlign.Center
            });
            Flex.debugLine("features/personal/src/main/ets/components/Personal.ets(212:7)", "@ohos/personal");
            Flex.width(StyleConstants.FULL_WIDTH);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const iconButton = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new IconButton(this, {
                                props: iconButton,
                                click: this.onOrderButtonClick
                            }, undefined, elmtId, () => { }, { page: "features/personal/src/main/ets/components/Personal.ets", line: 217, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    props: iconButton,
                                    click: this.onOrderButtonClick
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                props: iconButton
                            });
                        }
                    }, { name: "IconButton" });
                }
            };
            this.forEachUpdateFunction(elmtId, this.orderIconButton, forEachItemGenFunction, (iconButton: IconButtonModel) => JSON.stringify(iconButton), false, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
        Flex.pop();
    }
    IconDock(buttons: IconButtonModel[], parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.SpaceAround,
                alignItems: ItemAlign.Center
            });
            Flex.debugLine("features/personal/src/main/ets/components/Personal.ets(232:5)", "@ohos/personal");
            Flex.height({ "id": 134217982, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.padding({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.backgroundColor(Color.White);
            Flex.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.margin({ bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const iconButton = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new IconButton(this, {
                                props: iconButton
                            }, undefined, elmtId, () => { }, { page: "features/personal/src/main/ets/components/Personal.ets", line: 237, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    props: iconButton
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                props: iconButton
                            });
                        }
                    }, { name: "IconButton" });
                }
            };
            this.forEachUpdateFunction(elmtId, buttons, forEachItemGenFunction, (iconButton: IconButtonModel[]) => JSON.stringify(iconButton), false, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
    }
    LiveTitle(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/personal/src/main/ets/components/Personal.ets(249:5)", "@ohos/personal");
            Row.margin({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Row.width(StyleConstants.FULL_WIDTH);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217956, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/personal/src/main/ets/components/Personal.ets(250:7)", "@ohos/personal");
            Text.fontSize({ "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(StyleConstants.FONT_WEIGHT_FIVE);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/personal/src/main/ets/components/Personal.ets(254:7)", "@ohos/personal");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217955, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/personal/src/main/ets/components/Personal.ets(255:7)", "@ohos/personal");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217824, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/personal/src/main/ets/components/Personal.ets(258:7)", "@ohos/personal");
            Image.objectFit(ImageFit.Contain);
            Image.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Top });
            Stack.debugLine("features/personal/src/main/ets/components/Personal.ets(268:5)", "@ohos/personal");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217865, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/personal/src/main/ets/components/Personal.ets(269:7)", "@ohos/personal");
            Image.width(StyleConstants.FULL_WIDTH);
            Image.height({ "id": 134217989, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Auto);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.debugLine("features/personal/src/main/ets/components/Personal.ets(273:7)", "@ohos/personal");
            Flex.padding({
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/personal/src/main/ets/components/Personal.ets(274:9)", "@ohos/personal");
            Row.justifyContent(FlexAlign.End);
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height({ "id": 134217984, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217991, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/personal/src/main/ets/components/Personal.ets(275:11)", "@ohos/personal");
            Image.width({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217867, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/personal/src/main/ets/components/Personal.ets(279:11)", "@ohos/personal");
            Image.width({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.margin({ left: { "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/personal/src/main/ets/components/Personal.ets(288:9)", "@ohos/personal");
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/personal/src/main/ets/components/Personal.ets(289:11)", "@ohos/personal");
        }, Column);
        this.Avatar.bind(this)();
        this.Order.bind(this)();
        this.IconDock.bind(this)(memberButton);
        this.IconDock.bind(this)(activityButton);
        this.LiveTitle.bind(this)();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new LiveList(this, {
                        count: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? StyleConstants.DISPLAY_FOUR :
                            (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ?
                                StyleConstants.DISPLAY_THREE : StyleConstants.DISPLAY_TWO),
                        liveList: liveData
                    }, undefined, elmtId, () => { }, { page: "features/personal/src/main/ets/components/Personal.ets", line: 295, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            count: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? StyleConstants.DISPLAY_FOUR :
                                (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ?
                                    StyleConstants.DISPLAY_THREE : StyleConstants.DISPLAY_TWO),
                            liveList: liveData
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        count: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? StyleConstants.DISPLAY_FOUR :
                            (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ?
                                StyleConstants.DISPLAY_THREE : StyleConstants.DISPLAY_TWO)
                    });
                }
            }, { name: "LiveList" });
        }
        Column.pop();
        Scroll.pop();
        Flex.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
