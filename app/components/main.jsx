import React from "react";
import Article from "./article.jsx";
import Button from "./Button.jsx";
import "../../css/mainpage.css"

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="mainpage flex center" >
                <div>
                    <div className="flex center">
                        <span className="head-intro">Ця сторінка вгадує думки!</span>
                    </div>
                    <div>
                        <div className="intro">
                            -<span className="first-letter">З</span>агадайте двузначне число. <span className="example">
                                (наприклад 68)
                            </span>
                        </div>
                        <div className="intro">
                            -<span className="first-letter">З</span>найдить це число у таблиці, та запам'ятайте символ поруч з ним.
                        </div>
                        <div className="intro">
                            -<span className="first-letter">В</span>ідніміть від нього цифри які його складають.<span className="example">
                                (68 - 6 - 8 = 54)
                            </span>
                        </div>
                        <div className="intro">
                            -<span className="first-letter">Н</span>амалюйте цей символ у думках, та натисніть кнопку.
                        </div>
                    </div>
                    <div className="flex center">
                        <Button
                            state={this.props.state}
                            symbol={this.props.symbol}
                            onClick={this.props.onClick}
                            trueCaption="  Натисни  тут"
                            falseCaption=" Повторити "
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;