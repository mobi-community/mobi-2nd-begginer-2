/** @type { import('@storybook/react').Preview } */

// 전역적으로 쓸 수 있는 곳
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // 전역 매개변수
    backgrounds: {
      values: [
        { name: 'purple', value: '#5252f7' },
        { name: 'gray', value: '#EBECF0' },
      ],
    },
    colors: {
      values: [
        {name: 'purple[700]', value:"#2F2FC5"},
        {name: 'purple[300]', value:"#6565F4"},
        {name: 'white' , value: '#fff'},
        {name: 'gray[300]' , value: '#BABEBC'},
        {name: 'black', value: "#000"}
      ]
    }
  },
};

export default preview;
