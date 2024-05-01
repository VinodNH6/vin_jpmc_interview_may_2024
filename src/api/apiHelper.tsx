
import assetsJson from '../api-data/assets.json';
import { assetTypes, assetKeys } from '../components/constants';
import { assetProp } from '../components/types';


export const fetchData = (columnName: string) => {
    const data = assetsJson
    if(columnName === assetKeys.TICKER) {
        return getAssetDataByTicker(data)
    }
    if(columnName === assetKeys.PRICE) {
        return getAssetDataByPrice(data)
    }
    if(columnName === assetKeys.ASSET_CLASS) {
        return getAssetDataByAssetClass(data)
    }
    return assetsJson
}


export const getAssetDataByAssetClass = (data: assetProp[]) => {
    let sortedAssetData = []
    const commoditiesData = data.filter(assetObj => {
        return assetObj.assetClass === assetTypes.COMMODITIES
    })
    const equitiesData = data.filter(assetObj => {
        return assetObj.assetClass === assetTypes.EQUITIES
    })
    const creditData = data.filter(assetObj => {
        return assetObj.assetClass === assetTypes.CREDIT
    })
    sortedAssetData = [
        ...commoditiesData,
        ...equitiesData,
        ...creditData
    ]
    return sortedAssetData
}


export const getAssetDataByPrice = (data: assetProp[]) => {
    let sortedAssetData = []
    const newAssetsJson = JSON.parse(JSON.stringify(data))
    newAssetsJson.sort((a: assetProp, b: assetProp) => {
        return b.price - a.price
    })
    sortedAssetData = [
        ...newAssetsJson
    ]
    return sortedAssetData
}


export const getAssetDataByTicker = (data: assetProp[]) => {
    let sortedAssetData = []
    const newAssetsJson = JSON.parse(JSON.stringify(data))
    newAssetsJson.sort((a: assetProp, b: assetProp) => {
        let x = a.ticker.toLowerCase();
        let y = b.ticker.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    sortedAssetData = [
        ...newAssetsJson
    ]
    return sortedAssetData
}
