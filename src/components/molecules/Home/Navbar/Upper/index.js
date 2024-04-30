import { ReactComponent as HanmiLogo } from "../../../../../assets/HanmiLogo.svg"

function NavbarUpper() {
  const handleRefresh = () => {
    window.location.reload(); // Navigate to a specific route
  };

  return (
    <>
      <div className="bg-slate-100 flex">
        <button onClick={handleRefresh}>
          <HanmiLogo />
        </button>
        <p>힘차게 도약하는 한미, 함께 하는 미래</p>
      </div>
    </>
  );
}

export default NavbarUpper;