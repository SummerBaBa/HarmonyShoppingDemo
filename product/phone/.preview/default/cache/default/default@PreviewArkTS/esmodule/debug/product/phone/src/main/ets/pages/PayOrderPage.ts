if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface PayOrderPage_Params {
    data?: Order[];
    totalPrice?: number;
    localDataManager?: LocalDataManager;
}
import router from "@ohos:router";
import { PayOrder } from "@bundle:com.example.multishopping/phone@orderdetail/index";
import { LocalDataManager } from "@bundle:com.example.multishopping/phone@common/index";
import type { Order } from "@bundle:com.example.multishopping/phone@common/index";
class PayOrderPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__data = new ObservedPropertyObjectPU([], this, "data");
        this.addProvidedVar("orderList", this.__data, false);
        this.addProvidedVar("data", this.__data, false);
        this.__totalPrice = new ObservedPropertySimplePU(0, this, "totalPrice");
        this.localDataManager = LocalDataManager.instance();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PayOrderPage_Params) {
        if (params.data !== undefined) {
            this.data = params.data;
        }
        if (params.totalPrice !== undefined) {
            this.totalPrice = params.totalPrice;
        }
        if (params.localDataManager !== undefined) {
            this.localDataManager = params.localDataManager;
        }
    }
    updateStateVars(params: PayOrderPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__data.purgeDependencyOnElmtId(rmElmtId);
        this.__totalPrice.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__data.aboutToBeDeleted();
        this.__totalPrice.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __data: ObservedPropertyObjectPU<Order[]>;
    get data() {
        return this.__data.get();
    }
    set data(newValue: Order[]) {
        this.__data.set(newValue);
    }
    private __totalPrice: ObservedPropertySimplePU<number>;
    get totalPrice() {
        return this.__totalPrice.get();
    }
    set totalPrice(newValue: number) {
        this.__totalPrice.set(newValue);
    }
    private localDataManager: LocalDataManager;
    aboutToAppear() {
        let params = router.getParams() as Record<string, Object>;
        let order: Order = params.order as Order;
        let orderIds: string[] = params.orderIds as string[];
        if (order) {
            this.data = [order];
        }
        if (orderIds) {
            const orders = this.localDataManager.queryOrderList();
            this.data = orders.filter(order => orderIds.includes(order.orderId));
        }
        this.totalPrice = this.data.reduce((sum, i) => {
            return sum + i.price * i.count;
        }, 0);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("product/phone/src/main/ets/pages/PayOrderPage.ets(44:5)", "phone");
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PayOrder(this, {
                        totalPrice: this.__totalPrice
                    }, undefined, elmtId, () => { }, { page: "product/phone/src/main/ets/pages/PayOrderPage.ets", line: 45, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            totalPrice: this.totalPrice
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PayOrder" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "PayOrderPage";
    }
}
registerNamedRoute(() => new PayOrderPage(undefined, {}), "", { bundleName: "com.example.multishopping", moduleName: "phone", pagePath: "pages/PayOrderPage", pageFullPath: "product/phone/src/main/ets/pages/PayOrderPage", integratedHsp: "false" });
