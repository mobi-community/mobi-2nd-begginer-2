import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const HeadlessRadioGroup = ({ options }) => {
  const [selected, setSelected] = useState(null);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Options</RadioGroup.Label>
      <div className="space-y-2">
        {options.map((option) => (
          <RadioGroup.Option
            key={option.id}
            value={option.label}
            className={({ active }) =>
              `${
                active
                  ? "ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                  : ""
              }
              relative block rounded-lg border border-gray-300 bg-white px-4 py-2 cursor-pointer focus:outline-none`
            }
          >
            {({ checked }) => (
              <span
                className={`${
                  checked ? "bg-blue-600" : "bg-transparent"
                } absolute inset-0 rounded-lg`}
              />
            )}
            <RadioGroup.Label className="font-medium">
              {option.label}
            </RadioGroup.Label>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default HeadlessRadioGroup;
