import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import React, { useState } from 'react';

function EffectList() {

    const [rowData, setRowData] = useState([
        { 생산처: "한미_팔탄", 품목명: "에소메졸캡슐20밀리그램", 제형: "장용캡슐", "전년도 판매금액": 1000000 },
        { 생산처: "한미_팔탄", 품목명: "에소메졸디알서방정캡슐20밀리그램", 제형: "서방캡슐", "전년도 판매금액": 2000000 },
        { 생산처: "한미_팔탄", 품목명: "란소졸캡슐15밀리그램", 제형: "장용캡슐", "전년도 판매금액": 30000000 },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        {
            field: "생산처",
            width: 100,
        },
        { field: "품목명", minWidth: 300, },
        { field: "제형", width: 150, },
        { field: "전년도 판매금액", width: 150, }
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

export default EffectList;