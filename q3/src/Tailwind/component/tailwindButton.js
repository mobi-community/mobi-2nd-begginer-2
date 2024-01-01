const TailwindButton = ({ children, variant, size, radius, ...rest }) => {
  let buttonClasses = "border-none ";

  switch (variant) {
    case "primary":
      buttonClasses += "bg-blue-500 text-white ";
      break;
    case "textBtn":
      buttonClasses += "bg-transparent text-black ";
      break;
    default:
      break;
  }

  switch (size) {
    case "smallCircle":
      buttonClasses += "w-36 h-36 ";
      break;
    case "largeCircle":
      buttonClasses += "w-50 h-50 ";
      break;
    case "small":
      buttonClasses += "w-68 h-24 ";
      break;
    case "large":
      buttonClasses += "w-108 h-48 ";
      break;
    default:
      break;
  }

  switch (radius) {
    case "basis":
      buttonClasses += "rounded-sm ";
      break;
    case "circle":
      buttonClasses += "rounded-full ";
      break;
    default:
      break;
  }

  return (
    <button className={`${buttonClasses} hover:bg-blue-700`} {...rest}>
      {children}
    </button>
  );
};

export default TailwindButton;
