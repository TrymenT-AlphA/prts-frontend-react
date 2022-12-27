/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * a table to display data, only take one arg data, the first
 * will be considered as header
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-27 11:03:42
 * Last modified  : 2022-12-27 19:50:03
 */

function DataTable(props) {
  const head = props.head;
  const data = props.data;
  const filters = props.filters;
  const search = props.search;

  return (
    <div className="mdui-table-fluid">
      <table className="mdui-table mdui-table-hoverable">
        {/* table header */}
        <thead>
          <tr>
            {head.map((cell, cellKey) => {
              return <th key={cellKey}>{cell}</th>;
            })}
          </tr>
        </thead>
        {/* table body */}
        <tbody>
          {/* rows */}
          {data.map((row, rowKey) => {
            return (
              <tr
                className={
                  filters.every((filter, col) => {
                    if (filter === null) {
                      return true;
                    }
                    return filter[row[col].value];
                  }) &&
                  row.some((cell) => {
                    if (search === null) {
                      return true;
                    }
                    if (cell.value.toString().includes(search)) {
                      return true;
                    }
                    return false;
                  })
                    ? ""
                    : "mdui-hidden"
                }
                key={rowKey}
              >
                {/* cells */}
                {row.map((cell, cellKey) => {
                  return (
                    <td className="mdui-typo" key={cellKey}>
                      {cell.element}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
