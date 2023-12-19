import T_SignInForm from "./t_signIn_form";
import T_SignUpForm from "./t_signUp_form";

// TailWind
const T_MainPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex w-[1424px] h-[898px] items-center justify-center shadow-container rounded-3xl">
        <div className="flex-auto w-full h-full bg-purple-500 text-white rounded-l-3xl">
          <T_SignInForm />
        </div>
        <div className="flex-auto w-full h-full rounded-r-3xl">
          <T_SignUpForm />
        </div>
      </div>
    </div>
  );
};
export default T_MainPage;
