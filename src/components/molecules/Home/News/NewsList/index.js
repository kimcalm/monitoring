import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import React, { useState } from 'react';

function NewsList() {

    const [rowData, setRowData] = useState([
        { 기사제목: "당뇨복합제 불순물 ‘지뢰밭’…위탁품목까지 회수대상 ‘불안’", 출처: "메디소비자뉴스", 날짜: "2024-03-13", 링크: "https://www.medisobizanews.com/news/articleView.html?idxno=114466" },
        { 기사제목: "[단독]JW중외제약 '주사액' 무더기 공급 중단‥수액제도 다수", 출처: "뉴스맥", 날짜: "2024-03-13", 링크: "https://www.newsmac.co.kr/sub_read_amp.html?uid=6068" },
        { 기사제목: "의약품 품절문제 악화돼…어린이 시럽 62.4% 재고 바닥 추정", 출처: "약사공론", 날짜: "2024-03-13", 링크: "https://news.mt.co.kr/mtview.php?no=2024030715204471978" },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        {
            field: "기사제목",
            minWidth: 500,
            cellRenderer: (params) => {
                return <a href={params.data.링크} target="_blank">{params.value}</a>;
            }
        },
        { field: "출처", width: 150,},
        { field: "날짜", width: 150,}]);
    // { field: "dateObject", headerName: "날짜"}]);

    return (
        <>
            <div
                className="ag-theme-quartz" // applying the grid theme
                style={{ height: 500, width: 800, fontFamily: "miceRegular" }} // the grid will fill the size of the parent container
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

export default NewsList;