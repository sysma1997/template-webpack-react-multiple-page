const fs = require("fs")

const _getFiles = (folder) => {
    let array = []
    let directories = []
    
    fs.readdirSync(folder).forEach(file => {
        if(fs.lstatSync(`${folder}${file}`).isDirectory()) 
            directories.push(`${file}`)
        else array.push(`${file}`)
    })

    let name = folder.replace("./src", "")
    let files = {[name]: array}

    if(directories.length > 0) {
        directories.forEach(directory => {
            const fls = _getFiles(`${folder}${directory}/`)
            files = {...files, ...fls}
        })
    }

    return files
}
const capitalizeFirstLetter = word => {
    return word[0].toUpperCase() + word.slice(1)
}

const GetPages = () => {
    const files = _getFiles("./src/")
    console.log(files)
    const mainPage = files['/']
    for(let page in files) {
        let title
        let template

        if(page === "/") title = "Home" 
        else {
            let separators = page.split("/")
            title = capitalizeFirstLetter(separators[separators.length - 2])
        }
        const templateHtml = files[page].find(file => file.indexOf(".html") > -1)
        if(!templateHtml) 
            template = `./src/${mainPage.find(file => file.indexOf(".html") > -1)}`
        else template = `./src${page}${templateHtml}`

        console.log({
            title: title, 
            filename: `${page.slice(1)}index.html`, 
            template: template
        })
    }
}
GetPages()