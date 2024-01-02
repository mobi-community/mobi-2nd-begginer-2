import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const MuiMenuBar = ({ itemList }) => {
  const [menuBar, setMenuBar] = useState(null);

  const onOpenMenu = (event) => {
    setMenuBar(event.currentTarget);
  };

  const onCloseMenu = () => {
    setMenuBar(null);
  };

  return (
    <div>
      <Button onClick={onOpenMenu}>메뉴 열기</Button>
      <Menu menuBar={menuBar} open={Boolean(menuBar)} onClose={onCloseMenu}>
        {itemList.map((item, index) => (
          <MenuItem key={index} onClick={onCloseMenu}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MuiMenuBar;
