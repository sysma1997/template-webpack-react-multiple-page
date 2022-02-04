import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import { useState, useEffect } from "react"
import * as ReactDOM from "react-dom"



const Example = () => {
    return <>
        <h2>Example multiple page</h2>
        <a href="/"><FontAwesomeIcon icon={faArrowLeft} /> Go back</a>
    </>
}

ReactDOM.render(<Example />, document.getElementById("root"))