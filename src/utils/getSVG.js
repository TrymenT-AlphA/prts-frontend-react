/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * a util function simply use a range id to auto generate a SVG to show the
 * range nicely
 * the ranges are defined in object `range`
 *
 * @summary turn range id to a nice SVG
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 00:15:43 
 * Last modified  : 2022-12-27 00:17:02
 */

const getRange = (rangeId) => {
  if (rangeId === "") {
    return null;
  }
  var coordinates = [];
  var min_row = 0;
  var min_col = 0;
  var max_x = 0;
  var max_y = 0;
  for (var each of range[rangeId].grids) {
    min_row = Math.min(min_row, each.row);
    min_col = Math.min(min_col, each.col);
    if (each.row === 0 && each.col === 0) {
      coordinates.push([1, 1]);
    } else {
      coordinates.push([2 + each.col * 26, 2 + each.row * 26]);
    }
  }
  for (var [i, _] of coordinates.entries()) {
    coordinates[i][0] -= 26 * min_col;
    max_x = Math.max(max_x, coordinates[i][0]);
    coordinates[i][1] -= 26 * min_row;
    max_y = Math.max(max_y, coordinates[i][1]);
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        verticalAlign: "top",
        width: max_x + 24,
        height: max_y + 24,
      }}
    >
      <defs>
        <rect id="1" fill="#27a6f3" width="22" height="22"></rect>
        <rect
          id="2"
          fill="none"
          stroke="gray"
          stroke-width="2"
          width="20"
          height="20"
        ></rect>
      </defs>
      {coordinates.map((each) => {
        if (each[0] === 1 - 26 * min_col && each[1] === 1 - 26 * min_row) {
          return <use xlinkHref="#1" x={each[0]} y={each[1]}></use>;
        } else {
          return <use xlinkHref="#2" x={each[0]} y={each[1]}></use>;
        }
      })}
    </svg>
  );
};

