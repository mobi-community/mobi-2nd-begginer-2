const TailwindInput = ({ size, ...inputProps }) => {
  let inputClasses = "border-none border-2 ";

  switch (size) {
    case "small":
      inputClasses += "w-64 h-8 rounded-md ";
      break;
    case "medium":
      inputClasses += "w-64 h-10 rounded-lg ";
      break;
    case "large":
      inputClasses += "w-72 h-12 rounded-xl ";
      break;
    default:
      break;
  }

  return <input className={`${inputClasses} bg-white px-4`} {...inputProps} />;
};

export default TailwindInput;
