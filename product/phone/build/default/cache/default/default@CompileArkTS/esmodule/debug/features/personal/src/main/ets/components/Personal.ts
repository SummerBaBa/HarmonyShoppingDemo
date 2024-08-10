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
            Column.height({ "id": 134217969, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Column.width(StyleConstants.FULL_WIDTH);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 134217971, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Row.width(StyleConstants.FULL_WIDTH);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217862, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217971, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217971, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.borderRadius({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.justifyContent(FlexAlign.Center);
            Column.margin({ left: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217946, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.margin({ bottom: { "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217956, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217918, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217896, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.padding({
                left: { "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Text.backgroundColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({ right: { "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Text.borderRadius({ "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217966, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217918, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217896, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.padding({
                left: { "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Text.backgroundColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.borderRadius({ "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceAround);
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height({ "id": 134217968, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Row.margin({
                top: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Row);
        this.AccountPoints.bind(this)({ "id": 134217947, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217944, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.vertical(true);
            Divider.color({ "id": 134217902, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Divider.height({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Divider);
        this.AccountPoints.bind(this)({ "id": 134217947, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217945, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.vertical(true);
            Divider.color({ "id": 134217902, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Divider.height({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Divider);
        this.AccountPoints.bind(this)({ "id": 134217947, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217948, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        Row.pop();
        Column.pop();
    }
    AccountPoints(pointValue: Resource, pointName: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(pointValue);
            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217896, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.SpaceAround);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(pointName);
            Text.fontSize({ "id": 134217921, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217896, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217992, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Contain);
            Image.height({ "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        Row.pop();
        Column.pop();
    }
    Order(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.height({ "id": 134217789, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.padding({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.backgroundColor(Color.White);
            Flex.borderRadius({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.margin({ bottom: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.SpaceBetween,
                alignItems: ItemAlign.Center
            });
            Flex.margin({ bottom: { "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217960, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217919, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
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
            Text.create({ "id": 134217961, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217901, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217845, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Contain);
            Image.height({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        Row.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.SpaceAround,
                alignItems: ItemAlign.Center
            });
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
            Flex.height({ "id": 134217970, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.padding({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.backgroundColor(Color.White);
            Flex.borderRadius({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.margin({ bottom: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
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
            Row.margin({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Row.width(StyleConstants.FULL_WIDTH);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217954, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217919, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(StyleConstants.FONT_WEIGHT_FIVE);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217953, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217901, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217845, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Contain);
            Image.height({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Top });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217888, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width(StyleConstants.FULL_WIDTH);
            Image.height({ "id": 134217977, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Auto);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.padding({
                left: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.justifyContent(FlexAlign.End);
            Row.width(StyleConstants.FULL_WIDTH);
            Row.height({ "id": 134217972, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217989, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217890, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.margin({ left: { "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
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
