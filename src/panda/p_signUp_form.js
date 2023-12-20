import {
  BIRTHDAY_YEAR_LIST,
  BIRTHDAY_MONTH_LIST,
  BIRTHDAY_DAY_LIST,
} from "../pages/datalist/birthday_list";
import P_Input from "./components/input";
import P_Select from "./components/select";
import P_PopUpButton from "./components/button";
import Male from "../assets/male.png";
import FeMale from "../assets/female.png";

const P_SignUpForm = () => {
  return (
    <>
      <h2>Create Account</h2>
      <form>
        <P_Input label={"Name"} />
        <P_Input label={"E-mail"} />
        <P_Input label={"Password"} />
        <div>
          <label>birthday</label>
          <P_Select>
            <option>YYYY</option>
            {BIRTHDAY_YEAR_LIST.map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </P_Select>
          <P_Select>
            <option>MM</option>
            {BIRTHDAY_MONTH_LIST.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </P_Select>
          <P_Select>
            <option>DD</option>
            {BIRTHDAY_DAY_LIST.map((day, index) => (
              <option key={index}>{day}</option>
            ))}
          </P_Select>
        </div>
        <div>
          <label>Gender</label>
          <P_PopUpButton label={"Male"}>
            <img src={Male} />
          </P_PopUpButton>
          <P_PopUpButton label={"Female"}>
            <img src={FeMale} />
          </P_PopUpButton>
          <P_PopUpButton label={"Secret"}>
            <p>?</p>
          </P_PopUpButton>
        </div>
        <P_PopUpButton>SIGN-UP</P_PopUpButton>
      </form>
    </>
  );
};
export default P_SignUpForm;
