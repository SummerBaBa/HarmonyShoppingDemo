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
const searchSwiper: Resource[] = [
    { "id": 134217875, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217874, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217876, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217873, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
];
const classifyTitle: Resource[] = [
    { "id": 134217881, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217883, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217877, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217878, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217882, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217879, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217880, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
];
const swiperImage: Resource[] = [
    { "id": 134217936, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217937, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217938, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
    { "id": 134217939, "type": 20000, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
];
class ActivityTitleModel {
    title?: Resource;
    desc?: Resource;
}
const activityTitle: ActivityTitleModel[] = [
    {
        title: { "id": 134217867, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        desc: { "id": 134217868, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
    },
    {
        title: { "id": 134217871, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        desc: { "id": 134217872, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
    },
    {
        title: { "id": 134217869, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        desc: { "id": 134217870, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
    },
    {
        title: { "id": 134217865, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" },
        desc: { "id": 134217866, "type": 10003, params: [], "bundleName": "com.example.multishopping", "moduleName": "phone" }
    }
];
export { searchSwiper, classifyTitle, swiperImage, activityTitle, ActivityTitleModel };
