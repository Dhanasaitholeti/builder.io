import { Link } from "react-router-dom";

const NotFoundScreen: React.FC = () => {
  return (
    <>
      <div className="h-[60vh] w-full flex flex-col items-center justify-center gap-10">
        <div className=" flex flex-col items-center justify-center gap-2">
          <h1 className="text-4xl text-red-600 font-bold">404 Not Found</h1>
          <p className="text-xl font-semibold">
            The page you are looking for doesn't exist
          </p>
        </div>

        <Link to={"/"} className="text-2xl font-semibold text-blue-500">
          home
        </Link>
      </div>
    </>
  );
};

export default NotFoundScreen;
