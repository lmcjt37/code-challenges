const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== '/\\.css$/',
    )

    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              exportGlobals: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              context: path.resolve(__dirname, '../src/'),
              hashPrefix: 'localModule',
            },
          },
        },
      ],

      include: path.resolve(__dirname, '../src/'),
    })

    return config
  },
}
