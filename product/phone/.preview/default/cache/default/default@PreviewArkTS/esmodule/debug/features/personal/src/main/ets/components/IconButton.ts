if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface IconButton_Params {
    props?: IconButtonModel;
    click?: (key: OrderType) => void;
}
import type { OrderType } from '@ohos/common';
import type { IconButtonModel } from '../viewmodel/IconButtonModel';
import { PersonalConstants } from "@bundle:com.example.multishopping/phone@personal/ets/constants/PersonalConstants";
export class IconButton extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__props = new SynchedPropertyNesedObjectPU(params.props, this, "props");
        this.click = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: IconButton_Params) {
        this.__props.set(params.props);
        if (params.click !== undefined) {
            this.click = params.click;
        }
    }
    updateStateVars(params: IconButton_Params) {
        this.__props.set(params.props);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__props.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__props.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __props: SynchedPropertyNesedObjectPU<IconButtonModel>;
    get props() {
        return this.__props.get();
    }
    private click?: (key: OrderType) => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/personal/src/main/ets/components/IconButton.ets(26:5)", "@ohos/personal");
            Column.height({ "id": 134217931, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Column.onClick(() => {
                if (this.click !== undefined && this.props.key !== undefined) {
                    this.click(this.props.key);
                }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.props.count) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Badge.create({
                            value: `${this.props.count}`,
                            style: { color: Color.White, badgeSize: PersonalConstants.BADGE_SIZE, badgeColor: Color.Red }
                        });
                        Badge.debugLine("features/personal/src/main/ets/components/IconButton.ets(28:9)", "@ohos/personal");
                        Badge.width({ "id": 134217985, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Badge.height({ "id": 134217985, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    }, Badge);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.props.icon);
                        Image.debugLine("features/personal/src/main/ets/components/IconButton.ets(32:11)", "@ohos/personal");
                        Image.width({ "id": 134217985, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Image.height({ "id": 134217985, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    }, Image);
                    Badge.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.props.icon);
                        Image.debugLine("features/personal/src/main/ets/components/IconButton.ets(39:9)", "@ohos/personal");
                        Image.width({ "id": 134217985, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                        Image.height({ "id": 134217985, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
                    }, Image);
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.props.text);
            Text.debugLine("features/personal/src/main/ets/components/IconButton.ets(43:7)", "@ohos/personal");
            Text.fontSize({ "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" });
            Text.fontColor(Color.Black);
            Text.margin({ top: { "id": 134217938, "type": 10002, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
