import React from 'react';

import Icons from "../icons/Icons"

import './Column.css';
import { assetKeys } from '../constants';

interface ColumnProps {
    columnName: string,
    selectedColumn: string,
    handleColumnSorting: (columnName: string) => void
}

const Column = ({ columnName, selectedColumn, handleColumnSorting }: ColumnProps) => {
    return (
        <div className='column'>
            <div> {columnName} </div>
            <div> 
                <button className='roundButton' onClick={() => handleColumnSorting(columnName)}>
                    {selectedColumn === columnName
                        ? 
                        selectedColumn === assetKeys.PRICE ? <Icons type="down" /> : <Icons type="up" />
                        : "-" }
                </button>
            </div>
        </div>
    )
}

export default Column
