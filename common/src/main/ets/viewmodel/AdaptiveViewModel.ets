/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BaseConstants as Constants } from '../constants/BaseConstants';
import { BreakpointType } from '../utils/BreakpointType';

export class Adaptive {
  static AspectRatio1 = (currentBreakpoint: string): number => {
    return new BreakpointType(
      Constants.ASPECTRATIO_SM1,
      Constants.ASPECTRATIO_MD1,
      Constants.ASPECTRATIO_LG1
    ).GetValue(currentBreakpoint);
  }
  static AspectRatio = (currentBreakpoint: string): number => {
    return new BreakpointType(
      Constants.ASPECTRATIO_SM,
      Constants.ASPECTRATIO_MD,
      Constants.ASPECTRATIO_LG
    ).GetValue(currentBreakpoint);
  }
  static SplashImageWidth = (currentBreakpoint: string): string => {
    return new BreakpointType(
      Constants.SPLASH_IMAGE_WIDTH_SM,
      Constants.SPLASH_IMAGE_WIDTH_SM,
      Constants.SPLASH_IMAGE_WIDTH_LG
    ).GetValue(currentBreakpoint);
  }
}