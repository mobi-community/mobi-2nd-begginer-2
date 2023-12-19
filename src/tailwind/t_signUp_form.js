import Male from "../assets/male.png";
import FeMale from "../assets/female.png";
import { BIRTHDAY_DAY_LIST, BIRTHDAY_MONTH_LIST, BIRTHDAY_YEAR_LIST } from "../pages/datalist/birthday_list";
import T_Input from "./components/t_input";
import T_Button from "./components/t_button";
import T_Select from "./components/t_select";

const T_SignUpForm = () => {
  return (
    <div class="w-full flex flex-col items-center justify-center my-14">
      <h2 class="text-purple-500 flex justify-center font-bold text-5xl">Create Account</h2>
      {/* form */}
      <form class="w-full flex flex-col space-y-10 items-center mt-24 mb-20">
        <T_Input label={"Name"} />
        <T_Input label={"E-mail"} />
        <T_Input label={"Password"} />
        {/* birthday */}
        <div class="w-[558px] flex justify-between">
          <label class="font-light text-[24px] items-center">birthday</label>
          <div className="w-[414px] flex justify-between">
            <T_Select>
              <option >YYYY</option>
              {BIRTHDAY_YEAR_LIST.map((year, index) => (
                <option key={index}>{year}</option>
                ))}
            </T_Select>
            <T_Select>
              <option>MM</option>
              {BIRTHDAY_MONTH_LIST.map((month, index) => (
                <option key={index}>{month}</option>
                ))}
            </T_Select>
            <T_Select>
              <option>DD</option>
              {BIRTHDAY_DAY_LIST.map((day, index) => (
                <option key={index}>{day}</option>
                ))}
            </T_Select>
          </div>
        </div>
        {/* gender */}
        <div className="w-[558px] flex justify-between">
          <label class=" font-light text-[24px] items-center">gender</label>
        {/* button-box */}
          <div className="w-[414px] flex justify-around">
            <T_Button variant={'gray'} size={'smCircle'} type="button">
            <img className="h-6 w-6 mx-auto" src={Male} />
            </T_Button>
          <label class=" font-light text-[24px] flex items-center">Male</label>
          <T_Button variant={'gray'} size={'smCircle'} type="button">
            <img className="h-6 w-6 mx-auto" src={FeMale} />
          </T_Button>
          <label class=" font-light text-[24px] flex items-center">Female</label>
          <T_Button variant={'gray'} size={'smCircle'} type="button">
          <p className="text-white font-bold mx-auto text-[24px]">?</p>
          </T_Button>
          <label class="font-light text-[24px] flex items-center">Secret</label>
          </div>
        </div>
      </form>
        {/* signup-button */}
        <T_Button variant={'gray'} size={'Square'} font={'submit'}>
          SIGN UP          
        </T_Button>
    </div>
  );
};

export default T_SignUpForm;
