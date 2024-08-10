import { OrderType } from "@bundle:com.example.multishopping/phone@common/index";
import { IconButtonModel } from "@bundle:com.example.multishopping/phone@personal/ets/viewmodel/IconButtonModel";
const orderButton: IconButtonModel[] = [
    new IconButtonModel({ "id": 134217975, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217779, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderType.PAYMENT, 0),
    new IconButtonModel({ "id": 134217979, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217967, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderType.SHIP, 0),
    new IconButtonModel({ "id": 134217992, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217966, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderType.RECEIPT, 0),
    new IconButtonModel({ "id": 134217974, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217965, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderType.EVALUATION, 0),
    new IconButtonModel({ "id": 134217990, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217964, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderType.SALE, 0)
];
const memberButton: IconButtonModel[] = [
    new IconButtonModel({ "id": 134217970, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217958, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217971, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217951, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217945, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217954, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217944, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217952, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" })
];
const activityButton: IconButtonModel[] = [
    new IconButtonModel({ "id": 134217978, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217961, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217972, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217953, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217976, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217969, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217977, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217959, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" })
];
class LiveDataModel {
    liveId: string = '';
    living: boolean = false;
    watchDesc: string = '';
    previewIcon: string = '';
    liverIcon: string = '';
    liverName: string = '';
    liverDesc: string = '';
}
const liveData: LiveDataModel[] = [
    {
        liveId: '1',
        living: true,
        watchDesc: '2.9万人观看',
        previewIcon: 'common/food.png',
        liverIcon: 'common/ic_person.png',
        liverName: '首席美食家',
        liverDesc: '带您品尝各地美食'
    },
    {
        liveId: '2',
        living: true,
        watchDesc: '2.9万人观看',
        previewIcon: 'common/scenery.png',
        liverIcon: 'common/ic_person.png',
        liverName: '大旅游家',
        liverDesc: '带您走遍天下奇景'
    },
    {
        liveId: '3',
        living: false,
        watchDesc: '0人观看',
        previewIcon: 'common/food.png',
        liverIcon: 'common/ic_person.png',
        liverName: '首席美食家',
        liverDesc: '带您品尝各地美食'
    },
    {
        liveId: '4',
        living: true,
        watchDesc: '2.9万人观看',
        previewIcon: 'common/scenery.png',
        liverIcon: 'common/ic_person.png',
        liverName: '大旅游家',
        liverDesc: '带您走遍天下奇景'
    },
    {
        liveId: '5',
        living: true,
        watchDesc: '2.9万人观看',
        previewIcon: 'common/food.png',
        liverIcon: 'common/ic_person.png',
        liverName: '首席美食家',
        liverDesc: '带您品尝各地美食'
    },
    {
        liveId: '6',
        living: true,
        watchDesc: '2.9万人观看',
        previewIcon: 'common/scenery.png',
        liverIcon: 'common/ic_person.png',
        liverName: '大旅游家',
        liverDesc: '带您走遍天下奇景'
    },
    {
        liveId: '7',
        living: true,
        watchDesc: '2.9万人观看',
        previewIcon: 'common/food.png',
        liverIcon: 'common/ic_person.png',
        liverName: '首席美食家',
        liverDesc: '带您品尝各地美食'
    },
    {
        liveId: '8',
        living: true,
        watchDesc: '2.9万人观看',
        previewIcon: 'common/scenery.png',
        liverIcon: 'common/ic_person.png',
        liverName: '大旅游家',
        liverDesc: '带您走遍天下奇景'
    }
];
export { orderButton, memberButton, activityButton, liveData, LiveDataModel };
