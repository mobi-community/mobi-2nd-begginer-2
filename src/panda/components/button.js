import { css } from "../../styled-system/css/css.mjs";

const P_PopUpButton = ({ label, children }) => {
  return (
    <div>
      <button className={css({})}>{children}</button>
      <label>{label}</label>
    </div>
  );
};
export default P_PopUpButton;

P_PopUpButton.propTypes = {};
