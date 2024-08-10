if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface OrderDetailListPage_Params {
    orderList?: Order[];
    commodityList?: Commodity[];
    currentTabIndex?: number;
    localDataManager?: LocalDataManager;
}
import router from "@ohos:router";
import { OrderDetailList } from "@bundle:com.example.multishopping/phone@orderdetail/index";
import { LocalDataManager } from "@bundle:com.example.multishopping/phone@common/index";
import type { Order, Commodity } from "@bundle:com.example.multishopping/phone@common/index";
class OrderDetailListPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__orderList = new ObservedPropertyObjectPU([], this, "orderList");
        this.addProvidedVar("orderList", this.__orderList, false);
        this.__commodityList = new ObservedPropertyObjectPU([], this, "commodityList");
        this.addProvidedVar("commodityList", this.__commodityList, false);
        this.__currentTabIndex = new ObservedPropertySimplePU(0, this, "currentTabIndex");
        this.addProvidedVar("currentTabIndex", this.__currentTabIndex, false);
        this.localDataManager = LocalDataManager.instance();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: OrderDetailListPage_Params) {
        if (params.orderList !== undefined) {
            this.orderList = params.orderList;
        }
        if (params.commodityList !== undefined) {
            this.commodityList = params.commodityList;
        }
        if (params.currentTabIndex !== undefined) {
            this.currentTabIndex = params.currentTabIndex;
        }
        if (params.localDataManager !== undefined) {
            this.localDataManager = params.localDataManager;
        }
    }
    updateStateVars(params: OrderDetailListPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__orderList.purgeDependencyOnElmtId(rmElmtId);
        this.__commodityList.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTabIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__orderList.aboutToBeDeleted();
        this.__commodityList.aboutToBeDeleted();
        this.__currentTabIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __orderList: ObservedPropertyObjectPU<Order[]>;
    get orderList() {
        return this.__orderList.get();
    }
    set orderList(newValue: Order[]) {
        this.__orderList.set(newValue);
    }
    private __commodityList: ObservedPropertyObjectPU<Commodity[]>;
    get commodityList() {
        return this.__commodityList.get();
    }
    set commodityList(newValue: Commodity[]) {
        this.__commodityList.set(newValue);
    }
    private __currentTabIndex: ObservedPropertySimplePU<number>;
    get currentTabIndex() {
        return this.__currentTabIndex.get();
    }
    set currentTabIndex(newValue: number) {
        this.__currentTabIndex.set(newValue);
    }
    private localDataManager: LocalDataManager;
    aboutToAppear() {
        let params = router.getParams() as Record<string, Object>;
        this.currentTabIndex = params.tabIndex as number || 0;
    }
    onPageShow() {
        this.orderList = this.localDataManager.queryOrderList();
        this.commodityList = this.localDataManager.queryCommodityList();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new OrderDetailList(this, {}, undefined, elmtId, () => { }, { page: "product/phone/src/main/ets/pages/OrderDetailListPage.ets", line: 40, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "OrderDetailList" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "OrderDetailListPage";
    }
}
registerNamedRoute(() => new OrderDetailListPage(undefined, {}), "", { bundleName: "com.example.multishopping", moduleName: "phone", pagePath: "pages/OrderDetailListPage", pageFullPath: "product/phone/src/main/ets/pages/OrderDetailListPage", integratedHsp: "false" });
