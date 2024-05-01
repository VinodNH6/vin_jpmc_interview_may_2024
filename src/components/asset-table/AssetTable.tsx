import React, { useContext, useState } from 'react';

import { assetProp } from '../types';
import { AssetsContext } from '../asset-provider/AssetContextProvider';
import { ActionInterface } from '../asset-provider/types';
import { fetchAssetData } from '../../lib/api-call/fetchAssetData';
import Column from './Column';
import Row from './Row';

import './AssetTable.css';

interface AssetTableProps {
  assetData: assetProp[]
}

const handleSorting = (columnName: string, dispatch: React.Dispatch<ActionInterface>) => {
  fetchAssetData("url", columnName, dispatch)
}


const AssetTable = ({ assetData }: AssetTableProps) => {
  const { dispatch } = useContext(AssetsContext);
  const [ selectedColumn, setSelectedColumn ] = useState("");

  const handleColumnSorting = (columnName: string) => {
    handleSorting(columnName, dispatch)
    setSelectedColumn(columnName)
  }

  if(Array.isArray(assetData) && assetData.length > 0) {
    const columnNames: string[] = Object.keys(assetData[0])

    return (
      <div className='assetTable'>
        <div className='thClass'>
          {columnNames.map(columnName => {
            return (
              <Column 
                columnName={columnName}
                selectedColumn={selectedColumn}
                handleColumnSorting={handleColumnSorting}
              />
            )
          })}
        </div>
        <>
          {assetData.map((item: assetProp) => {
            return (
              <div className='trClass'>
                {columnNames.map((columnName: string) => {
                  return (
                    <Row
                      columnName={columnName}
                      item={item}
                    />
                  )
                })}
          
              </div>
            )
          })}
        </>
      </div>
    )
  } else {
    return null
  }
}

export default AssetTable;
