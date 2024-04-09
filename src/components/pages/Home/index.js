import Navbar from "../../organism/Home/NavBar";
import News from "../../organism/Home/News";
import Pharms from "../../organism/Home/Pharms";

function Home() {
    return (
      <>
        <div>
          <Navbar/>
          <News/>
          <Pharms />
        </div>
      </>
    );
  }
  
  export default Home;