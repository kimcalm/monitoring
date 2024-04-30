import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import React, { useState } from 'react';

// 숫자 3자리수 마다 콤마 찍기
const currencyFormatter = (params) => {
    return formatNumber(params.value);
};

const formatNumber = (number) => {
    return Math.floor(number).toLocaleString();
};



function StockList() {

    const [rowData, setRowData] = useState([
        { 구분: "수량 (EA)", 판매계획: 92044, '판매실적 (전년도 동기간)': 92044, "판매실적 (직전 3개월)": 92044 },
        { 구분: "재고율 (%)", 판매계획: 20342, '판매실적 (전년도 동기간)': 20342, "판매실적 (직전 3개월)": 20342 },
    ]);

    const [colDefs, setColDefs] = useState([
        {
            field: "구분",
            width: 100,
        },
        { field: "판매계획", minWidth: 200, valueFormatter: currencyFormatter },
        { field: "판매실적 (전년도 동기간)", minWidth: 200, valueFormatter: currencyFormatter },
        { field: "판매실적 (직전 3개월)", minWidth: 200, valueFormatter: currencyFormatter }
    ]);

    return (
        <>
            <div
            className="ag-theme-quartz" // applying the grid theme
                style={{ height: 300, width: 800, fontFamily: "miceRegular" }} // the grid will fill the size of the parent container
                >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    suppressRowClickSelection={true}
                    pagination={true}
                    paginationPageSize={10}
                    paginationPageSizeSelector={[10, 25, 50]}
                />
            </div>
        </>
    );
}

export default StockList;