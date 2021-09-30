module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:3010',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            }
        }
    }
}