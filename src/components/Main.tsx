import React, { useContext, useEffect } from 'react';

import { AssetsContext } from './asset-provider/AssetContextProvider';
import AssetTable from './asset-table/AssetTable';
import { fetchData } from '../api/apiHelper';
import { actionTypes } from './constants';


const Main = () => {
  const { state, dispatch } = useContext(AssetsContext);

  useEffect(() => {
    const response = fetchData("")
    dispatch({
      type: actionTypes.SET_DATA,
      payload: response
    })
  }, [])

  const assetData = state.assetsData

  return (
    <AssetTable assetData={assetData} />
  );
}

export default Main;
