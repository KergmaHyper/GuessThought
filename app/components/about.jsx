import React from "react";
import Article from "./article.jsx";
import "../../css/about.css"

class About extends React.Component {
    lang = {}
    render() {
        return (
            <div>
                <h1>
                    <Article content="About Page" />
                </h1>
                <div>
                    <div className="link-style">
                        <a href="https://reactjs.org/">React</a>
                    </div>

                    <div className="link-style">
                        <a href="https://webpack.js.org/">Webpack</a>
                    </div>

                    <div className="link-style">
                        <a href="https://www.javascript.com/">JavaScript</a>
                    </div>
                    <div className="link-style">
                        <a href="https://git-scm.com/">Git</a>
                    </div>
                    <div className="link-style">
                        <a href="https://github.com/">GitHUB</a>
                    </div>

                    <div className="link-style">
                        <a href="https://nodejs.org/en//">Node.js</a>
                    </div>


                </div>
            </div>
        );
    }
}
export default About;