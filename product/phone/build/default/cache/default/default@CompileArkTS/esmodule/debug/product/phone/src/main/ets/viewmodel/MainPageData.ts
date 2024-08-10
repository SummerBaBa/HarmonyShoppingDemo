/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export class ButtonInfoModel {
    index: number = 0;
    img: Resource = { "id": 134217749, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" };
    selectImg: Resource = { "id": 134217748, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" };
    title: Resource = { "id": 134217733, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" };
}
const buttonInfo: ButtonInfoModel[] = [
    {
        index: 0,
        img: { "id": 134217749, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        selectImg: { "id": 134217748, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        title: { "id": 134217733, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
    },
    {
        index: 1,
        img: { "id": 134217753, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        selectImg: { "id": 134217752, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        title: { "id": 134217736, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
    },
    {
        index: 2,
        img: { "id": 134217747, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        selectImg: { "id": 134217746, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        title: { "id": 134217732, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
    },
    {
        index: 3,
        img: { "id": 134217751, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        selectImg: { "id": 134217750, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        title: { "id": 134217734, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
    }
];
export { buttonInfo };
