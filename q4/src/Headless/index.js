import HeadlessDisclosure from "./components/headlessDisclosure";
import HeadlessRadioGroup from "./components/headlessRadioGroup";
import HeadlessToggle from "./components/headlessToggle";

const HeadlessComponent = () => {
  const options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
  ];

  return (
    <>
      <HeadlessToggle />
      <HeadlessRadioGroup options={options} />
      <HeadlessDisclosure />
    </>
  );
};

export default HeadlessComponent;
