import * as React from "react"
import * as ReactDOM from "react-dom/client"
import "./index.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

document.title = "Home"

const App = () => {
    return <>
        <div className="header">
            <p className="is-size-1">Welcome!</p>
        </div>
        <div className="content">
            <p className="is-size-4">
                Simple template with webpack and react for servers that only support static files, or servers like apache and nginx.
            </p>
            <a href="/example">Go Example <FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
        <footer>
            <p>
                Created by <b>SYSMA</b>
            </p>
        </footer>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)