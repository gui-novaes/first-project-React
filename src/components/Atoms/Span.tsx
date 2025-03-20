import React from "react";
import withToggle from "../HOCs/withToggle";


const Span: React.FC<{
    children: number | string;
    status: boolean;
    onToggle: () => void;
}> = (props) => {

    if (props.status){
        return <input onClick={props.onToggle} value={props.children}/>
    }

    return <span onClick={props.onToggle} >{props.children}</span>;
};

export default withToggle(Span);