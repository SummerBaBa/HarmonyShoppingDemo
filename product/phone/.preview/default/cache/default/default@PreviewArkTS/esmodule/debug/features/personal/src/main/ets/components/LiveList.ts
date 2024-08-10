if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LiveList_Params {
    currentBreakpoint?: string;
    count?: number;
    liveList?: LiveDataModel[];
}
import { EmptyComponent, StyleConstants, CommonDataSource } from "@bundle:com.example.multishopping/phone@common/index";
import type { LiveDataModel } from '../viewmodel/PersonalData';
import { BreakpointConstants } from "@bundle:com.example.multishopping/phone@common/ets/constants/BreakpointConstants";
import { Adaptive } from "@bundle:com.example.multishopping/phone@common/ets/viewmodel/AdaptiveViewModel";
export class LiveList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__count = new SynchedPropertySimpleOneWayPU(params.count, this, "count");
        this.liveList = [];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LiveList_Params) {
        if (params.count === undefined) {
            this.__count.set(0);
        }
        if (params.liveList !== undefined) {
            this.liveList = params.liveList;
        }
    }
    updateStateVars(params: LiveList_Params) {
        this.__count.reset(params.count);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__count.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__count.aboutToBeDeleted();
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
    private __count: SynchedPropertySimpleOneWayPU<number>;
    get count() {
        return this.__count.get();
    }
    set count(newValue: number) {
        this.__count.set(newValue);
    }
    private liveList: LiveDataModel[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.liveList.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create({ space: StyleConstants.TWELVE_SPACE });
                        List.debugLine("features/personal/src/main/ets/components/LiveList.ets(33:7)", "@ohos/personal");
                        List.margin({ left: { "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, right: { "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                        List.lanes(this.count);
                    }, List);
                    {
                        const __lazyForEachItemGenFunction = _item => {
                            const item = _item;
                            {
                                const itemCreation2 = (elmtId, isInitialRender) => {
                                    ListItem.create(() => { }, false);
                                    ListItem.margin({ left: { "id": 134217935, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, right: { "id": 134217935, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                                    ListItem.debugLine("features/personal/src/main/ets/components/LiveList.ets(35:11)", "@ohos/personal");
                                };
                                const observedDeepRender = () => {
                                    this.observeComponentCreation2(itemCreation2, ListItem);
                                    this.LiveItem.bind(this)(item);
                                    ListItem.pop();
                                };
                                observedDeepRender();
                            }
                        };
                        const __lazyForEachItemIdFunc = (item: LiveDataModel) => JSON.stringify(item);
                        LazyForEach.create("1", this, new CommonDataSource<LiveDataModel>(this.liveList), __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
                        LazyForEach.pop();
                    }
                    List.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new EmptyComponent(this, { outerHeight: StyleConstants.FIFTY_HEIGHT }, undefined, elmtId, () => { }, { page: "features/personal/src/main/ets/components/LiveList.ets", line: 44, col: 7 });
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
                });
            }
        }, If);
        If.pop();
    }
    LiveItem(liveItem: LiveDataModel, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/personal/src/main/ets/components/LiveList.ets(49:5)", "@ohos/personal");
            Column.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.TopStart });
            Stack.debugLine("features/personal/src/main/ets/components/LiveList.ets(50:7)", "@ohos/personal");
            Stack.width(StyleConstants.FULL_WIDTH);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": -1, "type": 30000, params: [liveItem.previewIcon], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/personal/src/main/ets/components/LiveList.ets(51:9)", "@ohos/personal");
            Image.width(StyleConstants.FULL_WIDTH);
            Image.objectFit(ImageFit.Fill);
            Image.aspectRatio(Adaptive.AspectRatio1(this.currentBreakpoint));
            Image.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(liveItem.watchDesc);
            Text.debugLine("features/personal/src/main/ets/components/LiveList.ets(56:9)", "@ohos/personal");
            Text.fontSize({ "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.backgroundColor({ "id": 134217901, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.borderRadius({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.height({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.padding({
                right: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Text.margin({
                top: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217986, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(liveItem.living ? { "id": 134217957, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } : { "id": 134217960, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/personal/src/main/ets/components/LiveList.ets(70:9)", "@ohos/personal");
            Text.fontSize({ "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.backgroundColor(liveItem.living ? Color.Red : { "id": 134217901, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.borderRadius({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.height({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.padding({
                right: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Text.margin({
                top: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/personal/src/main/ets/components/LiveList.ets(87:7)", "@ohos/personal");
            Row.backgroundColor(Color.White);
            Row.width(StyleConstants.FULL_WIDTH);
            Row.alignItems(VerticalAlign.Center);
            Row.width(StyleConstants.FULL_WIDTH);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": -1, "type": 30000, params: [liveItem.liverIcon], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/personal/src/main/ets/components/LiveList.ets(88:9)", "@ohos/personal");
            Image.objectFit(ImageFit.Contain);
            Image.width({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.margin({ left: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/personal/src/main/ets/components/LiveList.ets(93:9)", "@ohos/personal");
            Column.alignItems(HorizontalAlign.Start);
            Column.width(StyleConstants.FULL_WIDTH);
            Column.margin({
                top: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(liveItem.liverName);
            Text.debugLine("features/personal/src/main/ets/components/LiveList.ets(94:11)", "@ohos/personal");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(StyleConstants.FONT_WEIGHT_FIVE);
            Text.fontColor(Color.Black);
            Text.margin({ bottom: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(liveItem.liverDesc);
            Text.debugLine("features/personal/src/main/ets/components/LiveList.ets(100:11)", "@ohos/personal");
            Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(StyleConstants.FONT_WEIGHT_FOUR);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
