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

// 위험도 숫자 → 한글 변경 & 숫자에 따른 색상 변경
const stringFormatter = (params) => {
    switch (params.value) {
        case 0:
            return "초저위험"; // Very Low Risk
        case 1:
            return "저위험";   // Low Risk
        case 2:
            return "중위험";     // Medium Risk
        case 3:
            return "초고위험"; // High Risk
        default:
            return "정보 없음"; // No Information, handles unexpected values
    }
};


const riskLevelCellStyle = (params) => {
    switch (params.value) {
        case 0:
            return { color: 'blue' };   // Blue for very low risk
        case 1:
            return { color: 'green' };  // Green for low risk
        case 2:
            return { color: 'orange' }; // Orange for medium risk
        case 3:
            return { color: 'red' };    // Red for high risk
        default:
            return null;                // Default styling if needed
    }
};

function InventoryList() {
    const [rowData, setRowData] = useState([
        { 제품코드: "한미_팔탄", 품목명: "에소메졸캡슐20밀리그램 30C", 현재고: 92044, 위험도: 2 },
        { 제품코드: "한미_팔탄", 품목명: "에소메졸캡슐20밀리그램 100C", 현재고: 20342, 위험도: 1 },
        { 제품코드: "한미_팔탄", 품목명: "에소메졸캡슐20밀리그램 300C", 현재고: 10299, 위험도: 0 },
        { 제품코드: "한미_팔탄", 품목명: "에소메졸캡슐20밀리그램 500C", 현재고: 30, 위험도: 3 }
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        {
            field: "제품코드",
            width: 100,
        },
        { field: "품목명", minWidth: 300, },
        { field: "현재고", width: 150, valueFormatter: currencyFormatter },
        { field: "위험도", width: 150, valueFormatter: stringFormatter, cellStyle: riskLevelCellStyle}
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

export default InventoryList;