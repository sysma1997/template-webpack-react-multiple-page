# Simple template with webpack and react

For servers that only support static files, or servers like apache and nginx.

## use:

* Install packages `npm install` or `yarn install`
* Development mode `yarn start`
* How to create others pages. In `webpack.common.js`.
    
    ```javascript
    module.exports = {
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