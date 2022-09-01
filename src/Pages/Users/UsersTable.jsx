import React, { useMemo } from "react";
import { Columns } from "./columns";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import HOC_USER from "./../../HOC/HOC_USER";
import UserHeader from "./UserHeader";

const Table = ({ value }) => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(()=>value,[value]);
  const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy);
  const {
    getTableProps,
    getTableBodyProps,
    getToggleHideAllColumnsProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <div className="">
      <div className="">
        <UserHeader filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table className="table table-hover mt-4 p-1">
        <thead {...getTableProps} className='bg-dark text-white'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps(getToggleHideAllColumnsProps))}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const UsersTable = HOC_USER(Table, "users");

export default UsersTable;
