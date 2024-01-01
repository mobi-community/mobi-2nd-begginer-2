const TailwindModal = ({ size, radius, children }) => {
  let modalClasses = "text-center border-2 ";
  let sizeClasses = "";
  let radiusClasses = "";

  // 사이즈가 왜 안바뀌지..
  switch (size) {
    case "small":
      sizeClasses = "w-370 h-200";
      break;
    case "medium":
      sizeClasses = "w-430 h-260";
      break;
    case "large":
      sizeClasses = "w-645 h-800";
      break;
    default:
      break;
  }

  switch (radius) {
    case "basis":
      radiusClasses = "rounded-lg";
      break;
    case "round":
      radiusClasses = "rounded-xl";
      break;
    default:
      break;
  }

  return (
    <div
      className={`${modalClasses} ${sizeClasses} ${radiusClasses} border-primary`}
    >
      {children}
    </div>
  );
};

export default TailwindModal;
