/** @jsxImportSource @emotion/react */

import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import E_PopUpButton from "./components/button";

const E_SignInForm = () => {
  const half = {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#5252f7",
    color: "#fff",
  };

  const title = {
    fontSize: "50px",
    fontWeight: "700",
  };

  const iconContainer = {
    width: "50%",
    display: "flex",
    justifyContent: "space-evenly",

    "& > button": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  const body = {
    fontSize: "25px",
    fontWeight: "400",
    padding: "16% 0%",
  };
  return (
    <div css={{ ...half }}>
      <h2 css={{ ...title }}>Hello, friend</h2>
      <div css={{ ...body }}>
        You can sign up quickly and easily <br /> or please use the form on the
        right
      </div>
      <div css={{ ...iconContainer }}>
        <E_PopUpButton size="purpleCircle" variant={"purple"}>
          <img src={Facebook} />
        </E_PopUpButton>
        <E_PopUpButton size="purpleCircle" variant={"purple"}>
          <img src={Instagram} />
        </E_PopUpButton>
        <E_PopUpButton size="purpleCircle" variant={"purple"}>
          <img src={Twitter} />
        </E_PopUpButton>
      </div>
    </div>
  );
};
export default E_SignInForm;
