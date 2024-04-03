import React, { useEffect } from 'react';
import WordCloud from "react-d3-cloud";

function NewsWordcloud() {
    const textDataInfo = [{ text: "불순물", value: 1000 },
    { text: "공급", value: 1000 },
    { text: "중단", value: 9000 },
    { text: "환절기", value: 5000 },
    { text: "백신", value: 10 },
    { text: "주의", value: 300 },
    { text: "금지", value: 100 }]

    return (
        <>
            <div className='w-[32rem]' >
                <WordCloud
                    data={textDataInfo}
                    // onWordClick={props.wordClickHandler}
                    font="miceRegular"
                    fontSize={(word) => Math.log2(word.value) * 10}
                    spiral="archimedean"
                    // width={1000}
                    // height={1000}
                    rotate={() => 0}
                    random={() => 0}
                    padding={5}
                />
            </div>
        </>
    );
}

export default NewsWordcloud;