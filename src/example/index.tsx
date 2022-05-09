import * as React from "react"
import { useState, useEffect } from "react"
import * as ReactDOM from "react-dom/client"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

document.title = "Example"

const Example = () => {
    return <>
        <h2>Example multiple page</h2>
        <a href="/"><FontAwesomeIcon icon={faArrowLeft} /> Go back</a>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Example />)