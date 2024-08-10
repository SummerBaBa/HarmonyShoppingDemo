if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommodityList_Params {
    commodityList?: Commodity[];
    column?: number;
    onClickItem?;
}
import type { Commodity } from '../viewmodel/CommodityModel';
import { EmptyComponent } from "@bundle:com.example.multishopping/phone@common/ets/components/EmptyComponent";
import { StyleConstants } from "@bundle:com.example.multishopping/phone@common/ets/constants/StyleConstants";
import { CommonDataSource } from "@bundle:com.example.multishopping/phone@common/ets/utils/CommonDataSource";
export class CommodityList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__commodityList = new SynchedPropertyObjectTwoWayPU(params.commodityList, this, "commodityList");
        this.__column = new SynchedPropertySimpleOneWayPU(params.column, this, "column");
        this.onClickItem = (Commodity: Commodity) => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommodityList_Params) {
        if (params.column === undefined) {
            this.__column.set(0);
        }
        if (params.onClickItem !== undefined) {
            this.onClickItem = params.onClickItem;
        }
    }
    updateStateVars(params: CommodityList_Params) {
        this.__column.reset(params.column);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__commodityList.purgeDependencyOnElmtId(rmElmtId);
        this.__column.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__commodityList.aboutToBeDeleted();
        this.__column.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __commodityList: SynchedPropertySimpleOneWayPU<Commodity[]>;
    get commodityList() {
        return this.__commodityList.get();
    }
    set commodityList(newValue: Commodity[]) {
        this.__commodityList.set(newValue);
    }
    private __column: SynchedPropertySimpleOneWayPU<number>;
    get column() {
        return this.__column.get();
    }
    set column(newValue: number) {
        this.__column.set(newValue);
    }
    private onClickItem?;
    CommodityItem(info: Commodity, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Column.height({ "id": 134217911, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Column.width(StyleConstants.FULL_WIDTH);
            Column.backgroundColor(Color.White);
            Column.borderRadius({ "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": -1, "type": 30000, params: [info.images[0]], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.width({ "id": 134217912, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217912, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Contain);
            Image.margin({
                top: { "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(StyleConstants.FULL_WIDTH);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217893, "type": 10003, params: [info.title, info.description], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.Black);
            Text.maxLines(StyleConstants.TWO_TEXT_LINE);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.fontSize({ "id": 134217920, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontWeight(StyleConstants.FONT_WEIGHT_FOUR);
            Text.lineHeight({ "id": 134217910, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217892, "type": 10003, params: [info.price], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontSize({ "id": 134217919, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({
                top: { "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${info.promotion}`);
            Text.fontSize({ "id": 134217918, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.backgroundColor({ "id": 134217898, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.borderRadius({ "id": 134217925, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.height({ "id": 134217929, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.padding({
                right: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.commodityList.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create({ space: StyleConstants.TWELVE_SPACE });
                        List.margin({ left: { "id": 134217913, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, right: { "id": 134217913, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                        List.listDirection(Axis.Vertical);
                        List.lanes(this.column);
                    }, List);
                    {
                        const __lazyForEachItemGenFunction = _item => {
                            const item = _item;
                            {
                                const itemCreation2 = (elmtId, isInitialRender) => {
                                    ListItem.create(() => { }, false);
                                    ListItem.margin({ left: { "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, right: { "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                                    ListItem.onClick(() => {
                                        if (this.onClickItem !== undefined) {
                                            this.onClickItem(item);
                                        }
                                    });
                                };
                                const observedDeepRender = () => {
                                    this.observeComponentCreation2(itemCreation2, ListItem);
                                    this.CommodityItem.bind(this)(item);
                                    ListItem.pop();
                                };
                                observedDeepRender();
                            }
                        };
                        const __lazyForEachItemIdFunc = (item: Commodity) => JSON.stringify(item);
                        LazyForEach.create("1", this, new CommonDataSource<Commodity>(this.commodityList), __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
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
                                let componentCall = new EmptyComponent(this, { outerHeight: StyleConstants.FIFTY_HEIGHT }, undefined, elmtId, () => { }, { page: "common/src/main/ets/components/CommodityList.ets", line: 96, col: 7 });
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
    rerender() {
        this.updateDirtyElements();
    }
}
