function RiskToggle() {

    return (
        <>
            <div className="flex">
                <div>
                    <p className="text-xl mb-3">위험도 현황</p>
                    <p>기준별 90일 이내 품절 예상시, 위험도 + 1점</p>
                    <p>1. 판매계획 대비</p>
                    <p>2. 전년도 동기간 판매실적 대비</p>
                    <p>3. 최근 3개월 판매실적 대비</p>
                </div>

                <div className="ml-10">
                    <p className="text-xl mb-3">합계 점수</p>
                    <p>3점 : <span style={{ color: 'red' }}>고위험</span></p>
                    <p>2점 : <span style={{ color: 'orange' }}>중위험</span></p>
                    <p>1점 : <span style={{ color: 'green' }}>저위험</span></p>
                    <p>0점 : <span style={{ color: 'blue' }}>초저위험</span></p>

                </div>
            </div>
        </>
    );
}

export default RiskToggle;