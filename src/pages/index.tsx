import React from "react"
import ReactDOM from "react-dom/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import { Footer } from "./shared/footer"

import "./index.scss"

document.title = "Home"

const App = () => {
    return <>
        <header>
            <h1>Template for servers that only support static files</h1>
        </header>
        <div className="content">
            <p>This template is mainly for servers that only support static files or servers like apache or nginx with little or no serve configuration.</p>
            <p>Features:</p>
            <ul>
                <li><a href="https://webpack.js.org/" target="_blank">Webpack</a></li>
                <li><a href="https://reactjs.org/" target="_blank">React</a></li>
                <li><a href="https://fontawesome.com/" target="_blank">Fontawesome</a></li>
                <li><a href="https://sass-lang.com/" target="_blank">Sass</a></li>
                <li><a href="https://bulma.io/" target="_blank">Bulma (css framework)</a></li>
                <li><a href="https://www.typescriptlang.org/" target="_blank">Typescript</a></li>
            </ul>
            <span className="tag is-large">
                <a href="/example">
                    Go to page example
                    {' '}
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </span>
        </div>
        <Footer />
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)