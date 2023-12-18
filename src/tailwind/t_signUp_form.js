import Male from "../assets/male.png";
import FeMale from "../assets/female.png";

const T_SignUpForm = () => {
  return (
    <div className="">
      <h2 class="text-3xl text-purple-500">Create Account</h2>
      <form>
        <div>
          <label>Name</label>
          <input />
        </div>
        <div>
          <label>E-mail</label>
          <input />
        </div>
        <div>
          <label>password</label>
          <input />
        </div>
        <div>
          <label>birthday</label>
          <select>
            <option>YYYY</option>
          </select>
          <select>
            <option>MM</option>
          </select>
          <select>
            <option>DD</option>
          </select>
        </div>
        <div>
          <label>gender</label>
          <button>
            <img src={Male} />
          </button>
          <button>
            <img src={FeMale} />
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ?
          </button>
        </div>
      </form>
    </div>
  );
};

export default T_SignUpForm;
