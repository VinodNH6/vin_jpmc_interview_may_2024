
import { Dispatch } from "react";
import { ActionInterface } from "../../components/asset-provider/types";
import { actionTypes } from "../../components/constants";
import { fetchData } from "../../api/apiHelper";

export const fetchAssetData = (url: string, columnName: string, dispatch: Dispatch<ActionInterface>, setLoading: (val: boolean) => void, setError: (val: boolean) => void) => {
    setLoading(true)
    setError(false)

    fetch(url)
    .then((res) => res.json())
    .then((json) => { 
        setLoading(false)
        setError(false)
    })
    .catch(err => {
        setLoading(false)
        setError(false)
        //mock response in case NO SERVER support.
        const response = fetchData(columnName)
        dispatch({
            type: actionTypes.SET_DATA,
            payload: response
        })
    })
    .finally(() => {
        // console.log('finally')
    })
}
