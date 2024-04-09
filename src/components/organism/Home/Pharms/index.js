import SearchPharm from "../../../molecules/Home/Pharms/Filter";
import PharmList from "../../../molecules/Home/Pharms/PharmList";

function Pharms() {
    return (
      <>
      <div>
        <p className="text-3xl">의약품 검색</p>
        <SearchPharm />
        <PharmList/>
      </div>
      </>
    );
  }

  export default Pharms;