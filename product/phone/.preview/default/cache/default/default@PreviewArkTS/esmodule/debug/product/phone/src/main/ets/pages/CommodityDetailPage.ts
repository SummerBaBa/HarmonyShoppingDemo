if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CommodityDetailPage_Params {
    commodityId?: string;
    info?: Commodity;
    localDataManager?: LocalDataManager;
}
import router from "@ohos:router";
import { LocalDataManager } from "@bundle:com.example.multishopping/phone@common/index";
import type { Commodity } from "@bundle:com.example.multishopping/phone@common/index";
import { CommodityDetail } from "@bundle:com.example.multishopping/phone@commoditydetail/index";
class CommodityDetailPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__commodityId = new ObservedPropertySimplePU('', this, "commodityId");
        this.__info = new ObservedPropertyObjectPU(undefined, this, "info");
        this.localDataManager = LocalDataManager.instance();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CommodityDetailPage_Params) {
        if (params.commodityId !== undefined) {
            this.commodityId = params.commodityId;
        }
        if (params.info !== undefined) {
            this.info = params.info;
        }
        if (params.localDataManager !== undefined) {
            this.localDataManager = params.localDataManager;
        }
    }
    updateStateVars(params: CommodityDetailPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__commodityId.purgeDependencyOnElmtId(rmElmtId);
        this.__info.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__commodityId.aboutToBeDeleted();
        this.__info.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __commodityId: ObservedPropertySimplePU<string>;
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
    private localDataManager: LocalDataManager;
    aboutToAppear() {
        let params = router.getParams() as Record<string, Object>;
        this.commodityId = params.id as string;
        this.info = this.localDataManager.queryCommodityListById(this.commodityId);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("product/phone/src/main/ets/pages/CommodityDetailPage.ets(34:5)", "phone");
            Row.backgroundColor({ "id": 134217902, "type": 10001, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new CommodityDetail(this, {
                        commodityId: this.commodityId
                    }, undefined, elmtId, () => { }, { page: "product/phone/src/main/ets/pages/CommodityDetailPage.ets", line: 35, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            commodityId: this.commodityId
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        commodityId: this.commodityId
                    });
                }
            }, { name: "CommodityDetail" });
        }
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "CommodityDetailPage";
    }
}
registerNamedRoute(() => new CommodityDetailPage(undefined, {}), "", { bundleName: "com.example.multishopping", moduleName: "phone", pagePath: "pages/CommodityDetailPage", pageFullPath: "product/phone/src/main/ets/pages/CommodityDetailPage", integratedHsp: "false" });
