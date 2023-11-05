const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            
            {
                test: /\.(avif|avif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/, // Adicione os tipos de arquivo que deseja lidar aqui
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]', // Define como os arquivos serão nomeados após a compilação
                      outputPath: 'images/', // Define o diretório de saída para as imagens
                    },
                  },
                ],
              },
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    devServer:{
        port: 3000,
        historyApiFallback: true
    }
};
