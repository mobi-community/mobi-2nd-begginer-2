import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const ChakraTab = ({ tabList }) => {
  return (
    <Tabs>
      <TabList>
        {tabList.map((el, index) => (
          <Tab key={index}>{el.title}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabList.map((el, index) => (
          <TabPanel key={index}>{el.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ChakraTab;
