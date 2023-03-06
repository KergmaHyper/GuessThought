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
                    <Article content="Ця сторінка вгадує думки!" />
                    <Article content="-Загадайте двузначне число. (наприклад 68)" />
                    <Article content="-Відніміть від нього цифри які його складають. (68 - 6 - 8 = 54)" />
                    <Article content="-Знайдить це число у таблиці, та запам'ятатйте символ поруч з ним." />
                    <Article content="-Намалюйте цей символ у думках, та натисніть унизу." />
                    <div className="flex center">
                        <Button
                            state={this.props.state}
                            symbol={this.props.symbol}
                            onClick={this.props.onClick}
                            trueCaption="  Натисни  "
                            falseCaption=" Повторити "
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;