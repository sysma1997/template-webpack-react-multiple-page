import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Footer } from "./shared/footer";

import "./index.css";

document.title = "Template Webpack React multiple page";

const App = () => {
    const [entryCode, setEntryCode] = useState<any>();
    const [pluginsCode, setPluginsCode] = useState<any>();

    useEffect(() => {
        fetch("assets/others/entry.txt").then(response => response.text())
            .then((res: String) => setEntryCode(res));
        fetch("assets/others/plugins.txt").then(response => response.text())
            .then((res: String) => setPluginsCode(res));
    }, []);

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
                <li><a href="https://bulma.io/" target="_blank">Bulma (css framework)</a></li>
                <li><a href="https://www.typescriptlang.org/" target="_blank">Typescript</a></li>
            </ul>
            <div className="use">
                <p>How to use:</p>
                <ul>
                    <li>Install packages <code className="command">npm install</code>{' '}
                        or <code className="command">yarn install</code></li>
                    <li>Start development mode <code className="command">npm run start</code>{' '}
                        or <code className="command">yarn start</code></li>
                    <li>Start watch mode <code className="command">npm run watch</code>{' '}
                        or <code className="command">yarn watch</code></li>
                    <li>Build project with <code className="command">npm run build</code>{' '}
                        or <code className="command">yarn build</code></li>
                </ul>
                <p>How to add page:</p>
                <ul>
                    <li>In your <code className="command">webpack.common.js</code> add
                        in <code className="command">entry</code></li>
                </ul>
                <SyntaxHighlighter language="javascript" style={atomOneLight}>
                    {entryCode}
                </SyntaxHighlighter>
                <ul>
                    <li>Now in your <code className="command">plugins</code></li>
                </ul>
                <SyntaxHighlighter language="javascript" style={atomOneLight}>
                    {pluginsCode}
                </SyntaxHighlighter>
                <ul>
                    <li>Now start server or restart <code className="command">npm run start</code></li>
                </ul>
            </div>
            <span className="tag is-large" style={{ marginTop: "1rem" }}>
                <a href="/example">
                    Go to page example
                    {' '}
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </span>
        </div>
        <Footer />
    </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);