import React from 'react';
import TableHeadItem from './inludes/TableHeadItem';
import TableRow from './inludes/TableRow';

const TableComponent = ({ theadData, tbodyData }) => {
    return (
        <table className="table table-bordered  table-sm table-hover" >
            <caption className="caption caption-sm">List of households</caption>
            <thead className="thead-dark">
                <tr>
                    { theadData.map((h) => {
                        return <TableHeadItem key={ h } item={ h } />;
                    }) }
                </tr>
            </thead>
            <tbody>
                { tbodyData.map((item) => {
                    return <TableRow key={ item.id } data={item.items} />
                }) }
            </tbody>
        </table>
    )
}

export default TableComponent;