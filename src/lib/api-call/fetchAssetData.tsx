
import { Dispatch } from "react";
import { ActionInterface } from "../../components/asset-provider/types";
import { actionTypes } from "../../components/constants";
import { fetchData } from "../../api/apiHelper";

export const fetchAssetData = (url: string, columnName: string, dispatch: Dispatch<ActionInterface>) => {
    fetch(url)
    .then((res) => res.json())
    .then((json) => { })
    .catch(err => {
        const response = fetchData(columnName)
        dispatch({
            type: actionTypes.SET_DATA,
            payload: response
        })
    })
    .finally(() => {
        console.log('finally')
    })
}
