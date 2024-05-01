import React from 'react';

import './Icons.css';

{/* <p>Right arrow: <i class="arrow right"></i></p>
<p>Left arrow: <i class="arrow left"></i></p>
<p>Up arrow: <i class="arrow up"></i></p>
<p>Down arrow: <i class="arrow down"></i></p> */}


const LeftArrow = () => {
    return (
        <div>
            <i className="arrow left"></i>
        </div>
    )
}

const RightArrow = () => {
    return (
        <div>
            <i className="arrow right"></i>
        </div>
    )
}

const UpArrow = () => {
    return (
        <div>
            <i className="arrow up"></i>
        </div>
    )
}

const DownArrow = () => {
    return (
        <div>
            <i className="arrow down"></i>
        </div>
    )
}

interface IconsProps {
    type: string
}

const Icons = ({ type }: IconsProps) => {
    return (
        <>
            {type === 'left' && <LeftArrow />}
            {type === 'right' && <RightArrow />}
            {type === 'up' && <UpArrow />}
            {type === 'down' && <DownArrow />}
        </>
    )
}

export default Icons
