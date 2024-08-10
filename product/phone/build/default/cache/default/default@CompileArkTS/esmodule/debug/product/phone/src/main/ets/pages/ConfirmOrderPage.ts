if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ConfirmPageOrder_Params {
    amount?: number;
    orderList?: Order[];
}
import router from "@ohos:router";
import { ConfirmOrder } from "@bundle:com.example.multishopping/phone@orderdetail/index";
import { Logger } from "@bundle:com.example.multishopping/phone@common/index";
import type { Order } from "@bundle:com.example.multishopping/phone@common/index";
class ConfirmPageOrder extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__amount = new ObservedPropertySimplePU(0, this, "amount");
        this.addProvidedVar("amount", this.__amount, false);
        this.__orderList = new ObservedPropertyObjectPU([], this, "orderList");
        this.addProvidedVar("orderList", this.__orderList, false);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ConfirmPageOrder_Params) {
        if (params.amount !== undefined) {
            this.amount = params.amount;
        }
        if (params.orderList !== undefined) {
            this.orderList = params.orderList;
        }
    }
    updateStateVars(params: ConfirmPageOrder_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__amount.purgeDependencyOnElmtId(rmElmtId);
        this.__orderList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__amount.aboutToBeDeleted();
        this.__orderList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __amount: ObservedPropertySimplePU<number>;
    get amount() {
        return this.__amount.get();
    }
    set amount(newValue: number) {
        this.__amount.set(newValue);
    }
    private __orderList: ObservedPropertyObjectPU<Order[]>;
    get orderList() {
        return this.__orderList.get();
    }
    set orderList(newValue: Order[]) {
        this.__orderList.set(newValue);
    }
    onPageShow() {
        let params = router.getParams() as Record<string, Order[]>;
        const orderList = params.orderList;
        for (let index = 0; index < orderList.length; index++) {
            let orderData: Order = {
                orderId: orderList[index].orderId,
                commodityId: orderList[index].commodityId,
                price: orderList[index].price,
                count: orderList[index].count,
                specifications: orderList[index].specifications,
                image: orderList[index].image,
                description: orderList[index].description,
                title: orderList[index].title
            };
            this.orderList.push(orderData);
        }
        Logger.info('onPageShow orderList length: ' + this.orderList.length);
        this.amount = this.orderList.reduce((s: number, item: Order) => s + item.price * item.count, 0);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ConfirmOrder(this, {}, undefined, elmtId, () => { }, { page: "product/phone/src/main/ets/pages/ConfirmOrderPage.ets", line: 49, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ConfirmOrder" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ConfirmPageOrder";
    }
}
registerNamedRoute(() => new ConfirmPageOrder(undefined, {}), "", { bundleName: "com.example.multishopping", moduleName: "phone", pagePath: "pages/ConfirmOrderPage", pageFullPath: "product/phone/src/main/ets/pages/ConfirmOrderPage", integratedHsp: "false" });
