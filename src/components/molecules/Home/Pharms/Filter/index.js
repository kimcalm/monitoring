import Select from 'react-select'
import makeAnimated from 'react-select/animated';

// 판매회사, 제조회사, 제형, 주성분, 제품명

function SearchPharm() {
    const animatedComponents = makeAnimated();

    // 강제 새로고침
    const handleRefresh = () => {
        window.location.reload(); // Navigate to a specific route
    };

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const sellCompany = [
        { value: '한미약품(주)', label: '한미약품(주)' },
        { value: '(주)종근당', label: '(주)종근당' },
        { value: '(주)유한양행', label: '(주)유한양행' },
        { value: '(주)대웅제약', label: '(주)대웅제약' },
        { value: '동아에스티(주)', label: '동아에스티(주)' }
    ]

    const makeCompany = [
        { value: '한미약품(주)', label: '한미약품(주)' },
        { value: '(주)종근당', label: '(주)종근당' },
        { value: '(주)유한양행', label: '(주)유한양행' },
        { value: '(주)대웅제약', label: '(주)대웅제약' },
        { value: '동아에스티(주)', label: '동아에스티(주)' }
    ]

    const pharmForm = [
        { value: '정제', label: '정제' },
        { value: '연질캡슐', label: '연질캡슐' },
        { value: '경질캡슐', label: '경질캡슐' },
        { value: '산제', label: '산제' },
        { value: '점안제', label: '점안제' },
        { value: '주사제', label: '주사제' }
    ]

    const pharmAPI = [
        { value: '메로페넴수화물', label: '메로페넴수화물' },
        { value: '아토르바스타틴칼슘삼수화물', label: '아토르바스타틴칼슘삼수화물' },
        { value: '아데포비어디피복실', label: '아데포비어디피복실' },
        { value: '파모티딘', label: '파모티딘' },
        { value: '클로피도그렐황산수소염', label: '클로피도그렐황산수소염' },
        { value: '로수바스타틴칼슘/에제티미브', label: '로수바스타틴칼슘/에제티미브' }
    ]

    const pharmName = [
        { value: '20000000', label: '리피논정80밀리그램(아토르바스타틴칼슘삼수화물)' },
        { value: '20000001', label: '투게논정10/16밀리그램' },
        { value: '20000002', label: '플라비톨정(클로피도그렐황산수소염)' },
        { value: '20000003', label: '듀오논정10/20밀리그램' },
        { value: '20000004', label: '암씨롱큐정' },
        { value: '20000005', label: '스카풀라정' }
    ]

    return (
        <>
            <div className='flex mt-5'>
                <div>
                    <p>판매회사</p>
                    <Select
                        options={sellCompany}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti />
                </div>
                <div>
                    <p>제조회사</p>
                    <Select
                        options={makeCompany}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti />
                </div>
                <div>
                    <p>제형</p>
                    <Select
                        options={pharmForm}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti />
                </div>
                <div>
                    <p>주성분</p>
                    <Select
                        options={pharmAPI}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti />
                </div>
                <div>
                    <p>제품명</p>
                    <Select
                        options={pharmName}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti />
                </div>
                <button className="rounded hover:rounded-lg bg-blue-300 mr-3 pl-4 pr-4 text-xl miceBold"
                    onClick={
                        handleRefresh}>조회</button>

            </div>
        </>
    );
}

export default SearchPharm;