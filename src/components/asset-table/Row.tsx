import React from 'react';

import { assetKeys, assetTypes } from "../constants"
import { assetProp } from "../types"
import Price from "./Price"

import './Row.css';

interface RowProps {
    columnName: string,
    item: assetProp
}

const getRowClassname = (assetObj: assetProp) => {
    const { assetClass } = assetObj
    if(assetClass === assetTypes.CREDIT) {
      return "rowCredit"
    } else if(assetClass === assetTypes.EQUITIES) {
      return "rowEquities"
    } else if(assetClass === assetTypes.COMMODITIES) {
      return "rowCommodities"
    }
    return "row"
}

const Row = ({ columnName, item }: RowProps) => {
    return (
        <div className={getRowClassname(item)}>
            {columnName === assetKeys.PRICE ? <Price value={item[columnName]} /> : <>{item[columnName]}</>}
        </div>
    )
}

export default Row
