import { Disclosure } from "@headlessui/react";

const HeadlessDisclosure = () => {
  return (
    <Disclosure as="div" className="space-y-2">
      {({ open }) => (
        <>
          <Disclosure.Button className="border border-gray-300 px-4 py-2 bg-gray-100">
            오픈
          </Disclosure.Button>
          <Disclosure.Panel className="border border-gray-300 px-4 py-2 bg-white">
            {open && <p className="text-gray-600">내용</p>}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default HeadlessDisclosure;
