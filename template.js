const config = require('./config')
const theme = require('./theme')

const getColors = (colors) => {
  return [{
    name: 'dark', colors: colors.dark
  }, {
    name: 'light', colors: colors.light
  }].filter(colorSet => !!colorSet.colors)
}

const writeToFile = (theme, name, colorSetName) => {
  return Promise.resolve({
    name: `${name}-${colorSetName}.tmTheme`,
    contents: Buffer.from(theme, 'utf8')
  });
}

const render = (colors) => {
  return getColors(colors)
  .map(colorSet => {
    const themeContent = theme.build(colorSet, config.name)
    return writeToFile(themeContent, config.name, colorSet.name)
  });
};

module.exports = {
  render,
};
