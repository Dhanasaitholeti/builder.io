interface IContextMenu {}

const ContextMenu: React.FC<IContextMenu> = ({}) => {
  return (
    <>
      <div>
        <p>This is Context Menu</p>
        <ul>
          <li>edit conetnt</li>
          <li>styles</li>
          <li>del</li>
        </ul>
      </div>
    </>
  );
};

export default ContextMenu;
