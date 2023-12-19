import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import T_Button from "./components/t_button";

const T_SignInForm = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {/* text-box */}
      <div className="text-center">
      <h2 className="text-5xl font-bold mb-20">Hello, friend</h2>
      <p className="text-2xl my-24">
        You can sign up quickly and easily <br /> or please use the form on the
        right
      </p>
      </div>
      {/* button-box */}
      <div className="w-3/6 flex justify-around">
        <T_Button variant={'purple'} size={'lgCircle'} type="button">
          <img className="h-8 w-8 mx-auto"  src={Facebook} />
        </T_Button>
        <T_Button variant={'purple'} size={'lgCircle'} type="button">
          <img  className="h-8 w-8 mx-auto" src={Instagram} />
        </T_Button>
        <T_Button variant={'purple'} size={'lgCircle'} type="button">
        <img  className="h-8 w-8 mx-auto"src={Twitter} />
        </T_Button>
      </div>  
    </div>
  );
};

export default T_SignInForm;
