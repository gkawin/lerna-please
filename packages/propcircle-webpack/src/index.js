import webpack from 'webpack'

module.exports = (config) => webpack({
    mode: "development",
    entry: {...config.entry },
    output: { ...config.output },
    plugins: [
        ...config.plugins,
        {
            apply: (compiler) => {
                compiler.hooks.done.tapAsync(`propcircle-webpack-stats-extractor`, (stats, done) => {
                    console.log(stats.compilation.chunkGroups)
                    done();
                })
            }
        }
    ]
})