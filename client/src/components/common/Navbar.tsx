import { CiGrid42 } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <>
      <nav className="static flex gap-2 bg-backgroundNavbar border-b border-b-backgroundNavbar border px-10 py-4 justify-around items-center">
        <div className="flex gap-2">
          <CiGrid42 size={36} />
          <h1 className="text-3xl font-semibold">
            <Link to={"/"}>Builder.io</Link>
          </h1>
        </div>
        <div className="flex gap-6 font-medium">
          <Link to={"/login"}>
            <button className="bg-CTAPrimary py-1 px-5 text-white font-semibold text-lg border border-CTAPrimary">
              login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="border border-CTAPrimary py-1 px-5 font-semibold text-lg text-CTAPrimary">
              Signup
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