const range = {
  "0-1": {
    id: "0-1",
    direction: 1,
    grids: [
      {
        row: 0,
        col: 0,
      },
    ],
  },
  "1-1": {
    id: "1-1",
    direction: 1,
    grids: [
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
    ],
  },
  "1-2": {
    id: "1-2",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 0,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: -1,
        col: 0,
      },
    ],
  },
  "1-3": {
    id: "1-3",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: -1,
        col: 1,
      },
    ],
  },
  "2-1": {
    id: "2-1",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 0,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -2,
        col: 0,
      },
    ],
  },
  "2-2": {
    id: "2-2",
    direction: 1,
    grids: [
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
    ],
  },
  "2-3": {
    id: "2-3",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
    ],
  },
  "2-4": {
    id: "2-4",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: 1,
      },
    ],
  },
  "2-5": {
    id: "2-5",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
    ],
  },
  "2-6": {
    id: "2-6",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 2,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -2,
        col: 2,
      },
    ],
  },
  "3-1": {
    id: "3-1",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
    ],
  },
  "3-2": {
    id: "3-2",
    direction: 1,
    grids: [
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
    ],
  },
  "3-3": {
    id: "3-3",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
    ],
  },
  "3-4": {
    id: "3-4",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 0,
      },
      {
        row: 2,
        col: 1,
      },
      {
        row: 2,
        col: 2,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -2,
        col: 0,
      },
      {
        row: -2,
        col: 1,
      },
      {
        row: -2,
        col: 2,
      },
    ],
  },
  "3-5": {
    id: "3-5",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 0,
      },
      {
        row: 2,
        col: 1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -2,
        col: 0,
      },
      {
        row: -2,
        col: 1,
      },
    ],
  },
  "3-6": {
    id: "3-6",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
    ],
  },
  "3-7": {
    id: "3-7",
    direction: 1,
    grids: [
      {
        row: 3,
        col: 0,
      },
      {
        row: 2,
        col: 0,
      },
      {
        row: 2,
        col: 1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -2,
        col: 0,
      },
      {
        row: -2,
        col: 1,
      },
      {
        row: -3,
        col: 0,
      },
    ],
  },
  "3-8": {
    id: "3-8",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
    ],
  },
  "3-9": {
    id: "3-9",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 0,
      },
      {
        row: 2,
        col: 1,
      },
      {
        row: 2,
        col: 2,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -2,
        col: 0,
      },
      {
        row: -2,
        col: 1,
      },
      {
        row: -2,
        col: 2,
      },
    ],
  },
  "3-10": {
    id: "3-10",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 1,
        col: 4,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -1,
        col: 4,
      },
    ],
  },
  "3-11": {
    id: "3-11",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 0,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -2,
        col: 0,
      },
    ],
  },
  "3-12": {
    id: "3-12",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
    ],
  },
  "3-13": {
    id: "3-13",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
    ],
  },
  "3-14": {
    id: "3-14",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
    ],
  },
  "3-15": {
    id: "3-15",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 0,
      },
      {
        row: 2,
        col: 1,
      },
      {
        row: 2,
        col: 2,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -2,
        col: 0,
      },
      {
        row: -2,
        col: 1,
      },
      {
        row: -2,
        col: 2,
      },
    ],
  },
  "3-16": {
    id: "3-16",
    direction: 1,
    grids: [
      {
        row: 0,
        col: 3,
      },
    ],
  },
  "3-17": {
    id: "3-17",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 1,
      },
      {
        row: 2,
        col: 2,
      },
      {
        row: 2,
        col: 3,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -2,
        col: 1,
      },
      {
        row: -2,
        col: 2,
      },
      {
        row: -2,
        col: 3,
      },
    ],
  },
  "3-18": {
    id: "3-18",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 0,
      },
      {
        row: 2,
        col: 1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -2,
        col: 0,
      },
      {
        row: -2,
        col: 1,
      },
    ],
  },
  "4-1": {
    id: "4-1",
    direction: 1,
    grids: [
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
    ],
  },
  "4-2": {
    id: "4-2",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
    ],
  },
  "4-3": {
    id: "4-3",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 2,
      },
      {
        row: 2,
        col: 3,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 1,
        col: 4,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -1,
        col: 4,
      },
      {
        row: -2,
        col: 2,
      },
      {
        row: -2,
        col: 3,
      },
    ],
  },
  "4-4": {
    id: "4-4",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 1,
        col: 4,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -1,
        col: 4,
      },
    ],
  },
  "4-5": {
    id: "4-5",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 3,
      },
      {
        row: 1,
        col: 4,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -1,
        col: 4,
      },
    ],
  },
  "4-6": {
    id: "4-6",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 3,
      },
      {
        row: 1,
        col: 4,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: 0,
        col: 5,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -1,
        col: 4,
      },
    ],
  },
  "4-7": {
    id: "4-7",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 3,
      },
      {
        row: 1,
        col: 4,
      },
      {
        row: 1,
        col: 5,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: 0,
        col: 5,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -1,
        col: 4,
      },
      {
        row: -1,
        col: 5,
      },
    ],
  },
  "5-1": {
    id: "5-1",
    direction: 1,
    grids: [
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: 0,
        col: 5,
      },
    ],
  },
  "5-2": {
    id: "5-2",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 1,
        col: 4,
      },
      {
        row: 1,
        col: 5,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: 0,
        col: 5,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -1,
        col: 4,
      },
      {
        row: -1,
        col: 5,
      },
    ],
  },
  "x-1": {
    id: "x-1",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 0,
      },
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 0,
        col: -2,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -2,
        col: 0,
      },
    ],
  },
  "x-2": {
    id: "x-2",
    direction: 1,
    grids: [
      {
        row: 2,
        col: -1,
      },
      {
        row: 2,
        col: 0,
      },
      {
        row: 2,
        col: 1,
      },
      {
        row: 1,
        col: -2,
      },
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: -2,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: -2,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -2,
        col: -1,
      },
      {
        row: -2,
        col: 0,
      },
      {
        row: -2,
        col: 1,
      },
    ],
  },
  "x-3": {
    id: "x-3",
    direction: 1,
    grids: [
      {
        row: 3,
        col: 0,
      },
      {
        row: 2,
        col: -1,
      },
      {
        row: 2,
        col: 0,
      },
      {
        row: 2,
        col: 1,
      },
      {
        row: 1,
        col: -2,
      },
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: -3,
      },
      {
        row: 0,
        col: -2,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: -2,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -2,
        col: -1,
      },
      {
        row: -2,
        col: 0,
      },
      {
        row: -2,
        col: 1,
      },
      {
        row: -3,
        col: 0,
      },
    ],
  },
  "x-4": {
    id: "x-4",
    direction: 1,
    grids: [
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
    ],
  },
  "x-5": {
    id: "x-5",
    direction: 1,
    grids: [
      {
        row: 1,
        col: 0,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: -1,
        col: 0,
      },
    ],
  },
  "x-6": {
    id: "x-6",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 0,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 0,
        col: -2,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -2,
        col: 0,
      },
    ],
  },
  "y-1": {
    id: "y-1",
    direction: 1,
    grids: [
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
    ],
  },
  "y-2": {
    id: "y-2",
    direction: 1,
    grids: [
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
    ],
  },
  "y-3": {
    id: "y-3",
    direction: 1,
    grids: [
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
    ],
  },
  "y-4": {
    id: "y-4",
    direction: 1,
    grids: [
      {
        row: 2,
        col: -1,
      },
      {
        row: 2,
        col: 0,
      },
      {
        row: 2,
        col: 1,
      },
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -2,
        col: -1,
      },
      {
        row: -2,
        col: 0,
      },
      {
        row: -2,
        col: 1,
      },
    ],
  },
  "y-5": {
    id: "y-5",
    direction: 1,
    grids: [
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: 0,
        col: 4,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
    ],
  },
  "y-6": {
    id: "y-6",
    direction: 1,
    grids: [
      {
        row: 2,
        col: 0,
      },
      {
        row: 2,
        col: 1,
      },
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -2,
        col: 0,
      },
      {
        row: -2,
        col: 1,
      },
    ],
  },
  "y-7": {
    id: "y-7",
    direction: 1,
    grids: [
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
    ],
  },
  "y-8": {
    id: "y-8",
    direction: 1,
    grids: [
      {
        row: 2,
        col: -1,
      },
      {
        row: 2,
        col: 0,
      },
      {
        row: 2,
        col: 1,
      },
      {
        row: 2,
        col: 2,
      },
      {
        row: 1,
        col: -1,
      },
      {
        row: 1,
        col: 0,
      },
      {
        row: 1,
        col: 1,
      },
      {
        row: 1,
        col: 2,
      },
      {
        row: 1,
        col: 3,
      },
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
      {
        row: 0,
        col: 1,
      },
      {
        row: 0,
        col: 2,
      },
      {
        row: 0,
        col: 3,
      },
      {
        row: -1,
        col: -1,
      },
      {
        row: -1,
        col: 0,
      },
      {
        row: -1,
        col: 1,
      },
      {
        row: -1,
        col: 2,
      },
      {
        row: -1,
        col: 3,
      },
      {
        row: -2,
        col: -1,
      },
      {
        row: -2,
        col: 0,
      },
      {
        row: -2,
        col: 1,
      },
      {
        row: -2,
        col: 2,
      },
    ],
  },
  "b-1": {
    id: "b-1",
    direction: 1,
    grids: [
      {
        row: 0,
        col: -1,
      },
      {
        row: 0,
        col: 0,
      },
    ],
  },
};

export default getRange;
