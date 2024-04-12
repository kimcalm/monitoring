import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import React, { useState } from 'react';

function InventoryList() {
    const [rowData, setRowData] = useState([
        { 제품코드: "한미_팔탄", 품목명: "에소메졸캡슐20밀리그램 30C", 현재고: 92044, 위험도: 1 },
        { 제품코드: "한미_팔탄", 품목명: "에소메졸캡슐20밀리그램 100C", 현재고: 20342, 위험도: 3 },
        { 제품코드: "한미_팔탄", 품목명: "에소메졸캡슐20밀리그램 300C", 현재고: 10299, 위험도: 2 },
        { 제품코드: "한미_팔탄", 품목명: "에소메졸캡슐20밀리그램 500C", 현재고: 30, 위험도: 4 }
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        {
            field: "제품코드",
            width: 100,
        },
        { field: "품목명", minWidth: 300, },
        { field: "현재고", width: 150, },
        { field: "위험도", width: 150, }
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