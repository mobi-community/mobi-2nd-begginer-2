import { styled, css } from "styled-components";
import { flexCenter } from "../style/common";

const DModal = ({ size, radius, children }) => {
  return (
    <Wrapper>
      <Modal size={size} radius={radius}>
        {children}
      </Modal>
    </Wrapper>
  );
};
export default DModal;

const sizeCSS = {
  small: css`
    width: 370px;
    height: 200px;
  `,
  midium: css`
    width: 430px;
    height: 260px;
  `,
  large: css`
    width: 645px;
    height: 800px;
  `,
};

const radiusCSS = {
  basis: css`
    border-radius: 20px;
  `,
  round: css`
    border-radius: 30px;
  `,
};

const Wrapper = styled.div`
  ${flexCenter}
`;

const Modal = styled.div`
  text-align: center;
  border: none;
  border: 1px solid ${({ theme }) => theme.COLORS.primary["main"]};
  color: ${({ theme }) => theme.COLORS.primary["main"]};
  ${({ size }) => sizeCSS[size]}
  ${({ radius }) => radiusCSS[radius]}
`;
