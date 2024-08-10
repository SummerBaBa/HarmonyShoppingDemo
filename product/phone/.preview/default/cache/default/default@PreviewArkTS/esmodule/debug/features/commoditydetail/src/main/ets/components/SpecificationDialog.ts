if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SpecificationDialog_Params {
    colorChange?: ColorChange;
    data?: Commodity;
    count?: number;
    selectTags?: ProductSpecification[];
    productOptions?: string;
    controller?: CustomDialogController;
    onFinish?: (type: FinishType, count: number, selectKeys: ProductSpecification[]) => void;
}
import { CounterProduct, GridConstants, StyleConstants } from "@bundle:com.example.multishopping/phone@common/index";
import type { Specification, Commodity, KV } from "@bundle:com.example.multishopping/phone@common/index";
import { CapsuleGroupButton } from "@bundle:com.example.multishopping/phone@commoditydetail/ets/components/CapsuleGroupButton";
import { FinishType } from "@bundle:com.example.multishopping/phone@commoditydetail/ets/viewmodel/TypeModel";
import type { ColorChange } from "@bundle:com.example.multishopping/phone@commoditydetail/ets/viewmodel/TypeModel";
import { CommodityConstants } from "@bundle:com.example.multishopping/phone@commoditydetail/ets/constants/CommodityConstants";
import type { ProductSpecification } from '@ohos/common/src/main/ets/viewmodel/ProductModel';
export class SpecificationDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__colorChange = new ObservedPropertyObjectPU({
            颜色: '',
            版本: '',
            网络制式: '',
            类型: ''
        }, this, "colorChange");
        this.__data = new SynchedPropertyObjectTwoWayPU(params.data, this, "data");
        this.__count = new SynchedPropertySimpleTwoWayPU(params.count, this, "count");
        this.__selectTags = new SynchedPropertyObjectTwoWayPU(params.selectTags, this, "selectTags");
        this.__productOptions = new SynchedPropertySimpleTwoWayPU(params.productOptions, this, "productOptions");
        this.controller = undefined;
        this.onFinish = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SpecificationDialog_Params) {
        if (params.colorChange !== undefined) {
            this.colorChange = params.colorChange;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.onFinish !== undefined) {
            this.onFinish = params.onFinish;
        }
    }
    updateStateVars(params: SpecificationDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__colorChange.purgeDependencyOnElmtId(rmElmtId);
        this.__data.purgeDependencyOnElmtId(rmElmtId);
        this.__count.purgeDependencyOnElmtId(rmElmtId);
        this.__selectTags.purgeDependencyOnElmtId(rmElmtId);
        this.__productOptions.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__colorChange.aboutToBeDeleted();
        this.__data.aboutToBeDeleted();
        this.__count.aboutToBeDeleted();
        this.__selectTags.aboutToBeDeleted();
        this.__productOptions.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __colorChange: ObservedPropertyObjectPU<ColorChange>;
    get colorChange() {
        return this.__colorChange.get();
    }
    set colorChange(newValue: ColorChange) {
        this.__colorChange.set(newValue);
    }
    private __data: SynchedPropertySimpleOneWayPU<Commodity>;
    get data() {
        return this.__data.get();
    }
    set data(newValue: Commodity) {
        this.__data.set(newValue);
    }
    private __count: SynchedPropertySimpleTwoWayPU<number>;
    get count() {
        return this.__count.get();
    }
    set count(newValue: number) {
        this.__count.set(newValue);
    }
    private __selectTags: SynchedPropertySimpleOneWayPU<ProductSpecification[]>;
    get selectTags() {
        return this.__selectTags.get();
    }
    set selectTags(newValue: ProductSpecification[]) {
        this.__selectTags.set(newValue);
    }
    private __productOptions: SynchedPropertySimpleTwoWayPU<string>;
    get productOptions() {
        return this.__productOptions.get();
    }
    set productOptions(newValue: string) {
        this.__productOptions.set(newValue);
    }
    private controller?: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.controller = ctr;
    }
    private onFinish?: (type: FinishType, count: number, selectKeys: ProductSpecification[]) => void;
    aboutToAppear() {
        this.selectTags.forEach((item) => {
            switch (item.name) {
                case '颜色':
                    this.colorChange.颜色 = item.value;
                    break;
                case '版本':
                    this.colorChange.版本 = item.value;
                    break;
                case '网络制式':
                    this.colorChange.网络制式 = item.value;
                    break;
                case '类型':
                    this.colorChange.类型 = item.value;
                    break;
                default:
                    break;
            }
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({ columns: { sm: GridConstants.COLUMN_FOUR, md: GridConstants.COLUMN_EIGHT,
                    lg: GridConstants.COLUMN_TWELVE }, gutter: GridConstants.GUTTER_TWELVE });
            GridRow.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(58:5)", "@ohos/commoditydetail");
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({ span: { sm: GridConstants.SPAN_FOUR, md: GridConstants.SPAN_EIGHT, lg: GridConstants.SPAN_EIGHT },
                offset: { lg: GridConstants.OFFSET_TWO } });
            GridCol.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(60:7)", "@ohos/commoditydetail");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(62:9)", "@ohos/commoditydetail");
            Column.border({
                radius: {
                    topRight: { "id": 134217835, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                    topLeft: { "id": 134217835, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                }
            });
            Column.backgroundColor({ "id": 134217902, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Column.width(StyleConstants.FULL_WIDTH);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217847, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(63:11)", "@ohos/commoditydetail");
            Image.width({ "id": 134217834, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Contain);
            Image.onClick(() => {
                this.controller?.close();
                if (this.onFinish) {
                    this.onFinish(FinishType.CANCEL, this.count, ObservedObject.GetRawObject(this.selectTags));
                }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(73:11)", "@ohos/commoditydetail");
            Row.margin({
                top: { "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                bottom: { "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                left: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.data.images && { "id": -1, "type": 30000, params: [this.data.images[0]], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(74:13)", "@ohos/commoditydetail");
            Image.width({ "id": 134217833, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217833, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.objectFit(ImageFit.Cover);
            Image.margin({
                left: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                right: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(82:13)", "@ohos/commoditydetail");
            Column.layoutWeight(StyleConstants.LAYOUT_WEIGHT);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(83:15)", "@ohos/commoditydetail");
            Text.margin({ bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Span.create({ "id": 134217817, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(84:17)", "@ohos/commoditydetail");
            Span.fontSize({ "id": 134217926, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.fontColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Span);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Span.create(`${this.data.price}`);
            Span.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(87:17)", "@ohos/commoditydetail");
            Span.fontSize({ "id": 134217915, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Span.fontColor({ "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Span);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${CommodityConstants.SPECIAL_CHOOSE} ：${this.productOptions} ${this.count ? `X${this.count}` : ''}`);
            Text.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(93:15)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.Black);
            Text.maxLines(CommodityConstants.MAX_LINE);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(109:11)", "@ohos/commoditydetail");
            Scroll.margin({ left: { "id": 134217936, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(110:13)", "@ohos/commoditydetail");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.Specification.bind(this)(item);
            };
            this.forEachUpdateFunction(elmtId, this.data.specifications || [], forEachItemGenFunction, (item: Specification) => item.id, false, false);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(114:15)", "@ohos/commoditydetail");
            Flex.margin({ right: { "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 134217815, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(115:17)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CounterProduct(this, {
                        count: this.count,
                        onNumberChange: (num: number) => this.count = num
                    }, undefined, elmtId, () => { }, { page: "features/commoditydetail/src/main/ets/components/SpecificationDialog.ets", line: 118, col: 17 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            count: this.count,
                            onNumberChange: (num: number) => this.count = num
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
        Column.pop();
        Scroll.pop();
        this.ButtonGroup.bind(this)();
        Column.pop();
        GridCol.pop();
        GridRow.pop();
    }
    ButtonGroup(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create();
            Flex.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(143:5)", "@ohos/commoditydetail");
            Flex.width(StyleConstants.FULL_WIDTH);
            Flex.height({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Flex.padding({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Flex);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CapsuleGroupButton(this, {
                        configs: [{
                                text: { "id": 134217813, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                onClick: () => {
                                    this.controller?.close();
                                    if (this.onFinish) {
                                        this.onFinish(FinishType.JOIN_SHOPPING_CART, this.count, ObservedObject.GetRawObject(this.selectTags));
                                    }
                                }
                            }, {
                                text: { "id": 134217806, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                onClick: () => {
                                    this.controller?.close();
                                    if (this.onFinish) {
                                        this.onFinish(FinishType.BUY_NOW, this.count, ObservedObject.GetRawObject(this.selectTags));
                                    }
                                }
                            }]
                    }, undefined, elmtId, () => { }, { page: "features/commoditydetail/src/main/ets/components/SpecificationDialog.ets", line: 144, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            configs: [{
                                    text: { "id": 134217813, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                    onClick: () => {
                                        this.controller?.close();
                                        if (this.onFinish) {
                                            this.onFinish(FinishType.JOIN_SHOPPING_CART, this.count, ObservedObject.GetRawObject(this.selectTags));
                                        }
                                    }
                                }, {
                                    text: { "id": 134217806, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                                    onClick: () => {
                                        this.controller?.close();
                                        if (this.onFinish) {
                                            this.onFinish(FinishType.BUY_NOW, this.count, ObservedObject.GetRawObject(this.selectTags));
                                        }
                                    }
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
    colorChanges(key: string): string {
        let temp: string = '';
        switch (key) {
            case '颜色':
                temp = this.colorChange.颜色;
                break;
            case '版本':
                temp = this.colorChange.版本;
                break;
            case '网络制式':
                temp = this.colorChange.网络制式;
                break;
            case '类型':
                temp = this.colorChange.类型;
                break;
            default:
                break;
        }
        return temp;
    }
    Specification(payload: Specification, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(190:5)", "@ohos/commoditydetail");
            Column.alignItems(HorizontalAlign.Start);
            Column.width(StyleConstants.FULL_WIDTH);
            Column.margin({ bottom: { "id": 134217933, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(payload.title);
            Text.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(191:7)", "@ohos/commoditydetail");
            Text.fontSize({ "id": 134217927, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.margin({ bottom: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
            Text.fontColor({ "id": 134217903, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ wrap: FlexWrap.Wrap });
            Flex.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(195:7)", "@ohos/commoditydetail");
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.key);
                    Text.debugLine("features/commoditydetail/src/main/ets/components/SpecificationDialog.ets(197:11)", "@ohos/commoditydetail");
                    Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.fontColor(this.colorChanges(payload.id) === item.value ? { "id": 134217900, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } : Color.Black);
                    Text.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.padding({
                        top: { "id": 134217935, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                        bottom: { "id": 134217935, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                        left: { "id": 134217937, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
                        right: { "id": 134217937, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
                    });
                    Text.backgroundColor(this.colorChanges(payload.id) === item.value ? { "id": 134217822, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } : { "id": 134217899, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.margin({ bottom: { "id": 134217937, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, right: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
                    Text.borderRadius({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    Text.onClick((): void => this.onTagSelect(item, payload.id));
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, payload.data, forEachItemGenFunction, (item: KV) => JSON.stringify(item.value), false, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
        Column.pop();
    }
    onTagSelect(tag: KV, parentId: string) {
        this.selectTags.forEach((item, index) => {
            if (parentId === item.name) {
                switch (parentId) {
                    case '颜色':
                        this.colorChange.颜色 = tag.value;
                        break;
                    case '版本':
                        this.colorChange.版本 = tag.value;
                        break;
                    case '网络制式':
                        this.colorChange.网络制式 = tag.value;
                        break;
                    case '类型':
                        this.colorChange.类型 = tag.value;
                        break;
                    default:
                        break;
                }
                let data: ProductSpecification = { name: parentId, value: tag.value };
                this.selectTags.splice(index, 1, data);
            }
        });
        this.onSelectKeysChange();
    }
    onSelectKeysChange() {
        this.productOptions = '';
        this.selectTags.forEach((item) => {
            this.productOptions += item.value + ' ';
        });
    }
    rerender() {
        this.updateDirtyElements();
    }
}
