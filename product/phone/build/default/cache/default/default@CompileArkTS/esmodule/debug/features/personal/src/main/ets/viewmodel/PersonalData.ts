import { OrderType } from "@bundle:com.example.multishopping/phone@common/index";
import { IconButtonModel } from "@bundle:com.example.multishopping/phone@personal/ets/viewmodel/IconButtonModel";
const orderButton: IconButtonModel[] = [
    new IconButtonModel({ "id": 134217980, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217779, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderType.PAYMENT, 0),
    new IconButtonModel({ "id": 134217990, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217965, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderType.SHIP, 0),
    new IconButtonModel({ "id": 134217982, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217964, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderType.RECEIPT, 0),
    new IconButtonModel({ "id": 134217981, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217963, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderType.EVALUATION, 0),
    new IconButtonModel({ "id": 134217987, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217962, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, OrderType.SALE, 0)
];
const memberButton: IconButtonModel[] = [
    new IconButtonModel({ "id": 134217984, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217956, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217988, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217949, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217983, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217952, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217978, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217950, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" })
];
const activityButton: IconButtonModel[] = [
    new IconButtonModel({ "id": 134217986, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217959, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217979, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217951, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217991, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217967, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }),
    new IconButtonModel({ "id": 134217985, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }, { "id": 134217957, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" })
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
