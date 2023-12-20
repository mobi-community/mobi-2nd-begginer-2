/** @jsxImportSource @emotion/react */

const E_Select = ({ children, ...rest }) => {
  return (
    <select
      css={{
        width: "100px",
        border: "none",
        outline: "none",
        padding: "0 10px",
        borderRadius: "4px",
        backgroundColor: "#EBECF0",
        height: "38px",
        boxShadow: "-5px -5px 10px #fff, 5px 5px 8px #babebc",
        "&:hover": {
          boxShadow: "inset 5px 5px 10px #babebc, inset -5px -5px 10px #fff",
        },
      }}
      {...rest}
    >
      {children}
    </select>
  );
};

export default E_Select;
