import React from 'react';
import TableHeadItem from './inludes/TableHeadItem';
import TableRow from './inludes/TableRow';

const TableComponent = ({ theadData, tbodyData, caption }) => {
    
    return (
        <table className="table table-bordered  table-sm table-hover mb-1" id="showUsers" >
            <caption className="caption caption-sm">{ caption }</caption>
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