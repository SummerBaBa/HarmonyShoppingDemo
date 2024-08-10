import { Logger } from "@bundle:com.example.multishopping/phone@common/ets/utils/Logger";
import { StyleConstants } from "@bundle:com.example.multishopping/phone@common/ets/constants/StyleConstants";
import type { Opt } from '../viewmodel/CommodityModel';
/**
 * Format date.
 *
 * @param timestamp time
 * @param format = "yyyy-mm-dd"
 * @returns res
 */
export function formatDate(timestamp: number, format = 'yyyy-mm-dd') {
    let res = "";
    try {
        const date = new Date(timestamp);
        const opt: Opt = {
            yy: date.getFullYear().toString(),
            mm: (date.getMonth() + 1).toString(),
            dd: date.getDate().toString(),
            HH: date.getHours().toString(),
            MM: date.getMinutes().toString(),
            SS: date.getSeconds().toString(),
        };
        const regKeys: string[] = ['y+', 'm+', 'd+', 'H+', 'M+', 'S+'];
        for (let i = 0; i < regKeys.length; i++) {
            const regKey = regKeys[i];
            const reg = new RegExp(regKey);
            let ret = reg.exec(format);
            if (ret) {
                switch (regKey) {
                    case 'y+':
                        format = format.replace(reg, ret.length === 1 ? opt.yy : opt.yy.padStart(ret.length, "0"));
                    case 'm+':
                        format = format.replace(reg, ret.length === 1 ? opt.mm : opt.mm.padStart(ret.length, "0"));
                    case 'd+':
                        format = format.replace(reg, ret.length === 1 ? opt.dd : opt.dd.padStart(ret.length, "0"));
                    case 'H+':
                        format = format.replace(reg, ret.length === 1 ? opt.HH : opt.HH.padStart(ret.length, "0"));
                    case 'M+':
                        format = format.replace(reg, ret.length === 1 ? opt.MM : opt.MM.padStart(ret.length, "0"));
                    case 'S+':
                        format = format.replace(reg, ret.length === 1 ? opt.SS : opt.SS.padStart(ret.length, "0"));
                }
            }
        }
        res = format;
    }
    catch (error) {
        Logger.error("ERROR formatDate" + error);
    }
    return res;
}
/**
 * Get id.
 *
 * @returns id
 */
export function getID() {
    const date = Date.now();
    const arr = `${date}`.split('');
    arr.sort(() => (Math.random() - StyleConstants.HALF_ONE) > 0 ? 1 : StyleConstants.MINUS_ONE);
    return arr.join('');
}
