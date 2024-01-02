import styled from "@emotion/styled";
import { css } from "@emotion/react";

const EmotionModal = ({ size, radius, children }) => {
  return (
    <Wrapper>
      <Modal size={size} radius={radius}>
        {children}
      </Modal>
    </Wrapper>
  );
};
export default EmotionModal;

const sizeCSS = {
  small: css`
    width: 370px;
    height: 200px;
  `,
  medium: css`
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
  display: flex;
  justify-content: center;
`;

const Modal = styled.div`
  text-align: center;
  border: 1px solid #70a8db;
  color: #70a8db;
  ${({ size }) => sizeCSS[size]};
  ${({ radius }) => radiusCSS[radius]};
`;
