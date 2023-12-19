import { useState } from "react";
import { S } from "./style";

const EmTab = ({ data, variant }) => {
  //데이터의 id가 들어감
  const [selectId, setSelectId] = useState();

  const onClickSelect = (id) => {
    setSelectId(id);
  };

  return (
    <S.Wrapper>
      {data.map((item) => (
        <S.TabWrapper
          onClick={() => {
            onClickSelect(item.id);
          }}
          variant={variant}
          id={item.id}
          selectId={selectId}
        >
          {item.id === selectId && <S.Circle variant={variant} />}
          <S.Text id={item.id} selectId={selectId} variant={variant}>
            {item.title}
          </S.Text>
        </S.TabWrapper>
      ))}
    </S.Wrapper>
  );
};

export default EmTab;
