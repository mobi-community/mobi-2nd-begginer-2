/** @jsxImportSource @emotion/react */

const E_PopUpButton = ({ variant, size, label, children, ...rest }) => {
  /* sizeCSS */
  const sizeCSS = {
    submit: {
      width: "278px",
      height: "70px",
      borderRadius: "16px",
      fontSize: "28px",
      fontWeight: "300",
    },
    purpleCircle: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      "& > img": {
        width: "40px",
        height: "40px",
      },
    },
    circle: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      "& > img": {
        width: "24px",
        height: "24px",
      },
    },
  };

  /* variantCSS  */
  const variantCSS = {
    purple: {
      background: "#5252f7",
      boxShadow: "-5px -5px 10px #6565F4, 5px 5px 8px #2F2FC5",
      "&:focus, &:hover": {
        boxShadow: "inset 5px 5px 10px #2F2FC5, inset -5px -5px 10px #6565F4",
      },
    },
    gray: {
      boxShadow: "-5px -5px 10px #fff, 5px 5px 8px #babebc",
      "&:focus, &:hover": {
        boxShadow: "inset 5px 5px 10px #babebc, inset -5px -5px 10px #fff",
      },
    },
  };

  return (
    <>
      <button
        css={{
          ...sizeCSS[size],
          ...variantCSS[variant],
          transition: "all 0.6s",
          cursor: "pointer",
        }}
        {...rest}
      >
        {children}
      </button>
      <label>{label}</label>
    </>
  );
};

export default E_PopUpButton;
