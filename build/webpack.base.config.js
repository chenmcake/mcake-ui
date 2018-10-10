
// 引入路径变量
var path = require('path');
// 加载路径方法
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
// 输出公共配置
module.exports = {
    // 加载器
    module: {
        // 文档地址：https://doc.webpack-china.org/configuration/module/#module-rules
        rules: [
            // vue文件加载规则
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'css': 'vue-style-loader!css-loader',
                        'scss': 'vue-style-loader!css-loader!sass-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            // js文件加载规则 使用babel进行编译
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            // 图片字体等文件加载规则
            {
              test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
              loader: 'url-loader',
              options: {
                limit: 1000000
              }
            },
            {
              test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            },
        ]
    },
    // 模块resolve的规则
    resolve: {
      // 自动解析确定的拓展名,
      extensions: ['.js', '.vue', '.json'],
      // 创建import或require的别名，一些常用的，路径长的都可以用别名
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        // 根目录
        'mcake': resolve('/'),
        // 静态资源目录
        'static': resolve('static'),
        // 根目录
        '@': resolve('src'),
        // 测试根目录
        'test': resolve('test')
      }
    },
}