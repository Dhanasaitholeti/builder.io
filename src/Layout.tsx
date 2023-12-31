import Navbar from "./components/Navbar";
import ToolBar from "./components/ToolBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="grid">
          <ToolBar />
          <main className="">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
