import Navbar from "./components/shared/Navbar";
import ToolBar from "./components/shared/ToolBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow grid grid-cols-12">
          <aside className="col-span-2 bg-gray-100 flex flex-col px-2">
            <ToolBar />
          </aside>
          <main className="col-start-3 col-span-full">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
