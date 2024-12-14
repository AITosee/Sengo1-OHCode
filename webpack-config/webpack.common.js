const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const name = require('../package.json').name;
const ORI_DIR = process.cwd();
const DEST_DIR = path.resolve(ORI_DIR, 'dist', name);

module.exports = {
    cache: false,
    entry: './src/blocksdef.js',
    output: {
        filename: 'blocksdef.js',
        path: DEST_DIR,
        clean: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '**/*',
                    context: path.resolve(ORI_DIR, 'src'), // 指定 src 目录为上下文
                    to: DEST_DIR,
                    globOptions: {
                        ignore: ['**/*.js'] // 排除所有 .js 文件
                    }
                }
            ]
        }),
        new ZipPlugin({
            path: path.resolve(DEST_DIR, '../'),
            filename: name,
            fileOptions: {
                mtime: new Date(),
                mode: 0o100664,
                compress: true,
                forceZip64Format: false
            },
            zipOptions: {
                forceZip64Format: false
            }
        })
    ]
};