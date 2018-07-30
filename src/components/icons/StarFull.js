import React from 'react';

export const StarFull = ({ size = 'large', fill = '#fecd01' }) => {
    const width = size === 'large' ? '28' : '12';
    const height = size === 'large' ? '28' : '12';
    return (
        <svg
            x="0px"
            y="0px"
            width={width}
            height={height}
            viewBox="0 0 306 306"
        >
            <g>
                <g id="star-rate">
                    <polygon
                        fill={fill}
                        stroke="#fecd01"
                        points="153,230.775 247.35,299.625 211.65,187.425 306,121.125 191.25,121.125 153,6.375 114.75,121.125 0,121.125     94.35,187.425 58.65,299.625   "
                    />
                </g>
            </g>
        </svg>
    );
};
