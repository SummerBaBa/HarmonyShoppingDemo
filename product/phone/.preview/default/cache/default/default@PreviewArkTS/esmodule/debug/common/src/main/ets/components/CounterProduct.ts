if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CounterProduct_Params {
    quantityCount?: number;
    disabled?: boolean;
    count?: number;
    counterMin?: number;
    onNumberChange?: (n: number) => void;
}
export class CounterProduct extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__quantityCount = new ObservedPropertySimplePU(1, this, "quantityCount");
        this.__disabled = new ObservedPropertySimplePU(true, this, "disabled");
        this.count = 1;
        this.counterMin = 1;
        this.onNumberChange = () => { };
        this.setInitiallyProvidedValue(params);
        this.declareWatch("quantityCount", this.onChange);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CounterProduct_Params) {
        if (params.quantityCount !== undefined) {
            this.quantityCount = params.quantityCount;
        }
        if (params.disabled !== undefined) {
            this.disabled = params.disabled;
        }
        if (params.count !== undefined) {
            this.count = params.count;
        }
        if (params.counterMin !== undefined) {
            this.counterMin = params.counterMin;
        }
        if (params.onNumberChange !== undefined) {
            this.onNumberChange = params.onNumberChange;
        }
    }
    updateStateVars(params: CounterProduct_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__quantityCount.purgeDependencyOnElmtId(rmElmtId);
        this.__disabled.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__quantityCount.aboutToBeDeleted();
        this.__disabled.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __quantityCount: ObservedPropertySimplePU<number>;
    get quantityCount() {
        return this.__quantityCount.get();
    }
    set quantityCount(newValue: number) {
        this.__quantityCount.set(newValue);
    }
    private __disabled: ObservedPropertySimplePU<boolean>;
    get disabled() {
        return this.__disabled.get();
    }
    set disabled(newValue: boolean) {
        this.__disabled.set(newValue);
    }
    private count: number;
    private counterMin: number;
    private onNumberChange: (n: number) => void;
    aboutToAppear() {
        this.quantityCount = this.count;
        if (this.quantityCount === this.counterMin) {
            this.disabled = true;
        }
    }
    onChange() {
        this.disabled = (this.quantityCount === this.counterMin);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("common/src/main/ets/components/CounterProduct.ets(36:5)", "@ohos/common");
            Row.width({ "id": 134217922, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Row.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.disabled ? { "id": 134217913, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } : { "id": 134217892, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("common/src/main/ets/components/CounterProduct.ets(37:7)", "@ohos/common");
            Image.width({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.onClick(() => {
                if (this.disabled) {
                    return;
                }
                this.quantityCount = Math.max(this.quantityCount - 1, this.counterMin);
                this.onNumberChange(this.quantityCount);
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.quantityCount}`);
            Text.debugLine("common/src/main/ets/components/CounterProduct.ets(47:7)", "@ohos/common");
            Text.fontSize({ "id": 134217928, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.Black);
            Text.textAlign(TextAlign.Center);
            Text.width({ "id": 134217921, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 134217943, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.debugLine("common/src/main/ets/components/CounterProduct.ets(53:7)", "@ohos/common");
            Image.width({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.height({ "id": 134217940, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Image.onClick(() => {
                this.quantityCount = Math.min(this.quantityCount + 1, Number.MAX_VALUE);
                this.onNumberChange(this.quantityCount);
            });
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
