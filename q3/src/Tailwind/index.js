import TailwindInput from "./component/tailWindInput";
import TailwindModal from "./component/tailWindModal";
import TailwindSelect from "./component/tailWindSelect";
import TailwindButton from "./component/tailwindButton";

const Tailwind = () => {
  const options = [
    { value: "옵션1", label: "옵션1" },
    { value: "옵션2", label: "옵션2" },
    { value: "옵션3", label: "옵션3" },
  ];

  return (
    <>
      <p>버튼 공용 컴포넌트</p>
      <TailwindButton variant="primary" size="small" radius="basis">
        DButton
      </TailwindButton>
      <br />
      <br />
      <p>인풋 공용 컴포넌트</p>
      <TailwindInput size="small" placeholder="DInput" />
      <br />
      <br />
      <p>모달 공용 컴포넌트</p>
      {/* 모달 사이즈가 왜 안바뀌지.. */}
      <TailwindModal size="medium" radius="round">
        DModal
      </TailwindModal>
      <br />
      <br />
      <p>샐랙트 공용 컴포넌트</p>
      <TailwindSelect options={options} size="small" radius="basis" />
    </>
  );
};

export default Tailwind;
