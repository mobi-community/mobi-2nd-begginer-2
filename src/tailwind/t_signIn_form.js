import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";

const T_SignInForm = () => {
  return (
    <div className="">
      <h2 className="">Hello, friend</h2>
      <p>
        You can sign up quickly and easily <br /> or please use the form on the
        right
      </p>
      <div>
        <button>
          <img src={Facebook} />
        </button>
        <button>
          <img src={Instagram} />
        </button>
        <button>
          <img src={Twitter} />
        </button>
      </div>
    </div>
  );
};

export default T_SignInForm;
