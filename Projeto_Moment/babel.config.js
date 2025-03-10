const { version } = require("core-js")

const presets = [
    [
        "@babel/preset-env",
        {
            useBuiltIns: "usage",
            corejs: "3.41.0"
        }
    ]
]

module.exports = { presets }