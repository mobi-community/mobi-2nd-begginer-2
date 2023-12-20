/** @jsxImportSource @emotion/react */

import E_Input from "./components/input";
import E_Select from "./components/select";
import {
  BIRTHDAY_DAY_LIST,
  BIRTHDAY_MONTH_LIST,
  BIRTHDAY_YEAR_LIST,
} from "../pages/datalist/birthday_list";
import Male from "../assets/male.png";
import FeMale from "../assets/female.png";
import E_PopUpButton from "./components/button";

const E_SignUpForm = () => {
  const half = {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#EBECF0",
  };

  const title = {
    fontSize: "50px",
    fontWeight: "700",
    color: "#5252f7",
  };

  const form = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "50px 0",
  };

  const oneRow = {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    /* label */
    "& > label": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },

    "& > div": {
      width: "394px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "16px 0",
    },
  };

  const secret = {
    fontSize: "25px",
    fontWeight: "400",
    color: "#fff",
  };
  return (
    <div css={{ ...half }}>
      <h2 css={{ ...title }}>Create Account</h2>
      <form css={{ ...form }}>
        <E_Input label={"Name"} />
        <E_Input label={"E-mail"} />
        <E_Input label={"Password"} />
        <div css={{ ...oneRow }}>
          <label>Birthday</label>
          <div>
            <E_Select>
              <option value="">YYYY</option>
              {BIRTHDAY_YEAR_LIST.map((year, index) => (
                <option key={index}>{year}</option>
              ))}
            </E_Select>
            <E_Select>
              <option value="">MM</option>
              {BIRTHDAY_MONTH_LIST.map((month, index) => (
                <option key={index}>{month}</option>
              ))}
            </E_Select>
            <E_Select>
              <option value="">DD</option>
              {BIRTHDAY_DAY_LIST.map((day, index) => (
                <option key={index}>{day}</option>
              ))}
            </E_Select>
          </div>
        </div>

        <div css={{ ...oneRow }}>
          <label>Gender</label>
          <div>
            <E_PopUpButton variant={"gray"} size={"circle"} label={"Male"}>
              <img src={Male} css={{ margin: "0 auto" }} />
            </E_PopUpButton>
            <E_PopUpButton variant={"gray"} size={"circle"} label={"Female"}>
              <img src={FeMale} css={{ margin: "0 auto" }} />
            </E_PopUpButton>
            <E_PopUpButton variant={"gray"} size={"circle"} label={"Secret"}>
              <p css={{ ...secret, textAlign: "center" }}>?</p>
            </E_PopUpButton>
          </div>
        </div>
        <E_PopUpButton
          size="submit"
          variant={"gray"}
          css={{ marginTop: "50px" }}
        >
          SIGN UP
        </E_PopUpButton>
      </form>
    </div>
  );
};
export default E_SignUpForm;
