import { BaseConstants as Constants } from "@bundle:com.example.multishopping/phone@common/ets/constants/BaseConstants";
import { BreakpointType } from "@bundle:com.example.multishopping/phone@common/ets/utils/BreakpointType";
export class Adaptive {
    static AspectRatio1 = (currentBreakpoint: string): number => {
        return new BreakpointType(Constants.ASPECTRATIO_SM1, Constants.ASPECTRATIO_MD1, Constants.ASPECTRATIO_LG1).GetValue(currentBreakpoint);
    };
    static AspectRatio = (currentBreakpoint: string): number => {
        return new BreakpointType(Constants.ASPECTRATIO_SM, Constants.ASPECTRATIO_MD, Constants.ASPECTRATIO_LG).GetValue(currentBreakpoint);
    };
    static SplashImageWidth = (currentBreakpoint: string): string => {
        return new BreakpointType(Constants.SPLASH_IMAGE_WIDTH_SM, Constants.SPLASH_IMAGE_WIDTH_SM, Constants.SPLASH_IMAGE_WIDTH_LG).GetValue(currentBreakpoint);
    };
}
