module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'html/webvue/'
      : '/',
      devServer: {
        port: 8082, // 开发模式端口号
        proxy: {
          '/':{
            // target:'http://127.0.0.1:8081', //node
            target:'http://taoxiangmao.com:8888',
            changeOrigin:true,
            secure:false
          }
        }
      },
      chainWebpack: config => {
        config.plugins.delete('preload')
      }
  }