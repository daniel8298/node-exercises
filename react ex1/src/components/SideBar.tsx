interface SideBarProps {
  onPrintAll: () => void;
  onPrintFirst: () => void;
}

const SideBar = ({ onPrintAll, onPrintFirst }: SideBarProps) => {
  return (
    <div>
      <button onClick={onPrintAll}>הדפס את כל הספרים </button>
      <button onClick={onPrintFirst}>הדפס את הספר הראשון</button>
    </div>
  );
};

export default SideBar;
