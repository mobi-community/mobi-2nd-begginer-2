import EmotionButton from "./components/emotionButton";
import EmotionInput from "./components/emtionInput";

const Emotion = () => {
  return (
    <>
      <EmotionButton variant="primary" size="small" radius="basis">
        DButton
      </EmotionButton>
      <EmotionInput size="small" placeholder="Small Input" />
    </>
  );
};
export default Emotion;
