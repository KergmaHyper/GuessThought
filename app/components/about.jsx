import React from "react";
import Article from "./article.jsx";
import "../../css/about.css"

class About extends React.Component {
    lang = {}
    render() {
        return (
            <div>
                <div className="flex center head">
                    <h1>
                        <Article content="About Page" />
                    </h1>
                </div>
                <div className="flex center">
                    <div className="article ">
                        <p>Used technologys:</p>
                    </div>
                </div>
                <div className="flex row center link-style ">
                    <div>
                        <a href="https://reactjs.org/">React</a>
                    </div>

                    <div>
                        <a href="https://webpack.js.org/">Webpack</a>
                    </div>

                    <div >
                        <a href="https://www.javascript.com/">JavaScript</a>
                    </div>
                    <div >
                        <a href="https://git-scm.com/">Git</a>
                    </div>
                    <div >
                        <a href="https://github.com/">GitHUB</a>
                    </div>

                    <div >
                        <a href="https://nodejs.org/en//">Node.js</a>
                    </div>


                </div>
            </div>
        );
    }
}
export default About;