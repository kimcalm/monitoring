import React, { useState, useEffect } from 'react';
import WordCloud from "react-d3-cloud";

function NewsWordcloud(props) {
    const [keywords, setKeywords] = useState([]);

    useEffect(() => {
        const propsData = props.data;
        const objectKeywords = {};
        const setkeywords = new Set();

        Object.values(propsData).forEach(data => {
            Object.values(data).forEach(value => {
                value.mainKeywords.forEach(keyword => {
                    if (!setkeywords.has(keyword)) {
                        setkeywords.add(keyword);
                        objectKeywords[keyword] = 1;
                    } else {
                        objectKeywords[keyword] += 1;
                    }
                });
            });
        });

        const updatedKeywords = [];
        for (let key in objectKeywords) {
            updatedKeywords.push({ text: key, value: objectKeywords[key] });
        }

        setKeywords(updatedKeywords);
        // console.log("Updated Keywords: ", keywords); // Log to check the state
    }, [props.data]);

    return (
        <div className='w-[32rem]'>
            <WordCloud
                data={keywords}
                onWordClick={props.onWordClick}
                font="miceRegular"
                fontSize={(word) => Math.log2(word.value) * 100} // Adjusted to a more reasonable size factor
                // fontSize={50} // Adjusted to a more reasonable size factor
                spiral="archimedean"
                rotate={() => 0}
                random={() => 0}
                padding={5}
                transitionDuration= '1000'
            />
        </div>
    );
}

export default NewsWordcloud;
