import {styled,  css  } from "styled-components";
import { flexCenter } from "../styles/common.style";

const SSInput = ({label, size, ...inputProps}) => {
    return <InputBox size={size}>
        <label>{label}</label>
        <input  {...inputProps} ></input>
    </InputBox>
}

export default SSInput

const InputBox = styled.div`
    border: none;
    margin: 0px;
    outline: none;
    ${({size})=>sizeCSS[size]}
    ${flexCenter}

    & input{
        width: 100%;
        height: 100%;
        border: 1px solid black;
    }

    & label{
        font-size: ${({theme}) => theme.FONT_SIZE.medium};
        width: 50px;
        height: 100%;
    }
`;

const sizeCSS = {
    small: css`
        width: 200px;
        height: 20px;
        `,
    medium: css`
        width: 400px;
        height: 40px;
        `,
    large: css`
        width: 600px;
        height:60px;
        `,      
}

// label {
    //     padding-left: 12px;
    //     color: ${({ theme }) => theme.COLORS["black"]};
    //     font-size: ${({ theme }) => theme.FONT_SIZE["small"]};
    //   }

// const Input = styled.input`
//   padding-left: 16px;
//   margin: 4px 0 4px;
//   ${flexCenter};
//   ${({ size }) => sizeCSS[size]}
// `;

// const InputBox = styled.div`
//   border: none;
//   margin: 0px;
//   outline: none;
//   color: ${({ theme }) => theme.COLORS.gray[400]};
//   padding-bottom: 30px;

//   & > label {
//     padding-left: 12px;
//     color: ${({ theme }) => theme.COLORS["black"]};
//     font-size: ${({ theme }) => theme.FONT_SIZE["small"]};
//   }
//   @media ${({ theme }) => theme.DEVICE.tablet} {
//     padding-bottom: 0px;
//   }
// `;

// import { styled, css } from "styled-components";
// import { flexCenter } from "../styles/common.style";

// const MMMInput = ({
//   label,
//   error,
//   access,
//   size,
//   isAvailableEmail,
//   isAvailableNickName,
//   ...inputProps
// }) => {
//   return (
//     <InputBox>
//       <label>{label}</label>
//       <Input {...inputProps} size={size} />
//       {isAvailableEmail || isAvailableNickName ? (
//         <DuplicateChecked>
//           {isAvailableEmail && <p>사용 가능한 이메일입니다</p>}
//           {isAvailableNickName && <p>사용 가능한 닉네임입니다</p>}
//         </DuplicateChecked>
//       ) : (
//         <>
//           <Message>{error && <p>{error}</p>}</Message>
//           <Message>{access && <p>{access}</p>}</Message>
//         </>
//       )}
//     </InputBox>
//   );
// };
// export default MMMInput;

// const sizeCSS = {
//   search: css`
//     width: 280px;
//     height: 40px;
//     border-radius: 62px;
//     border: 1px solid ${({ theme }) => theme.COLORS.gray[400]};
//     background-color: ${({ theme }) => theme.COLORS.gray[100]};
//   `,
//   large: css`
//     min-width: 585px;
//     min-height: 48px;
//     border-radius: 6px;
//     border: 1px solid ${({ theme }) => theme.COLORS.gray[400]};
//   `,
//   larger: css`
//     max-width: 740px;
//     max-height: 48px;
//     border-radius: 6px;
//     border: 1px solid ${({ theme }) => theme.COLORS.gray[400]};
//   `,
//   searchPrice: css`
//     width: 450px;
//     height: 45px;
//     border-radius: 50px;
//     border: 1px solid ${({ theme }) => theme.COLORS.gray[400]};

//     @media ${({ theme }) => theme.DEVICE.mobile} {
//       width: 300px;
//       height: 38px;
//     }

//     @media ${({ theme }) => theme.DEVICE.tablet} {
//       width: 400px;
//       height: 45px;
//     }
//   `,
//   searchPriceFocus: css`
//     width: 450px;
//     height: 56px;
//     border-top-right-radius: 25px;
//     border-top-left-radius: 25px;
//     outline: none;
//     border: 1px solid ${({ theme }) => theme.COLORS.gray[400]};

//     @media ${({ theme }) => theme.DEVICE.mobile} {
//       width: 300px;
//       height: 40px;
//       /* padding-bottom: 30px; */
//     }

//     @media ${({ theme }) => theme.DEVICE.tablet} {
//       width: 400px;
//       height: 56px;
//       /* padding-bottom: 30px; */
//     }
//   `,
//   smallEditInfo: css`
//     min-width: 640px;
//     min-height: 48px;
//     border: none;
//     outline: none;
//     border-bottom: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
//   `,
//   editInfo: css`
//     min-width: 780px;
//     min-height: 48px;
//     border: none;
//     outline: none;
//     border-bottom: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
//   `,
//   full: css`
//     min-width: 918px;
//     min-height: 48px;
//     border-radius: 6px;
//     border: 1px solid ${({ theme }) => theme.COLORS.gray[400]};
//   `,
//   registerProduct: css`
//     max-width: 954px;
//     max-height: 48px;
//     border-radius: 6px;
//     border: 1px solid ${({ theme }) => theme.COLORS.gray[400]};
//   `,
// };

// const InputBox = styled.div`
//   border: none;
//   margin: 0px;
//   outline: none;
//   color: ${({ theme }) => theme.COLORS.gray[400]};
//   padding-bottom: 30px;

//   & > label {
//     padding-left: 12px;
//     color: ${({ theme }) => theme.COLORS["black"]};
//     font-size: ${({ theme }) => theme.FONT_SIZE["small"]};
//   }
//   @media ${({ theme }) => theme.DEVICE.tablet} {
//     padding-bottom: 0px;
//   }
// `;

// const Input = styled.input`
//   padding-left: 16px;
//   margin: 4px 0 4px;
//   ${flexCenter};
//   ${({ size }) => sizeCSS[size]}
// `;

// const Message = styled.p`
//   margin-left: 16px;
//   font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
//   font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
//   &:nth-of-type(1) {
//     color: ${({ theme }) => theme.COLORS["error"]};
//   }
//   &:nth-of-type(2) {
//     color: ${({ theme }) => theme.COLORS.gray[400]};
//   }
// `;

// const DuplicateChecked = styled.p`
//   margin-left: 16px;
//   font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
//   font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
//   color: ${({ theme }) => theme.COLORS["access"]};
// `;