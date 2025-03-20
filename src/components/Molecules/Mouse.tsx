import React from "react";
import Span from "../Atoms/Span.tsx";

interface IMouseProps {
    render: (state: {name: string}) => void;
}


const Mouse: React.FC<IMouseProps> = (props) => {
    return (
    <>
        <br />
        <Span>Testando Mouse</Span>
        <br />
        {props.render({name: "Meu Mouse"})}
    </>
    );
};

export default Mouse;