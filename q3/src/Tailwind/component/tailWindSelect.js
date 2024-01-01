const TailwindSelect = ({ options, radius, size }) => {
  let selectClasses = "border-2 ";
  let sizeClasses = "";
  let radiusClasses = "";

  switch (size) {
    case "small":
      sizeClasses = "w-28 h-8 text-xs";
      break;
    case "large":
      sizeClasses = "w-36 h-12 text-lg";
      break;
    default:
      break;
  }

  switch (radius) {
    case "basis":
      radiusClasses = "rounded-md";
      break;
    case "round":
      radiusClasses = "rounded-lg";
      break;
    default:
      break;
  }

  return (
    <select
      className={`${selectClasses} ${sizeClasses} ${radiusClasses} bg-primary-light border-primary cursor-pointer`}
    >
      {options.map((el, index) => (
        <option key={index} value={el.value}>
          {el.label}
        </option>
      ))}
    </select>
  );
};

export default TailwindSelect;
