/** @jsxImportSource @emotion/react */

const E_Input = ({ label, ...props }) => {
  const justifyCenter = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  };
  const StandardInput = {
    width: "394px",
    height: "48px",
    borderRadius: "14px",
    border: "none",
    outline: "none",
    justifyContent: "flex-end",
    padding: "0 10px",
    margin: "18px 0",
  };
  const PopDownGray = {
    backgroundColor: "#EBECF0",
    boxShadow: "inset 5px 5px 10px #babebc, inset -5px -5px 10px #fff",
  };
  const flexLabel = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  return (
    <div
      css={{
        width: "70%",
        ...justifyCenter,
      }}
    >
      <label css={{ ...flexLabel }}>{label}</label>
      <input css={{ ...StandardInput, ...PopDownGray }} {...props} />
    </div>
  );
};
export default E_Input;
