import NavbarUpper from "../../../molecules/Home/Navbar/Upper";
import NavbarDown from "../../../molecules/Home/Navbar/Down";

function Navbar() {
    return (
      <>
      <div>
        <div className="bg-slate-100 flex">
            <NavbarUpper />   
        </div>
        <NavbarDown />
      </div>
      </>
    );
  }

  export default Navbar;