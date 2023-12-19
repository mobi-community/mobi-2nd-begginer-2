import PropTypes from 'prop-types'

const T_Input = ({label, ...props}) => {
    return (
    <>
        <div class="w-[558px] flex justify-between items-center">
          <label class="font-light text-[24px] mr-[14px]">{label}</label>
          <input class="bg-grey-100 shadow-inner w-[414px] h-[48px] rounded-[14px] focus:outline-none pl-3" {...props} />
        </div>
    </>
    )
}
export default T_Input;

T_Input.propTypes = {
    label: PropTypes.string,
  };