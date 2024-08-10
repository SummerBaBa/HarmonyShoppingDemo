if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommodityDetail_Params {
    commodityId?: string;
    info?: Commodity;
    selectKeys?: ProductSpecification[];
    count?: number;
    swiperIndex?: number;
    productOptions?: string;
    localDataManager?: LocalDataManager;
    data?: CommonDataSource<Evaluate>;
    dialogController?: CustomDialogController;
}
import promptAction from "@ohos:promptAction";
import router from "@ohos:router";
import { ProductSpecification } from "@bundle:com.example.multishopping/phone@common/index";
import type { Order } from "@bundle:com.example.multishopping/phone@common/index";
import { FinishType } from "@bundle:com.example.multishopping/phone@commoditydetail/ets/viewmodel/TypeModel";
import { SpecificationDialog } from "@bundle:com.example.multishopping/phone@commoditydetail/ets/components/SpecificationDialog";
import { barData, userEvaluate, moreEvaluate, serviceList } from "@bundle:com.example.multishopping/phone@commoditydetail/ets/viewmodel/CommodityDetailData";
import type { Evaluate, BarData } from "@bundle:com.example.multishopping/phone@commoditydetail/ets/viewmodel/CommodityDetailData";
import { CapsuleGroupButton } from "@bundle:com.example.multishopping/phone@commoditydetail/ets/components/CapsuleGroupButton";
import { CommodityConstants } from "@bundle:com.example.multishopping/phone@commoditydetail/ets/constants/CommodityConstants";
import { LocalDataManager, Logger, StyleConstants, GridConstants, CommonDataSource, getID } from "@bundle:com.example.multishopping/phone@common/index";
import type { Commodity, Specification } from "@bundle:com.example.multishopping/phone@common/index";
import type { ShopProps } from '@ohos/common/src/main/ets/viewmodel/ProductModel';
function __Button__titleButton(): void {
    Button.backgroundColor({ "id": 134217908, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
    Button.width({ "id": 134217846, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
    Button.height({ "id": 134217846, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
    Button.borderRadius({ "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
}
export class CommodityDetail extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__commodityId = new SynchedPropertySimpleOneWayPU(params.commodityId, this, "commodityId");
        this.__info = new ObservedPropertyObjectPU(undefined, this, "info");
        this.__selectKeys = new ObservedPropertyObjectPU([], this, "selectKeys");
        this.__count = new ObservedPropertySimplePU(1, this, "count");
        this.__swiperIndex = new ObservedPropertySimplePU(0, this, "swiperIndex");
        this.__productOptions = new ObservedPropertySimplePU('', this, "productOptions");
        this.localDataManager = LocalDataManager.instance();
        this.data = new CommonDataSource<Evaluate>(userEvaluate.evaluate !== undefined ?
            userEvaluate.evaluate : []);
        this.dialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new SpecificationDialog(this, {
                    onFinish: (type: FinishType, count: number, selectKeys: ProductSpecification[]): void => this.onSpecificationFinish(type, count, selectKeys),
                    data: this.__info,
                    count: this.__count,
                    selectTags: this.__selectKeys,
                    productOptions: this.__productOptions
                }, undefined, -1, () => { }, { page: "features/commoditydetail/src/main/ets/components/CommodityDetail.ets", line: 56, col: 14 });
                jsDialog.setController(this.dialogController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {
                        onFinish: (type: FinishType, count: number, selectKeys: ProductSpecification[]): void => this.onSpecificationFinish(type, count, selectKeys),
                        data: this.__info,
                        count: this.__count,
                        selectTags: this.__selectKeys,
                        productOptions: this.__productOptions
                    };
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            autoCancel: true,
            alignment: DialogAlignment.Bottom,
            customStyle: true
        }, this);
        this.setInitiallyProvidedValue(params);
        this.declareWatch("selectKeys", this.onSelectKeysChange);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommodityDetail_Params) {
        if (params.commodityId === undefined) {
            this.__commodityId.set('');
        }
        if (params.info !== undefined) {
            this.info = params.info;
        }
        if (params.selectKeys !== undefined) {
            this.selectKeys = params.selectKeys;
        }
        if (params.count !== undefined) {
            this.count = params.count;
        }
        if (params.swiperIndex !== undefined) {
            this.swiperIndex = params.swiperIndex;
        }
        if (params.productOptions !== undefined) {
            this.productOptions = params.productOptions;
        }
        if (params.localDataManager !== undefined) {
            this.localDataManager = params.localDataManager;
        }
        if (params.data !== undefined) {
            this.data = params.data;
        }
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
        }
    }
    updateStateVars(params: CommodityDetail_Params) {
        this.__commodityId.reset(params.commodityId);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__commodityId.purgeDependencyOnElmtId(rmElmtId);
        this.__info.purgeDependencyOnElmtId(rmElmtId);
        this.__selectKeys.purgeDependencyOnElmtId(rmElmtId);
        this.__count.purgeDependencyOnElmtId(rmElmtId);
        this.__swiperIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__productOptions.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__commodityId.aboutToBeDeleted();
        this.__info.aboutToBeDeleted();
        this.__selectKeys.aboutToBeDeleted();
        this.__count.aboutToBeDeleted();
        this.__swiperIndex.aboutToBeDeleted();
        this.__productOptions.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __commodityId: SynchedPropertySimpleOneWayPU<string>;
    get commodityId() {
        return this.__commodityId.get();
    }
    set commodityId(newValue: string) {
        this.__commodityId.set(newValue);
    }
    private __info?: ObservedPropertyObjectPU<Commodity>;
    get info() {
        return this.__info.get();
    }
    set info(newValue: Commodity) {
        this.__info.set(newValue);
    }
    private __selectKeys?: ObservedPropertyObjectPU<ProductSpecification[]>;
    get selectKeys() {
        return this.__selectKeys.get();
    }
    set selectKeys(newValue: ProductSpecification[]) {
        this.__selectKeys.set(newValue);
    }
    private __count: ObservedPropertySimplePU<number>;
    get count() {
        return this.__count.get();
    }
    set count(newValue: number) {
        this.__count.set(newValue);
    }
    private __swiperIndex: ObservedPropertySimplePU<number>;
    get swiperIndex() {
        return this.__swiperIndex.get();
    }
    set swiperIndex(newValue: number) {
        this.__swiperIndex.set(newValue);
    }
    private __productOptions: ObservedPropertySimplePU<string>;
    get productOptions() {
        return this.__productOptions.get();
    }
    set productOptions(newValue: string) {
        this.__productOptions.set(newValue);
    }
    private localDataManager: LocalDataManager;
    private data: CommonDataSource<Evaluate>;
    private dialogController: CustomDialogController;
    onSelectKeysChange() {
        this.productOptions = '';
        if (this.selectKeys !== undefined) {
            this.selectKeys.forEach((item) => {
                this.productOptions += item.value + ' ';
            });
        }
    }
    onSpecificationFinish(type: FinishType, count: number, selectKeys: ProductSpecification[]) {
        this.count = count;
        this.selectKeys = selectKeys;
        const params: ShopProps = {
            id: getID(),
            commodityId: this.info !== undefined ? this.info.id : '',
            count,
            specifications: this.selectKeys
        };
        switch (type) {
            case FinishType.JOIN_SHOPPING_CART:
                this.localDataManager.insertShopCart(params);
                promptAction.showToast({
                    message: { "id": 134217814, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                });
                break;
            case FinishType.BUY_NOW:
                if (this.info !== undefined) {
                    let orderList: Order = {
                        orderId: params.id,
                        image: this.info.images[0],
                        title: this.info.title,
                        description: this.info.description,
                        price: this.info.price,
                        count: params.count,
                        commodityId: Number.parseInt(params.commodityId),
                        specifications: this.selectKeys
                    };
                    router.pushUrl({
                        url: CommodityConstants.CONFIRM_ORDER_PAGE_URL,
                        params: { orderList: [orderList] }
                    }).catch((err: Error) => {
                        Logger.error(JSON.stringify(err));
                    });
                    break;
                }
        }
    }
    bottomBtnClick(type: FinishType) {
        if (this.selectKeys !== undefined) {
            this.onSpecificationFinish(type, this.count, this.selectKeys);
        }
    }
    aboutToAppear() {
        this.info = this.localDataManager.queryCommodityListById(this.commodityId);
        if (this.info.specifications !== undefined) {
            this.info.specifications.forEach((item: Specification) => {
                if (this.selectKeys !== undefined) {
                    let SpecificationData: ProductSpecification = new ProductSpecification();
                    SpecificationData.name = item.title;
                    SpecificationData.value = item.data[0].key;
                    this.selectKeys.push(SpecificationData);
                }
            });
        }
    }
    CustomSwiper(payload: string[], parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.BottomEnd });
            Stack.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(154:5)", "@ohos/commoditydetail");
            Stack.width(StyleConstants.FULL_WIDTH);
            Stack.backgroundColor(Color.White);
            Stack.height({ "id": 134217842, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(155:7)", "@ohos/commoditydetail");
            Swiper.onChange((index: number) => this.swiperIndex = index);
            Swiper.indicator(false);
            Swiper.width(StyleConstants.FULL_WIDTH);
            Swiper.height(StyleConstants.FULL_HEIGHT);
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Flex.create({ justifyContent: FlexAlign.Center });
                    Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(157:11)", "@ohos/commoditydetail");
                    Flex.margin({
                        left: { "id": 134217843, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                        right: { "id": 134217843, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                        top: { "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                        bottom: { "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                    });
                }, Flex);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": -1, "type": 30000, params: [item], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(158:13)", "@ohos/commoditydetail");
                    Image.height(StyleConstants.FULL_HEIGHT);
                    Image.aspectRatio(1);
                    Image.objectFit(ImageFit.Cover);
                }, Image);
                Flex.pop();
            };
            this.forEachUpdateFunction(elmtId, payload, forEachItemGenFunction, (item: string) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.swiperIndex + 1}/${payload.length}`);
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(176:7)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.textAlign(TextAlign.Center);
            Text.width({ "id": 134217845, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.height({ "id": 134217930, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.backgroundColor({ "id": 134217901, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.borderRadius({ "id": 134217844, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({
                right: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        Stack.pop();
    }
    TitleBar(payload: Commodity, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(195:5)", "@ohos/commoditydetail");
            Flex.backgroundColor(Color.White);
            Flex.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.padding({
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Flex.margin({
                top: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(196:7)", "@ohos/commoditydetail");
        }, Text);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Span.create({ "id": 134217817, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(197:9)", "@ohos/commoditydetail");
            Span.fontSize({ "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.fontColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Span);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Span.create(`${payload.price}`);
            Span.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(200:9)", "@ohos/commoditydetail");
            Span.fontSize({ "id": 134217915, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.fontColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Span);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(205:7)", "@ohos/commoditydetail");
            Row.width(StyleConstants.FULL_WIDTH);
            Row.margin({ top: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217809, "type": 10003, params: [payload.title, payload.description], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(206:9)", "@ohos/commoditydetail");
            Text.fontColor(Color.Black);
            Text.fontSize({ "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(StyleConstants.FONT_WEIGHT_FOUR);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(214:7)", "@ohos/commoditydetail");
            Flex.height({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.margin({ top: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(216:11)", "@ohos/commoditydetail");
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.icon !== undefined ? item.icon : '');
                    Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(217:13)", "@ohos/commoditydetail");
                    Image.height({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Image.width({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Image.margin({ right: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.text);
                    Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(221:13)", "@ohos/commoditydetail");
                    Text.fontSize({ "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                }, Text);
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, barData, forEachItemGenFunction, (item: BarData) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
        Flex.pop();
    }
    Specification(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(234:5)", "@ohos/commoditydetail");
            Row.backgroundColor(Color.White);
            Row.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Row.padding({
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Row.margin({
                top: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217807, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(235:7)", "@ohos/commoditydetail");
            Text.fontColor(Color.Black);
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(StyleConstants.FONT_WEIGHT_FIVE);
            Text.margin({ right: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(240:7)", "@ohos/commoditydetail");
            Flex.layoutWeight(StyleConstants.LAYOUT_WEIGHT);
            Flex.onClick((): void => this.dialogController.open());
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.productOptions}x${this.count}`);
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(241:9)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217800, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(243:9)", "@ohos/commoditydetail");
            Image.height({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217935, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        Flex.pop();
        Row.pop();
    }
    SpecialService(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(254:5)", "@ohos/commoditydetail");
            Column.backgroundColor(Color.White);
            Column.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Column.padding({
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Column.margin({
                top: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.SpaceBetween,
                alignItems: ItemAlign.Start
            });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(255:7)", "@ohos/commoditydetail");
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217818, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(259:9)", "@ohos/commoditydetail");
            Text.fontColor(Color.Black);
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(StyleConstants.FONT_WEIGHT_FIVE);
            Text.margin({ right: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.SpaceBetween,
                alignItems: ItemAlign.Center
            });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(264:9)", "@ohos/commoditydetail");
            Flex.layoutWeight(StyleConstants.LAYOUT_WEIGHT);
            Flex.height({ "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.margin({ bottom: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(268:11)", "@ohos/commoditydetail");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217827, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(269:13)", "@ohos/commoditydetail");
            Image.width({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217819, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(272:13)", "@ohos/commoditydetail");
            Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({ left: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217800, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(278:11)", "@ohos/commoditydetail");
            Image.height({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217935, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        Flex.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(287:7)", "@ohos/commoditydetail");
            Divider.margin({
                left: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Divider.height({ "id": 134217841, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Divider.backgroundColor({ "id": 134217907, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                justifyContent: FlexAlign.SpaceBetween,
                alignItems: ItemAlign.Start
            });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(295:7)", "@ohos/commoditydetail");
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217820, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(299:9)", "@ohos/commoditydetail");
            Text.fontColor(Color.Black);
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(StyleConstants.FONT_WEIGHT_FIVE);
            Text.margin({ right: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(304:9)", "@ohos/commoditydetail");
            Flex.layoutWeight(StyleConstants.LAYOUT_WEIGHT);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Flex.create({ alignItems: ItemAlign.Center });
                    Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(306:13)", "@ohos/commoditydetail");
                    Flex.height({ "id": 134217939, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Flex.margin({
                        bottom: index === serviceList.length - 1 ? 0 : { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                    });
                }, Flex);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 134217849, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(307:15)", "@ohos/commoditydetail");
                    Image.width({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Image.height({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item);
                    Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(310:15)", "@ohos/commoditydetail");
                    Text.fontColor(Color.Black);
                    Text.fontSize({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.margin({ left: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                }, Text);
                Text.pop();
                Flex.pop();
            };
            this.forEachUpdateFunction(elmtId, serviceList, forEachItemGenFunction, (item: string) => JSON.stringify(item), true, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
        Flex.pop();
        Column.pop();
    }
    UserEvaluate(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: StyleConstants.TWELVE_SPACE });
            Column.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(328:5)", "@ohos/commoditydetail");
            Column.backgroundColor(Color.White);
            Column.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Column.padding({
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Column.margin({
                top: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(329:7)", "@ohos/commoditydetail");
            Row.width(StyleConstants.FULL_WIDTH);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(userEvaluate.title);
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(330:9)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(StyleConstants.FONT_WEIGHT_FIVE);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(334:9)", "@ohos/commoditydetail");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(userEvaluate.favorable);
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(335:9)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217810, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(338:9)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217824, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(341:9)", "@ohos/commoditydetail");
            Image.objectFit(ImageFit.Contain);
            Image.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        Row.pop();
        {
            const __lazyForEachItemGenFunction = _item => {
                const item = _item;
                this.Evaluate.bind(this)(item);
            };
            const __lazyForEachItemIdFunc = (item: Evaluate, index?: number) => JSON.stringify(item) + index;
            LazyForEach.create("1", this, this.data, __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
            LazyForEach.pop();
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217811, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(351:7)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.width({ "id": 134217840, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.height({ "id": 134217838, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.textAlign(TextAlign.Center);
            Text.border({
                width: { "id": 134217934, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                color: { "id": 134217907, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                radius: { "id": 134217839, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Text.onClick(() => {
                if (this.data !== undefined) {
                    this.data.addData(this.data.totalCount(), moreEvaluate);
                }
            });
        }, Text);
        Text.pop();
        Column.pop();
    }
    Evaluate(evaluate: Evaluate, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: StyleConstants.TWELVE_SPACE });
            Column.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(371:5)", "@ohos/commoditydetail");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(372:7)", "@ohos/commoditydetail");
            Row.width(StyleConstants.FULL_WIDTH);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(evaluate.userIcon !== undefined ? { "id": -1, "type": 30000, params: [evaluate.userIcon], "bundleName": "com.example.multishopping", "moduleName": "phone" } : '');
            Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(373:9)", "@ohos/commoditydetail");
            Image.objectFit(ImageFit.Contain);
            Image.width({ "id": 134217836, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217836, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: StyleConstants.FOUR_SPACE });
            Column.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(377:9)", "@ohos/commoditydetail");
            Column.alignItems(HorizontalAlign.Start);
            Column.width(StyleConstants.FULL_WIDTH);
            Column.margin({ left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(evaluate.userNumber);
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(378:11)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(StyleConstants.FONT_WEIGHT_FIVE);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Rating.create({ rating: Number(evaluate.rating) });
            Rating.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(382:11)", "@ohos/commoditydetail");
            Rating.hitTestBehavior(HitTestMode.None);
            Rating.size({
                width: { "id": 134217837, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                height: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Rating.stars(CommodityConstants.RATING_STARS);
        }, Rating);
        Rating.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(evaluate.desc);
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(396:7)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217897, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        Column.pop();
    }
    DetailList(images: string[], parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                direction: FlexDirection.Column,
                alignItems: ItemAlign.Center
            });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(404:5)", "@ohos/commoditydetail");
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.backgroundColor(Color.White);
            Flex.borderRadius({ "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.padding({
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Flex.margin({
                top: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const image = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": -1, "type": 30000, params: [image], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(409:9)", "@ohos/commoditydetail");
                    Image.width(StyleConstants.FULL_WIDTH);
                    Image.constraintSize({ maxWidth: { "id": 134217832, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                    Image.objectFit(ImageFit.Cover);
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, images, forEachItemGenFunction, (image: string) => JSON.stringify(image), false, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
    }
    BottomMenu(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ alignItems: ItemAlign.Center });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(420:5)", "@ohos/commoditydetail");
            Flex.height({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.padding({ right: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Flex.backgroundColor({ "id": 134217902, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(421:7)", "@ohos/commoditydetail");
            Row.height(StyleConstants.FULL_HEIGHT);
            Row.margin({ right: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                direction: FlexDirection.Column,
                justifyContent: FlexAlign.Center,
                alignItems: ItemAlign.Center
            });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(422:9)", "@ohos/commoditydetail");
            Flex.onClick(() => {
                AppStorage.Set('IndexPage', CommodityConstants.INDEX_HOME);
                router.back();
            });
            Flex.height(StyleConstants.FULL_HEIGHT);
            Flex.width({ "id": 134217830, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217828, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(426:11)", "@ohos/commoditydetail");
            Image.height({ "id": 134217831, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217831, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217812, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(429:11)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({ top: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                direction: FlexDirection.Column,
                justifyContent: FlexAlign.Center,
                alignItems: ItemAlign.Center
            });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(441:9)", "@ohos/commoditydetail");
            Flex.onClick(() => {
                AppStorage.Set('IndexPage', CommodityConstants.INDEX_SHOPPING_CART);
                router.back();
            });
            Flex.height(StyleConstants.FULL_HEIGHT);
            Flex.width({ "id": 134217830, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217826, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(446:11)", "@ohos/commoditydetail");
            Image.height({ "id": 134217831, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217831, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217735, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(449:11)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({ top: { "id": 134217932, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        Flex.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CapsuleGroupButton(this, {
                        configs: [{
                                text: { "id": 134217813, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                onClick: (): void => this.bottomBtnClick(FinishType.JOIN_SHOPPING_CART)
                            }, {
                                text: { "id": 134217806, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                onClick: (): void => this.bottomBtnClick(FinishType.BUY_NOW)
                            }]
                    }, undefined, elmtId, () => { }, { page: "features/commoditydetail/src/main/ets/components/CommodityDetail.ets", line: 463, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            configs: [{
                                    text: { "id": 134217813, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                    onClick: (): void => this.bottomBtnClick(FinishType.JOIN_SHOPPING_CART)
                                }, {
                                    text: { "id": 134217806, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                    onClick: (): void => this.bottomBtnClick(FinishType.BUY_NOW)
                                }]
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CapsuleGroupButton" });
        }
        Flex.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.TopStart });
            Stack.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(480:5)", "@ohos/commoditydetail");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(481:7)", "@ohos/commoditydetail");
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(482:9)", "@ohos/commoditydetail");
            Scroll.flexGrow(StyleConstants.FLEX_GROW);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: GridConstants.COLUMN_FOUR,
                    md: GridConstants.COLUMN_EIGHT,
                    lg: GridConstants.COLUMN_TWELVE
                },
                gutter: GridConstants.GUTTER_TWELVE
            });
            GridRow.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(483:11)", "@ohos/commoditydetail");
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: GridConstants.SPAN_FOUR,
                    md: GridConstants.SPAN_EIGHT,
                    lg: GridConstants.SPAN_TWELVE
                }
            });
            GridCol.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(491:13)", "@ohos/commoditydetail");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.info !== undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.CustomSwiper.bind(this)(this.info?.images);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        GridCol.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: GridConstants.SPAN_FOUR,
                    md: GridConstants.SPAN_EIGHT,
                    lg: GridConstants.SPAN_EIGHT
                },
                offset: { lg: GridConstants.OFFSET_TWO }
            });
            GridCol.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(502:13)", "@ohos/commoditydetail");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(510:15)", "@ohos/commoditydetail");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.info) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.TitleBar.bind(this)(ObservedObject.GetRawObject(this.info));
                    this.Specification.bind(this)();
                    this.SpecialService.bind(this)();
                    this.UserEvaluate.bind(this)();
                    this.DetailList.bind(this)(this.info.images);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        GridCol.pop();
        GridRow.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: GridConstants.COLUMN_FOUR,
                    md: GridConstants.COLUMN_EIGHT,
                    lg: GridConstants.COLUMN_TWELVE
                },
                gutter: GridConstants.GUTTER_TWELVE
            });
            GridRow.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(524:9)", "@ohos/commoditydetail");
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
            GridCol.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(532:11)", "@ohos/commoditydetail");
        }, GridCol);
        this.BottomMenu.bind(this)();
        GridCol.pop();
        GridRow.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(544:7)", "@ohos/commoditydetail");
            Flex.margin({
                left: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(545:9)", "@ohos/commoditydetail");
            __Button__titleButton();
            Button.onClick(() => router.back());
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217799, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(546:11)", "@ohos/commoditydetail");
            Image.height(StyleConstants.FULL_HEIGHT);
            Image.aspectRatio(1);
        }, Image);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithChild();
            Button.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(553:9)", "@ohos/commoditydetail");
            __Button__titleButton();
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217825, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/commoditydetail/src/main/ets/components/CommodityDetail.ets(554:11)", "@ohos/commoditydetail");
            Image.height(StyleConstants.FULL_HEIGHT);
            Image.aspectRatio(1);
        }, Image);
        Button.pop();
        Flex.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
