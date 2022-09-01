import React, { useMemo } from "react";
import { Columns } from "./columns";
import UserHeader from "./UserHeader";
import MOCK_DATA from "./USER_DATA.json";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

const UserTable = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    getToggleHideAllColumnsProps,
    headerGroups,
    state,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  return (
    <div className="mt-2">
      <div className="">
        <UserHeader filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table className="table table-hover mt-2 p-1">
        <thead {...getTableProps} className="bg-dark text-white">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(
                    column.getSortByToggleProps(getToggleHideAllColumnsProps)
                  )}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {page.map((row) => {
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
      </table>
      <div className="mb-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className="me-3">
            <button
              className={`${!canPreviousPage ? "btn" : "btn btn-success"}`}
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>
          </div>
          <div className="">
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
          </div>

          <div className="ms-3">
            <button
              className={`${!canNextPage ? "btn" : "btn btn-success"}`}
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
