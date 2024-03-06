import { CiGrid42 } from "react-icons/ci";
const Navbar: React.FC = () => {
  return (
    <>
      <nav className="static flex gap-2 bg-backgroundNavbar border-b border-b-backgroundNavbar border px-10 py-3">
        <CiGrid42 size={32} />
        <h1 className="text-2xl font-semibold">MiniMix</h1>
      </nav>
    </>
  );
};

export default Navbar;
