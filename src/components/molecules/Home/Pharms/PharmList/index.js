import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import React, { useEffect, useState } from 'react';


// 판매처, 생산처, 주원료, 보험약가, 생산금액, 생산량, 단위, 영향성 품목 


// 숫자 3자리수 마다 콤마 찍기
const currencyFormatter = (params) => {
    return formatNumber(params.value);
};

const formatNumber = (number) => {
    return Math.floor(number).toLocaleString();
};

// 영향성 품목 대상 강조하기 (빨강색 & 볼드)
// const impactCellStyle = (params) => {
//     if (params.value === "O") {
//         return { color: 'red', fontFamily: 'miceBold' }; // Customize as needed
//     }
//     return null; // Default styling
// };





function PharmList(props) {
    // 영향성 품목 있으면, 빨간색 글씨크기 & 클락하면 alert 창 나오게하기, 부모 Component로 props!
    const ImpactCellRenderer = (params) => {
        const handleClick = () => {
            if (params.value === "O") {
                props.setData(true)
            }
        };

        return (
            <span onClick={handleClick} style={{ cursor: 'pointer', color: params.value === "O" ? 'red' : 'black', fontWeight: params.value === "O" ? 'bold' : 'normal' }}>
                {params.value}
            </span>
        );
    };

    const [rowData, setRowData] = useState([
        { 판매처: "동아에스티(주)", 생산처: "동아에스티(주)", 품목명: "바라클정0.5밀리그램(엔테카비르)", 주원료: "엔테카비르", 보험약가: 10, 생산금액: 1000000, 생산량: 1000, 단위: "T", 영향성품목: "O" },
        { 판매처: "동아에스티(주)", 생산처: "동아에스티(주)", 품목명: "리피논정40밀리그램(아토르바스타틴칼슘삼수화물)", 주원료: "아토르바스타틴칼슘삼수화물", 보험약가: 20, 생산금액: 1200000, 생산량: 1000, 단위: "T", 영향성품목: "O" },
        { 판매처: "(주)유한양행", 생산처: "대화제약(주)", 품목명: "디로팝24플라스타(디클로페낙디에틸암모늄)", 주원료: "디클로페낙디에틸암모늄", 보험약가: 15, 생산금액: 2000000, 생산량: 1000, 단위: "T", 영향성품목: "O" },
        { 판매처: "(주)유한양행", 생산처: "(주)유한양행", 품목명: "싱카스트세립4밀리그램(몬테루카스트나트륨)", 주원료: "몬테루카스트나트륨", 보험약가: 30, 생산금액: 1600000, 생산량: 1000, 단위: "T", 영향성품목: "X" },
        { 판매처: "(주)종근당", 생산처: "(주)종근당", 품목명: "가바렙정800밀리그람(가바펜틴)", 주원료: "가바펜틴", 보험약가: 40, 생산금액: 2400000, 생산량: 1000, 단위: "T", 영향성품목: "X" },
        { 판매처: "(주)종근당", 생산처: "(주)종근당", 품목명: "로수로드정20밀리그램(로수바스타틴칼슘)", 주원료: "로수바스타틴칼슘", 보험약가: 22, 생산금액: 900000, 생산량: 1000, 단위: "T", 영향성품목: "X" },
        { 판매처: "한미약품(주)", 생산처: "주식회사제뉴원사이언스", 품목명: "무조날쿨크림", 주원료: "테르비나핀염산염/리도카인/L-멘톨/글리시리진산이칼륨", 보험약가: 100, 생산금액: 800000, 생산량: 1000, 단위: "EA", 영향성품목: "X" },
        { 판매처: "한미약품(주)", 생산처: "한미약품(주)", 품목명: "아모잘탄엑스큐정 5/100/20/10밀리그램", 주원료: "로사르탄칼륨/에제티미브/암로디핀베실산염/로수바스타틴칼슘", 보험약가: 90, 생산금액: 1300000, 생산량: 1000, 단위: "T", 영향성품목: "O" }
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        {
            field: "판매처",
            width: 150,
        },
        { field: "생산처", width: 150, },
        { field: "품목명", minWidth: 400, },
        { field: "주원료", minWidth: 400, },
        { field: "보험약가", width: 150, valueFormatter: currencyFormatter },
        { field: "생산금액", width: 150, valueFormatter: currencyFormatter },
        { field: "생산량", width: 150, valueFormatter: currencyFormatter },
        { field: "단위", width: 150, },
        {
            field: "영향성품목", width: 150,
            // cellStyle: impactCellStyle,
            cellRenderer: ImpactCellRenderer
        }
    ]);


    return (
        <>
            <div
                className="ag-theme-quartz mt-5" // applying the grid theme
                style={{ height: 500, width: 1850, fontFamily: "miceRegular" }} // the grid will fill the size of the parent container
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

export default PharmList;