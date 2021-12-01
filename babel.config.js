module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.6'
      },
    ],

    '@babel/react',
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
  ]

  return {
    presets,
    plugins,
  }
}
