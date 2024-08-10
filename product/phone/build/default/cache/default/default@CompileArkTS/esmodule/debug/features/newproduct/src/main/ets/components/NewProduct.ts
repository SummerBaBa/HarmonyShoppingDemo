if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface NewProduct_Params {
    currentBreakpoint?: string;
    titleIndex?: number;
}
import { StyleConstants, BreakpointConstants, CommonDataSource } from "@bundle:com.example.multishopping/phone@common/index";
import { swiperImage, classifyTitle, productData } from "@bundle:com.example.multishopping/phone@newproduct/ets/viewmodel/NewProductData";
import type { ProductDataModel } from "@bundle:com.example.multishopping/phone@newproduct/ets/viewmodel/NewProductData";
import { Adaptive } from "@bundle:com.example.multishopping/phone@common/ets/viewmodel/AdaptiveViewModel";
export class NewProduct extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__titleIndex = new ObservedPropertySimplePU(0, this, "titleIndex");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: NewProduct_Params) {
        if (params.titleIndex !== undefined) {
            this.titleIndex = params.titleIndex;
        }
    }
    updateStateVars(params: NewProduct_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__titleIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__titleIndex.aboutToBeDeleted();
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
    private __titleIndex: ObservedPropertySimplePU<number>;
    get titleIndex() {
        return this.__titleIndex.get();
    }
    set titleIndex(newValue: number) {
        this.__titleIndex.set(newValue);
    }
    CustomSwiper(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.indicatorStyle({
                color: { "id": 134217905, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                selectedColor: { "id": 134217901, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Swiper.autoPlay(true);
            Swiper.itemSpace(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? 0 : StyleConstants.ITEM_SPACE);
            Swiper.width(StyleConstants.FULL_WIDTH);
            Swiper.indicator(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM);
            Swiper.displayCount(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? StyleConstants.DISPLAY_THREE :
                (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ?
                    StyleConstants.DISPLAY_TWO : StyleConstants.DISPLAY_ONE));
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item);
                    Image.width(StyleConstants.FULL_WIDTH);
                    Image.aspectRatio(StyleConstants.IMAGE_ASPECT_RATIO);
                    Image.borderRadius({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Image.backgroundColor(Color.White);
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, swiperImage, forEachItemGenFunction, (item: Resource) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
    }
    ClassifyTitle(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.SpaceAround,
                alignItems: ItemAlign.Center
            });
            Flex.height({ "id": 134217858, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.margin({
                bottom: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
            });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item);
                    Text.fontSize({ "id": 134217919, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.opacity(this.titleIndex === index ? StyleConstants.FULL_OPACITY : StyleConstants.EIGHTY_OPACITY);
                    Text.fontWeight(this.titleIndex === index ? StyleConstants.FONT_WEIGHT_SEVEN : StyleConstants.FONT_WEIGHT_FOUR);
                    Text.fontColor(Color.Black);
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
            Row.onClick(() => {
                this.titleIndex = classifyTitle.length + 1;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217863, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217923, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.margin({
                left: { "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217855, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217919, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.Black);
            Text.opacity(this.titleIndex === classifyTitle.length + 1 ?
                StyleConstants.FULL_OPACITY : StyleConstants.EIGHTY_OPACITY);
            Text.fontWeight(this.titleIndex === classifyTitle.length + 1 ?
                StyleConstants.FONT_WEIGHT_SEVEN : StyleConstants.FONT_WEIGHT_FOUR);
        }, Text);
        Text.pop();
        Row.pop();
        Flex.pop();
    }
    ProductList(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: StyleConstants.TWELVE_SPACE });
            List.lanes(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
                StyleConstants.DISPLAY_TWO : StyleConstants.DISPLAY_THREE);
            List.padding({ left: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, right: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, List);
        {
            const __lazyForEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(() => { }, false);
                        ListItem.margin({
                            left: { "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                            right: { "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                        });
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, ListItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.borderRadius({ "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": -1, "type": 30000, params: [item.img], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                            Image.width(StyleConstants.FULL_WIDTH);
                            Image.aspectRatio(Adaptive.AspectRatio(this.currentBreakpoint));
                            Image.objectFit(ImageFit.Fill);
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.width(StyleConstants.FULL_WIDTH);
                            Column.backgroundColor(Color.White);
                            Column.alignItems(HorizontalAlign.Start);
                            Column.justifyContent(FlexAlign.Start);
                            Column.borderRadius({ bottomLeft: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, bottomRight: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            If.create();
                            if (item.comment) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create(item.comment);
                                        Text.fontSize({ "id": 134217921, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Text.border({
                                            width: { "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                            color: { "id": 134217904, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                            radius: { "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                        });
                                        Text.height({ "id": 134217859, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                                        Text.padding({
                                            left: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                            right: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                        });
                                        Text.margin({
                                            left: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                            top: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                                        });
                                    }, Text);
                                    Text.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                });
                            }
                        }, If);
                        If.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.des);
                            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                            Text.margin({
                                top: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                bottom: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                left: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                            });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.margin({
                                left: { "id": 134217930, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                bottom: { "id": 134217930, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                            });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": 134217862, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                            Image.width({ "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                            Image.height({ "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.user);
                            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                            Text.margin({ left: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                        }, Text);
                        Text.pop();
                        Row.pop();
                        Column.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    observedDeepRender();
                }
            };
            const __lazyForEachItemIdFunc = (item: ProductDataModel) => JSON.stringify(item);
            LazyForEach.create("1", this, new CommonDataSource<ProductDataModel>(productData), __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
            LazyForEach.pop();
        }
        List.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.CustomSwiper.bind(this)();
        this.ClassifyTitle.bind(this)();
        this.ProductList.bind(this)();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
