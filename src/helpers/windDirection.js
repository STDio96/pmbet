import React from 'react'
import {
    ArrowUpLeft, ArrowUp, ArrowUpRight,
    ArrowLeft, ArrowRight,
    ArrowDownLeft, ArrowDown, ArrowDownRight,
    Circle
} from 'react-bootstrap-icons';

const DIRECTION_IMAGES = {
    'W': <ArrowLeft />,
    'NW': <ArrowUpLeft />,
    'N': <ArrowUp />,
    'NE': <ArrowUpRight />,
    'E': <ArrowRight />,
    'SE': <ArrowDownRight />,
    'S': <ArrowDown />,
    'SW': <ArrowDownLeft />,
}

const getDirectionImg = (direction) => {
    if (direction in DIRECTION_IMAGES) {
        return DIRECTION_IMAGES[direction];
    }
    return <Circle />
}

export default getDirectionImg;

/*

  NW     NE
      N
   W     E
      S
  SW     SE

*/