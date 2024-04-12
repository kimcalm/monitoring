import SearchPharm from "../../../molecules/Home/Pharms/Filter";
import PharmList from "../../../molecules/Home/Pharms/PharmList";
import EffectList from "../../../molecules/Home/Pharms/ModalList";

import React, { useState } from 'react';

function Pharms() {
  const [data, setData] = useState(false);

    return (
      <>
      <div>
        <p className="text-3xl">의약품 검색</p>
        <SearchPharm />
        <PharmList setData={setData}/>
        <EffectList data={data} setData={setData}/>
        <p>{data}</p>
      </div>
      </>
    );
  }

  export default Pharms;