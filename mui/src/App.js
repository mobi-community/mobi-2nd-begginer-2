import "./App.css";
import BasicModal from "./mui/Modal";
import BasicSelect from "./mui/Select";
import MuiSpeedDial from "./mui/SpeedDial";
import { ChakraProvider } from "react";

function App() {
  return (
    <div>
      <BasicModal />
      <BasicSelect />
      <MuiSpeedDial />
    </div>
  );
}

export default App;
