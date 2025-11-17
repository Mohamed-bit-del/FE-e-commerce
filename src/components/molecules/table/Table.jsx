import React, { createContext } from 'react';

const TableContext = createContext(null);

function Table({ children, data }) {
  return (
    <TableContext.Provider value={data}>
      <table className="table-fixed w-full text-sm">{children}</table>
    </TableContext.Provider>
  );
}

export default Table;

Table.header = function TableHeader({ children }) {
  return (
    <thead className="text-xs text-white uppercase bg-gray-400">
      <tr>{children}</tr>
    </thead>
  );
};

Table.body = function TableBody({ children }) {
  return <tbody>{children}</tbody>;
};

Table.footer = function TableFooter({ children }) {
  return (
    <tfoot>
      <tr>{children}</tr>
    </tfoot>
  );
};
