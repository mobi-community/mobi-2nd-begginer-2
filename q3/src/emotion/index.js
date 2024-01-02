import EmotionButton from "./components/emotionButton";
import EmotionModal from "./components/emotionModal";
import EmotionSelect from "./components/emotionSelect";
import EmotionInput from "./components/emtionInput";

const Emotion = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <>
      <EmotionButton variant="primary" size="small" radius="basis">
        DButton
      </EmotionButton>
      <EmotionInput size="small" placeholder="Small Input" />
      <EmotionModal size="small" radius="round">
        가나다라마바사
      </EmotionModal>
      <EmotionSelect options={options} size="small" radius="round" />
    </>
  );
};
export default Emotion;
