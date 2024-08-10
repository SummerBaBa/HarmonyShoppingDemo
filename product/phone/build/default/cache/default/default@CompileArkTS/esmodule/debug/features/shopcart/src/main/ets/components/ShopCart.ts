if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ShopCart_Params {
    onNeedUpdate?: () => void;
    currentBreakpoint?: string;
    products?: Array<Product>;
    sumPrice?: number;
    isSelectAll?: boolean;
    commodityList?: Commodity[];
    selectProducts?: SelectProducts[];
    localDataManager?: LocalDataManager;
    onChangeCount?;
}
import router from "@ohos:router";
import { ShopCartConstants } from "@bundle:com.example.multishopping/phone@shopcart/ets/constants/ShopCartConstants";
import { LocalDataManager, Logger, CounterProduct, CommodityList, EmptyComponent, StyleConstants, BreakpointConstants } from "@bundle:com.example.multishopping/phone@common/index";
import type { Commodity, Product, Order } from "@bundle:com.example.multishopping/phone@common/index";
import type { SelectProducts, UpdateShopProps } from '@ohos/common/src/main/ets/viewmodel/ProductModel';
export class ShopCart extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.onNeedUpdate = undefined;
        this.__currentBreakpoint = this.createStorageProp('currentBreakpoint', BreakpointConstants.BREAKPOINT_SM, "currentBreakpoint");
        this.__products = new SynchedPropertyObjectTwoWayPU(params.products, this, "products");
        this.__sumPrice = new ObservedPropertySimplePU(0, this, "sumPrice");
        this.__isSelectAll = new ObservedPropertySimplePU(false, this, "isSelectAll");
        this.__commodityList = new ObservedPropertyObjectPU([], this, "commodityList");
        this.__selectProducts = new ObservedPropertyObjectPU([], this, "selectProducts");
        this.localDataManager = LocalDataManager.instance();
        this.onChangeCount = (count: number, info: Product): void => {
            let updateShopCartParams: UpdateShopProps = {
                id: info.id,
                count: count
            };
            this.localDataManager.updateShopCart(updateShopCartParams);
            this.needUpdateShopCart();
        };
        this.setInitiallyProvidedValue(params);
        this.declareWatch("products", this.onListChange);
        this.declareWatch("selectProducts", this.selectProductChange);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ShopCart_Params) {
        if (params.onNeedUpdate !== undefined) {
            this.onNeedUpdate = params.onNeedUpdate;
        }
        if (params.sumPrice !== undefined) {
            this.sumPrice = params.sumPrice;
        }
        if (params.isSelectAll !== undefined) {
            this.isSelectAll = params.isSelectAll;
        }
        if (params.commodityList !== undefined) {
            this.commodityList = params.commodityList;
        }
        if (params.selectProducts !== undefined) {
            this.selectProducts = params.selectProducts;
        }
        if (params.localDataManager !== undefined) {
            this.localDataManager = params.localDataManager;
        }
        if (params.onChangeCount !== undefined) {
            this.onChangeCount = params.onChangeCount;
        }
    }
    updateStateVars(params: ShopCart_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__products.purgeDependencyOnElmtId(rmElmtId);
        this.__sumPrice.purgeDependencyOnElmtId(rmElmtId);
        this.__isSelectAll.purgeDependencyOnElmtId(rmElmtId);
        this.__commodityList.purgeDependencyOnElmtId(rmElmtId);
        this.__selectProducts.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__products.aboutToBeDeleted();
        this.__sumPrice.aboutToBeDeleted();
        this.__isSelectAll.aboutToBeDeleted();
        this.__commodityList.aboutToBeDeleted();
        this.__selectProducts.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private onNeedUpdate?: () => void;
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __products: SynchedPropertySimpleOneWayPU<Array<Product>>;
    get products() {
        return this.__products.get();
    }
    set products(newValue: Array<Product>) {
        this.__products.set(newValue);
    }
    private __sumPrice: ObservedPropertySimplePU<number>;
    get sumPrice() {
        return this.__sumPrice.get();
    }
    set sumPrice(newValue: number) {
        this.__sumPrice.set(newValue);
    }
    private __isSelectAll: ObservedPropertySimplePU<boolean>;
    get isSelectAll() {
        return this.__isSelectAll.get();
    }
    set isSelectAll(newValue: boolean) {
        this.__isSelectAll.set(newValue);
    }
    private __commodityList: ObservedPropertyObjectPU<Commodity[]>;
    get commodityList() {
        return this.__commodityList.get();
    }
    set commodityList(newValue: Commodity[]) {
        this.__commodityList.set(newValue);
    }
    private __selectProducts: ObservedPropertyObjectPU<SelectProducts[]>;
    get selectProducts() {
        return this.__selectProducts.get();
    }
    set selectProducts(newValue: SelectProducts[]) {
        this.__selectProducts.set(newValue);
    }
    private localDataManager: LocalDataManager;
    aboutToAppear() {
        const sortRes = this.localDataManager.queryCommodityList();
        sortRes.sort(() => (Math.random() - StyleConstants.HALF_ONE) > 0 ? 1 : StyleConstants.MINUS_ONE);
        this.commodityList = sortRes;
        this.onListChange();
    }
    needUpdateShopCart() {
        if (this.onNeedUpdate !== undefined) {
            this.onNeedUpdate();
        }
        this.countSumPrice();
    }
    private countSumPrice() {
        this.sumPrice = 0;
        this.isSelectAll = this.selectProducts.every((item: SelectProducts) => item.selected);
        let tempPrice: number = 0;
        this.selectProducts.forEach((item: SelectProducts) => {
            if (item.selected) {
                let data = this.products.find((value: Product) => value.id === item.key);
                const ins = (data !== undefined ? data.price * data.count : 0);
                tempPrice += ins;
            }
        });
        this.sumPrice = tempPrice;
    }
    settleAccounts() {
        const orderList = this.products
            .filter((item: Product, index: number) => item.id === this.selectProducts[index].key && this.selectProducts[index].selected === true)
            .map((item: Product) => {
            let returnParams: Order = {
                orderId: item.id,
                commodityId: Number.parseInt(item.commodityId),
                price: item.price,
                count: item.count,
                specifications: item.specifications,
                image: item.img[0],
                description: item.description,
                title: item.name
            };
            return returnParams;
        });
        Logger.info('settleAccounts orderList length: ' + orderList.length);
        router.pushUrl({
            url: ShopCartConstants.CONFIRM_ORDER_PAGE_URL,
            params: { orderList: orderList }
        }).catch((err: Error) => {
            Logger.error(JSON.stringify(err));
        });
    }
    onListChange() {
        this.selectProducts = [];
        this.products.forEach((item: Product) => {
            let payload: SelectProducts = { selected: false, key: '' };
            payload.selected = !!item.selected;
            payload.key = item.id;
            this.selectProducts.push(payload);
        });
        this.countSumPrice();
    }
    selectProductChange(index: number): boolean {
        if (this.selectProducts[index] !== undefined) {
            return this.selectProducts[index].selected;
        }
        return false;
    }
    private onChangeCount;
    ItemDelete(item: Product, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                direction: FlexDirection.Column,
                justifyContent: FlexAlign.Center,
                alignItems: ItemAlign.End
            });
            Flex.onClick(() => {
                this.products = this.localDataManager.deleteShopCart([item.id]);
            });
            Flex.height({ "id": 134218000, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.width({ "id": 134218002, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.backgroundColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.borderRadius({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.margin({ left: { "id": 134218001, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({ right: { "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134218005, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.margin({ bottom: { "id": 134217930, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217994, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Column.pop();
        Flex.pop();
    }
    CartItem(item: Product, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Row, alignItems: ItemAlign.Center });
            Flex.padding({
                left: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Flex.borderRadius({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.backgroundColor(Color.White);
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.height({ "id": 134218000, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create({
                name: `${ShopCartConstants.CHECKBOX}${index}`,
                group: ShopCartConstants.CHECKBOX_GROUP
            });
            Checkbox.width({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Checkbox.height({ "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Checkbox.selectedColor({ "id": 134217998, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Checkbox.select(this.selectProductChange(index));
            Checkbox.onClick(() => {
                let tempData: SelectProducts = {
                    key: this.selectProducts[index].key,
                    selected: !this.selectProducts[index].selected
                };
                this.selectProducts.splice(index, 1, tempData);
                let updateShopCartParams: UpdateShopProps = {
                    id: item.id,
                    selected: this.selectProducts[index].selected
                };
                this.localDataManager.updateShopCart(updateShopCartParams);
                this.needUpdateShopCart();
            });
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": -1, "type": 30000, params: [item.img[0]], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217999, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217999, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Cover);
            Image.margin({ left: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column, justifyContent: FlexAlign.SpaceAround });
            Flex.margin({
                left: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                top: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Flex.width(StyleConstants.FULL_WIDTH);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217893, "type": 10003, params: [item.name, item.description], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({ bottom: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(StyleConstants.TWO_TEXT_LINE);
            Text.width(StyleConstants.FULL_WIDTH);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.specifications.length === 2 ?
                item.specifications[0].value + '，' + item.specifications[1].value :
                item.specifications.length === 3 ?
                    item.specifications[0].value + '，' + item.specifications[1].value + '，' + item.specifications[2].value :
                    item.specifications.length === 4 ?
                        item.specifications[0].value + '，' + item.specifications[1].value + '，' + item.specifications[2].value + '，' + item.specifications[3].value : '');
            Text.fontSize({ "id": 134217921, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.maxLines(1);
            Text.fontColor({ "id": 134217901, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.width(StyleConstants.FULL_WIDTH);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
        }, Text);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Span.create({ "id": 134217816, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.fontSize({ "id": 134217921, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.fontColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Span);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Span.create(`${item.price}`);
            Span.fontSize({ "id": 134217919, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.fontColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Span);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CounterProduct(this, {
                        count: item.count,
                        onNumberChange: (num: number) => {
                            this.onChangeCount(num, item);
                        }
                    }, undefined, elmtId, () => { }, { page: "features/shopcart/src/main/ets/components/ShopCart.ets", line: 211, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            count: item.count,
                            onNumberChange: (num: number) => {
                                this.onChangeCount(num, item);
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CounterProduct" });
        }
        Flex.pop();
        Flex.pop();
        Flex.pop();
    }
    Settle(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.padding({
                right: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Flex.backgroundColor(Color.White);
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.height({ "id": 134217924, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ alignItems: ItemAlign.Center });
            Flex.height(StyleConstants.FULL_HEIGHT);
            Flex.width({ "id": 134218004, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create({ name: ShopCartConstants.CHECKBOX, group: ShopCartConstants.CHECKBOX_GROUP });
            Checkbox.selectedColor({ "id": 134217998, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Checkbox.select(this.isSelectAll);
            Checkbox.onClick(() => {
                this.isSelectAll = !this.isSelectAll;
                this.products.map((item: Product): void => {
                    let returnParams = this.localDataManager.updateShopCart({
                        id: item.id,
                        count: item.count,
                        selected: !!this.isSelectAll,
                        specifications: []
                    });
                    return returnParams;
                });
                this.needUpdateShopCart();
            });
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217996, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.Grey);
        }, Text);
        Text.pop();
        Flex.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.End });
            Flex.height(StyleConstants.FULL_HEIGHT);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217997, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217921, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.margin({
                right: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Text);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Span.create({ "id": 134217816, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.fontSize({ "id": 134217921, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.fontColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Span);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Span.create(`${this.sumPrice}`);
            Span.fontSize({ "id": 134217919, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.fontColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Span);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 134217993, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { type: ButtonType.Capsule, stateEffect: true });
            Button.backgroundColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Button.fontSize({ "id": 134217921, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Button.height({ "id": 134218003, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Button.width({ "id": 134218004, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Button.onClick(() => {
                this.settleAccounts();
            });
        }, Button);
        Button.pop();
        Flex.pop();
        Flex.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column });
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.backgroundColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217732, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217917, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.height({ "id": 134217924, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.padding({ left: { "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Text.width(StyleConstants.FULL_WIDTH);
            Text.textAlign(TextAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
            Scroll.margin({
                left: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
            Scroll.height(StyleConstants.FULL_HEIGHT);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.products.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create({ space: StyleConstants.FIFTEEN_SPACE });
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = (_item, index?: number) => {
                            const item = _item;
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
                                    ListItem.swipeAction({ end: this.ItemDelete.bind(this, item) });
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        If.create();
                                        if (index !== undefined) {
                                            this.ifElseBranchUpdateFunction(0, () => {
                                                this.CartItem.bind(this)(item, index);
                                            });
                                        }
                                        else {
                                            this.ifElseBranchUpdateFunction(1, () => {
                                            });
                                        }
                                    }, If);
                                    If.pop();
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.products, forEachItemGenFunction, (item: Product) => item.id, true, false);
                    }, ForEach);
                    ForEach.pop();
                    List.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(StyleConstants.FULL_WIDTH);
                        Column.height(StyleConstants.FIFTY_HEIGHT);
                    }, Column);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new EmptyComponent(this, {}, undefined, elmtId, () => { }, { page: "features/shopcart/src/main/ets/components/ShopCart.ets", line: 323, col: 15 });
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
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217995, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217919, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.width(StyleConstants.FULL_WIDTH);
            Text.margin({
                top: { "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
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
                                url: ShopCartConstants.COMMODITY_DETAIL_PAGE_URL,
                                params: { id: data.id }
                            }).catch((err: Error) => {
                                Logger.error(JSON.stringify(err));
                            });
                        }
                    }, undefined, elmtId, () => { }, { page: "features/shopcart/src/main/ets/components/ShopCart.ets", line: 338, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            commodityList: this.commodityList,
                            column: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ?
                                StyleConstants.DISPLAY_TWO : StyleConstants.DISPLAY_THREE,
                            onClickItem: (data: Commodity) => {
                                router.pushUrl({
                                    url: ShopCartConstants.COMMODITY_DETAIL_PAGE_URL,
                                    params: { id: data.id }
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
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if ((this.selectProducts).some(((item: SelectProducts) => item.selected === true))) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.Settle.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
