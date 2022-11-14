import React from "react"
import ReactDOM from "react-dom/client"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Footer } from "../shared/footer"

import "./index.scss"

document.title = "Example"

const Example = () => {
    return <>
        <div className="content">
            <h2>Example multiple page</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum architecto beatae ad? Suscipit laboriosam voluptatum ipsam explicabo, ipsum temporibus, reprehenderit provident repudiandae esse, obcaecati corrupti molestias rerum nisi odio.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quas beatae sapiente aliquam vero nesciunt consequuntur, placeat asperiores alias, facilis, quidem incidunt inventore ex necessitatibus illum modi eius. Voluptatum, accusamus!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam tenetur ullam repudiandae cumque libero laudantium odio quasi distinctio dicta! Sint, saepe vel? Officiis, odit? Adipisci quae magnam vel aspernatur soluta.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio eaque beatae mollitia exercitationem, magni atque cupiditate excepturi aliquid, quibusdam dolore unde, aliquam optio ducimus dolorum impedit error sed perferendis.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint modi, eveniet a amet laudantium quibusdam in obcaecati molestias nesciunt alias deserunt, repellendus, eaque nihil veritatis ratione fuga assumenda enim facilis?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minima dolorem exercitationem, vel nobis ullam quasi officia atque tempora officiis? Quo, odit! Velit quos odio dolores beatae veritatis voluptatibus nulla.
            </p>
            <span className="tag is-large">
                <a href="/"><FontAwesomeIcon icon={faArrowLeft} /> Go back</a>
            </span>
        </div>
        <Footer />
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Example />)