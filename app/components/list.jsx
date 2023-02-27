import React from "react";
import ListItem from "./listItem.jsx";
function List(props) {
    return (<ul>
        {props.array.map((el, index) => (
            <ListItem key={el.toString()} value={el} />
        ))}
    </ul>);
}
List.defaultProps = {
    array: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
}
export default List;