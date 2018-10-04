require("dotenv").config()

const isProd = process.env.NODE_ENV === "production";

const plugins = [
    [
        "module-resolver",
        {
            alias: {
                root: ["./"],
                actions: "./actions",
                components: "./components",
                container: "./container",
                config: "./config",
                constants: "./constants",
                reducers: "./reducers",
                static: "./static",
                stories: "./stories",
                styles: "./styles",
                lib: "./lib"
            }
        }
    ],
    ["transform-define", require("./config/expose-vars")],
    //"transform-flow-strip-types"
];
const presets = [
    [
        "next/babel",
        {
            targets: {
                node: "current"
            },
            "preset-env": {
                modules: "commonjs"
            }
        }
    ]
];

module.exports = {
    presets: presets,
    plugins: plugins,
    ignore: [
        "_*",
        "._*",
        "node_modules/**/*",
        "packages"
    ]
};
