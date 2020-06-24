module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  devServer: {
    proxy: 'https://warm-badlands-86536.herokuapp.com/',
  }
}
