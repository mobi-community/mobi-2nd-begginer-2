import { useState } from "react";
import ChakraModal from "./components/chakraModal";
import ChakraTab from "./components/chakraTab";
import ChakraCard from "./components/chakraCard";

const ChakraComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const tabArr = [
    {
      title: "탭1",
      content: "탭1 내용",
    },
    {
      title: "탭2",
      content: "탭2 내용",
    },
    {
      title: "탭3",
      content: "탭3 내용",
    },
  ];

  return (
    <>
      <ChakraTab tabList={tabArr} />
      <button onClick={onOpen}>모달 열기</button>
      <ChakraModal isOpen={isOpen} onClose={onClose} title="제목">
        모달 내용
      </ChakraModal>
      <ChakraCard imageUrl="" title="카드 제목" description="카드 설명" />
    </>
  );
};

export default ChakraComponent;
