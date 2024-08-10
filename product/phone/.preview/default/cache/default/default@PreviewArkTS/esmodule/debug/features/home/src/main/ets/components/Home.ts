if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Home_Params {
    currentBreakpoint?: string;
    commodityList?: Commodity[];
    titleIndex?: number;
    activityTitleIndex?: number;
    localDataManger?: LocalDataManager;
    onClickItem?;
}
import { searchSwiper, classifyTitle, swiperImage, activityTitle } from "@bundle:com.example.multishopping/phone@home/ets/viewmodel/HomeData";
import type { ActivityTitleModel } from "@bundle:com.example.multishopping/phone@home/ets/viewmodel/HomeData";
import { LocalDataManager, CommodityList, StyleConstants, BreakpointConstants } from "@bundle:com.example.multishopping/phone@common/index";
import type { Commodity } from "@bundle:com.example.multishopping/phone@common/index";
export class Home extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__commodityList = new ObservedPropertyObjectPU([], this, "commodityList");
        this.__titleIndex = new ObservedPropertySimplePU(0, this, "titleIndex");
        this.__activityTitleIndex = new ObservedPropertySimplePU(0, this, "activityTitleIndex");
        this.localDataManger = LocalDataManager.instance();
        this.onClickItem = (Commodity: Commodity) => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Home_Params) {
        if (params.commodityList !== undefined) {
            this.commodityList = params.commodityList;
        }
        if (params.titleIndex !== undefined) {
            this.titleIndex = params.titleIndex;
        }
        if (params.activityTitleIndex !== undefined) {
            this.activityTitleIndex = params.activityTitleIndex;
        }
        if (params.localDataManger !== undefined) {
            this.localDataManger = params.localDataManger;
        }
        if (params.onClickItem !== undefined) {
            this.onClickItem = params.onClickItem;
        }
    }
    updateStateVars(params: Home_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__commodityList.purgeDependencyOnElmtId(rmElmtId);
        this.__titleIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__activityTitleIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__commodityList.aboutToBeDeleted();
        this.__titleIndex.aboutToBeDeleted();
        this.__activityTitleIndex.aboutToBeDeleted();
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
    private __commodityList: ObservedPropertyObjectPU<Commodity[]>;
    get commodityList() {
        return this.__commodityList.get();
    }
    set commodityList(newValue: Commodity[]) {
        this.__commodityList.set(newValue);
    }
    private __titleIndex: ObservedPropertySimplePU<number>;
    get titleIndex() {
        return this.__titleIndex.get();
    }
    set titleIndex(newValue: number) {
        this.__titleIndex.set(newValue);
    }
    private __activityTitleIndex: ObservedPropertySimplePU<number>;
    get activityTitleIndex() {
        return this.__activityTitleIndex.get();
    }
    set activityTitleIndex(newValue: number) {
        this.__activityTitleIndex.set(newValue);
    }
    private localDataManger: LocalDataManager;
    private onClickItem;
    aboutToAppear() {
        this.commodityList = this.localDataManger.queryCommodityList();
    }
    SearchTitle(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/components/Home.ets(34:5)", "@ohos/home");
            Column.width(StyleConstants.FULL_WIDTH);
            Column.padding({ top: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.debugLine("features/home/src/main/ets/components/Home.ets(35:7)", "@ohos/home");
            Flex.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.margin({ bottom: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217868, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/home/src/main/ets/components/Home.ets(36:9)", "@ohos/home");
            Image.height(StyleConstants.FULL_HEIGHT);
            Image.aspectRatio(1);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217867, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/home/src/main/ets/components/Home.ets(39:9)", "@ohos/home");
            Image.height(StyleConstants.FULL_HEIGHT);
            Image.aspectRatio(1);
        }, Image);
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/home/src/main/ets/components/Home.ets(47:7)", "@ohos/home");
            Row.height({ "id": 134217891, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Row.width(StyleConstants.FULL_WIDTH);
            Row.borderRadius({ "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Row.backgroundColor(Color.White);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217869, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/home/src/main/ets/components/Home.ets(48:9)", "@ohos/home");
            Image.width({ "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.margin({
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.debugLine("features/home/src/main/ets/components/Home.ets(55:9)", "@ohos/home");
            Swiper.autoPlay(true);
            Swiper.loop(true);
            Swiper.vertical(true);
            Swiper.indicator(false);
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/home/src/main/ets/components/Home.ets(57:13)", "@ohos/home");
                    Column.alignItems(HorizontalAlign.Start);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item);
                    Text.debugLine("features/home/src/main/ets/components/Home.ets(58:15)", "@ohos/home");
                    Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, searchSwiper, forEachItemGenFunction, (item: Resource) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        Row.pop();
        Column.pop();
    }
    ClassifyTitle(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.debugLine("features/home/src/main/ets/components/Home.ets(81:5)", "@ohos/home");
            Flex.margin({ top: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Flex.width(StyleConstants.FULL_WIDTH);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item);
                    Text.debugLine("features/home/src/main/ets/components/Home.ets(83:9)", "@ohos/home");
                    Text.fontSize({ "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.opacity(this.titleIndex === index ? StyleConstants.FULL_OPACITY : StyleConstants.EIGHTY_OPACITY);
                    Text.fontWeight(this.titleIndex === index ? StyleConstants.FONT_WEIGHT_SEVEN : StyleConstants.FONT_WEIGHT_FOUR);
                    Text.fontColor(Color.White);
                    Text.onClick(() => {
                        if (index !== undefined) {
                            this.titleIndex = index;
                        }
                    });
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, classifyTitle, forEachItemGenFunction, (item: Resource) => JSON.stringify(item), true, false);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/home/src/main/ets/components/Home.ets(94:7)", "@ohos/home");
            Row.onClick(() => {
                this.titleIndex = 0;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217850, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/home/src/main/ets/components/Home.ets(95:9)", "@ohos/home");
            Image.width({ "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217851, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/home/src/main/ets/components/Home.ets(98:9)", "@ohos/home");
            Image.width({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.margin({
                left: { "id": 134217941, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217941, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217857, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/home/src/main/ets/components/Home.ets(105:9)", "@ohos/home");
            Text.fontSize({ "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.opacity(this.titleIndex === undefined ? StyleConstants.FULL_OPACITY : StyleConstants.EIGHTY_OPACITY);
            Text.fontWeight(this.titleIndex === undefined ?
                StyleConstants.FONT_WEIGHT_SEVEN : StyleConstants.FONT_WEIGHT_FOUR);
        }, Text);
        Text.pop();
        Row.pop();
        Flex.pop();
    }
    CustomSwiper(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.debugLine("features/home/src/main/ets/components/Home.ets(122:5)", "@ohos/home");
            Swiper.indicatorStyle({ selectedColor: { "id": 134217866, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Swiper.autoPlay(true);
            Swiper.itemSpace(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? 0 : StyleConstants.ITEM_SPACE);
            Swiper.width(StyleConstants.FULL_WIDTH);
            Swiper.indicator(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM);
            Swiper.displayCount(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? StyleConstants.DISPLAY_THREE :
                (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ? StyleConstants.DISPLAY_TWO :
                    StyleConstants.DISPLAY_ONE));
            Swiper.margin({ top: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item);
                    Image.debugLine("features/home/src/main/ets/components/Home.ets(124:9)", "@ohos/home");
                    Image.width(StyleConstants.FULL_WIDTH);
                    Image.aspectRatio(StyleConstants.IMAGE_ASPECT_RATIO);
                    Image.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Image.backgroundColor(Color.White);
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, swiperImage, forEachItemGenFunction, (item: Resource) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
    }
    ActivityTitle(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceAround });
            Flex.debugLine("features/home/src/main/ets/components/Home.ets(144:5)", "@ohos/home");
            Flex.height({ "id": 134217889, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.padding({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.margin({ bottom: { "id": 134217935, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, top: { "id": 134217935, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Flex.backgroundColor({ "id": 134217902, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Flex.create({
                        direction: FlexDirection.Column,
                        justifyContent: FlexAlign.Center,
                        alignItems: ItemAlign.Center
                    });
                    Flex.debugLine("features/home/src/main/ets/components/Home.ets(146:9)", "@ohos/home");
                    Flex.onClick(() => {
                        if (index !== undefined) {
                            this.activityTitleIndex = index;
                        }
                    });
                    Flex.height(StyleConstants.FULL_HEIGHT);
                }, Flex);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.title);
                    Text.debugLine("features/home/src/main/ets/components/Home.ets(151:11)", "@ohos/home");
                    Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.fontWeight(StyleConstants.FONT_WEIGHT_FIVE);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.desc);
                    Text.debugLine("features/home/src/main/ets/components/Home.ets(155:11)", "@ohos/home");
                    Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.fontWeight(StyleConstants.FONT_WEIGHT_FOUR);
                    Text.fontColor(this.activityTitleIndex === index ? { "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } : Color.Black);
                    Text.opacity(this.activityTitleIndex === index ? StyleConstants.FULL_OPACITY : StyleConstants.SIXTY_OPACITY);
                }, Text);
                Text.pop();
                Flex.pop();
            };
            this.forEachUpdateFunction(elmtId, activityTitle, forEachItemGenFunction, (item: ActivityTitleModel) => JSON.stringify(item), true, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Top });
            Stack.debugLine("features/home/src/main/ets/components/Home.ets(178:5)", "@ohos/home");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217865, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/home/src/main/ets/components/Home.ets(179:7)", "@ohos/home");
            Image.width(StyleConstants.FULL_WIDTH);
            Image.height({ "id": 134217890, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Auto);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.debugLine("features/home/src/main/ets/components/Home.ets(183:7)", "@ohos/home");
            Flex.padding({ left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.SearchTitle.bind(this)();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/home/src/main/ets/components/Home.ets(185:9)", "@ohos/home");
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/components/Home.ets(186:11)", "@ohos/home");
        }, Column);
        this.ClassifyTitle.bind(this)();
        this.CustomSwiper.bind(this)();
        this.ActivityTitle.bind(this)();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommodityList(this, {
                        commodityList: this.__commodityList,
                        column: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? StyleConstants.DISPLAY_FOUR :
                            (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ?
                                StyleConstants.DISPLAY_THREE : StyleConstants.DISPLAY_TWO),
                        onClickItem: (data: Commodity): void => this.onClickItem(data)
                    }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/components/Home.ets", line: 191, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            commodityList: this.commodityList,
                            column: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? StyleConstants.DISPLAY_FOUR :
                                (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ?
                                    StyleConstants.DISPLAY_THREE : StyleConstants.DISPLAY_TWO),
                            onClickItem: (data: Commodity): void => this.onClickItem(data)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        column: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? StyleConstants.DISPLAY_FOUR :
                            (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ?
                                StyleConstants.DISPLAY_THREE : StyleConstants.DISPLAY_TWO)
                    });
                }
            }, { name: "CommodityList" });
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
