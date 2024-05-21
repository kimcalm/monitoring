import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import React, { useState, useEffect } from 'react';

function NewsList(props) {

    // console.log("NewsList Component : ", props.data)

    function getYyyyMmDdMmSsToString(date) {
        if (!(date instanceof Date)) {
            // Parse the date string if it's not a Date object
            date = new Date(date);
        }
    
        let dd = date.getDate();
        let mm = date.getMonth() + 1; // January is 0!
    
        let yyyy = date.getFullYear();
        if (dd < 10) { dd = '0' + dd; }
        if (mm < 10) { mm = '0' + mm; }
    
        return `${yyyy}-${mm}-${dd}`;
    }

    const [rowData, setRowData] = useState([]);
    
    useEffect(() => {
        const allnewsList = {};
        const firstnewsList = [];

        for (let key in props.data) {
            const formattedDate = getYyyyMmDdMmSsToString(key);
            if (!allnewsList[formattedDate]) {
                allnewsList[formattedDate] = [];
            }

            props.data[key].forEach(article => {
                const { title, newsCompany: company, siteURL: url } = article;
                const mainKeywords = article["mainKeywords"];
                
                const newData = { title, company, date: formattedDate, url, mainKeywords };
                const newData2 = { 기사제목: title, 출처: company, 날짜: formattedDate, 링크: url };
                
                allnewsList[formattedDate].push(newData);
                firstnewsList.push(newData2);
            });
        }
        setRowData(firstnewsList);
    }, [props.data]);

    useEffect(() => {
        
        const kewywordNews = [];
        let formattedDate1;
        
        if (props.word != null) {
            // console.log('클릭 워드클라우드 변경!!!')
            for (let key in props.data) {
                formattedDate1 = getYyyyMmDdMmSsToString(key)
                // console.log(formattedDate1)
                // console.log("props.dataprops.data", props.data)
                
                props.data[key].forEach(idx => {
                    if (idx["mainKeywords"].includes(props.word)) {
                        const newData3 = { 기사제목: idx["title"], 출처: idx["newsCompany"], 날짜: formattedDate1, 링크: idx["siteURL"] };
                        kewywordNews.push(newData3)
                    }
                })
            }
        }
        
        // console.log(kewywordNews)
        setRowData(kewywordNews)

    }, [props.word])

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        {
            field: "기사제목",
            headerName: "기사제목",
            minWidth: 500,
            cellRenderer: (params) => {
                return <a href={params.data.링크} target="_blank" rel="noopener noreferrer">{params.value}</a>;
            }
        },
        { field: "출처", headerName: "출처", width: 150 },
        { field: "날짜", headerName: "날짜", width: 150 },
    ]);

    return (
        <>
            <div
                className="ag-theme-quartz" // applying the grid theme
                style={{ height: 500, width: 800, fontFamily: "miceRegular" }} // the grid will fill the size of the parent container
            >
                {/* {props.word} */}
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
