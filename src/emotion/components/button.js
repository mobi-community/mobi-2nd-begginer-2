/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "styled-components";


const E_PopUpButton = ({variant, size, label, children, ...props}) => {
    /* sizeCSS */
    const sizeCSS = {
        submit: {
            width: "278px",
            height: "70px",
            borderRadius: "16px",
            fontSize: "28x",
            fontWeight: "300px"
        },
        purpleCircle: {
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            // & > img {
            //   width: 40px;
            //   height: 40px;
            // }
        },
        circle: {
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            // & > img {
            //   width: 24px;
            //   height: 24px;
            // }
        },
      };
      
    /* variantCSS  */
    const PurpleShadow = css`
        background: "#5252f7";
      box-shadow: "-5px -5px 10px #6565F4, 5px 5px 8px #2F2FC5";
      &:hover, 
      &:focus {
          box-shadow: "inset 5px 5px 10px #2F2FC5, inset -5px -5px 10px #6565F4";
      }
    `;
    const GrayShadow = css`
    box-shadow: "-5px -5px 10px #fff, 5px 5px 8px #babebc";
    &:hover,
    &:focus {
      box-shadow: "inset 5px 5px 10px #babebc, inset -5px -5px 10px #fff";
    }
    `;
    
    const variantCSS = {
        purple: {},
        gray: {}
    }

    console.log("color?", variant)

    

    return (
        <>
          <button css={{
            ...sizeCSS[size], 
            transition: "all 0.6s", 
            cursor: "pointer",
            ...[variantCSS] 
          }} variant={variant} >
            {children}
          </button>
          <label>{label}</label>
        </>
      );
}

export default E_PopUpButton;



