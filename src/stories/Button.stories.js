import Button from "./Button";

export default {
  title: "MyStory/Button",
  component: Button,

  argTypes: {
    color: { control: "color", options: ["purple", "gray"] },
    size: { control: { options: ["big", "small"] } },
    text: { control: "text" },
  },
};

export const PopUpCircle = (args) => <Button {...args}></Button>;
export const SubmitButton = (args) => <Button {...args}></Button>;

PopUpCircle.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/awaS3bvQDRPb8b5njurGJs/story-book?type=design&node-id=1%3A4&mode=design&t=8usisL7PuNaLBMSG-1",
  },
};

SubmitButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/awaS3bvQDRPb8b5njurGJs/story-book?type=design&node-id=1%3A4&mode=design&t=8usisL7PuNaLBMSG-1",
  },
};
