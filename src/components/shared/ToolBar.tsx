import EditElement from "../EditElement";
import { Elements } from "../elements";

const edit = false;
const ToolBar: React.FC = () => {
  return (
    <>
      {edit ? (
        <>
          <h1>edit</h1>
          <EditElement />
        </>
      ) : (
        <>
          <h1 className="font-semibold text-textPrimary text-xl">Add:</h1>
          <>{Elements}</>
        </>
      )}
    </>
  );
};

export default ToolBar;
