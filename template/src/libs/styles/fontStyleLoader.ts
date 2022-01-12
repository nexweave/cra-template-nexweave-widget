import { ITypography } from "../types";
import { getFontWeight } from "../utils";
import { percentageToNumber } from "@nexweave/utils";

// TODO: remove _ from _clientWidth whenever we plan to use this argument
export const fontStyleLoader = (typography: ITypography, clientHeight: number, _clientWidth: number): string => {    
    return `
        color: ${typography.color || '#4D148C'};
        font-size: ${percentageToNumber(typography.fontSize || 6, clientHeight)}px;
        text-align: ${typography.align || 'center'};
        font-weight: ${getFontWeight(typography.fontWeight)};
        font-family: ${typography.fontFamily || 'Roboto'};
        font-style: ${typography.fontStyle || 'normal'};
        text-decoration: ${typography.textDecoration || 'none'};
        letter-spacing: ${(typography.letterSpacing || 1)/100}em;
        line-height: normal;
    `
}