import MuiAlert from "./components/muiAlert";
import MuiButton from "./components/muiButton";
import MuiMenuBar from "./components/muiMenuBar";

const MuiComponent = () => {
  const itemArr = ["메뉴1", "메뉴2", "메뉴3"];

  return (
    <>
      <MuiButton>DButton</MuiButton>
      <MuiAlert severity="error">DAlert</MuiAlert>
      <MuiMenuBar itemList={itemArr} />
    </>
  );
};

export default MuiComponent;
