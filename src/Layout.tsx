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
        <div>
          <ToolBar />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
