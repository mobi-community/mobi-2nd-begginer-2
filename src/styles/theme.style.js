const COLORS = {
    purple: {
        300: '#6565F4',
        500: '#5252f7',
        700: '#2F2FC5',
    },
    white: '#FFFFFF',
    black: '#0F0F0F',
    gray: {
        100: '#EBECF0',
        300: '#BABEBC',
    },
};

const FONT_SIZE = {
    small: '24px',
    medium: '28px',
    large: '50px',
};

const FONT_WEIGHT = {
    thin: 400,
    regular: 500,
    bold: 700,
};

const BOX_SHADOW = {
    container: '-5px -5px 10px #fff, 5px 5px 10px #babebc',
    dropShadow: '-5px -5px 10px #fff, 5px 5px 8px #babebc',
    innerShadow: 'inset 1px 1px 2px #babebc, inset -1px -1px 2px #fff',
}

const theme = {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    BOX_SHADOW
};
export default theme;
