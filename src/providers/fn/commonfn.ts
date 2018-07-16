import { Injectable } from '@angular/core';

@Injectable()
export class Commonfn {

    constructor() { }

    /**
     * getunit  换算单位 补全单位
     */
    public getunit(number: number): string {
        let str: string; 
        if (number < 10000) {
            str = Math.floor(number * 100) / 100 + '';
        } else if (number < 100000000) {
            str = Math.floor(number / 10000 * 100) / 100 + '万';
        } else {
            str = Math.floor(number / 100000000 * 100) / 100 + '亿';
        }
        return str;
    }
    /**
     * getunit  换算单位 补全%
     */
    public getratio(number: number): string {
        let str: string;
        str = Math.floor(number * 100 * 100) / 100 + '%';
        console.log(str , number);
        return str;
    }
}
