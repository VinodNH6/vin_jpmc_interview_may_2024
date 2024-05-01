import React from 'react';

import './Price.css';

interface PriceInterface {
    value: number | string
}

const Price = ({ value }: PriceInterface) => {
    const isPositive = (value as number) > 0
    const isNegative = (value as number) < 0
    return (
        <div className={isPositive ? 'positivePrice' : (isNegative ? 'negativePrice' : "" )}>
            {value}
        </div>
    )
}

export default Price