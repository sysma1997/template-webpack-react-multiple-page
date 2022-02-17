# Simple template with webpack and react

For servers that only support static files, or servers like apache and nginx.

## use:

* Install packages `npm install` or `yarn install`
* Development mode `yarn start`
* How to create others pages. In `webpack.common.js`.
    
    ```javascript
    // Check page example in this file
    module.exports = {
        ...
        entry: {
            ...
            "<name_root>": "<root_file_react_typescript>", 
        }
        ...
        plugins: [
            ...
            new HtmlWebpackPlugin({
                title: "<name>", 
                filename: "<name_file>", 
                template: "<route_file_template>", 
                chunk: ["<name_root>"]
            })
        ]
        ...
    }
    ```
    Example: 
    ```javascript
    // Check page example in this file
    module.exports = {
        ...
        entry: {
            ...
            "./example/index": "./src/example/index.tsx", 
        }
        ...
        plugins: [
            ...
            new HtmlWebpackPlugin({
                title: "Example", 
                filename: "example/index.html", 
                template: "./src/index.html", 
                chunks: ["./example/index"]
            })
        ]
        ...
    }
    ```