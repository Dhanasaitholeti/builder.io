import { CiGrid42 } from "react-icons/ci";
const Navbar: React.FC = () => {
  return (
    <>
      <nav className="static flex gap-2 bg-backgroundNavbar border-b border-b-backgroundNavbar border px-10 py-3 justify-around items-center">
        <div className="flex gap-2">
          <CiGrid42 size={32} />
          <h1 className="text-3xl font-semibold">MiniMix</h1>
        </div>
        <div className="flex gap-6 font-medium">
          <button>Login</button>
          <button>Signup</button>
          <button>Dashboard</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
