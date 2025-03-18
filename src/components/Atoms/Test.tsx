import React, { useEffect, useState } from "react";
import withLoading from "../HOCs/withLoading.tsx";

function MyComponent() {
    return <div>Loaded!</div>;
}

const MyComponentWithLoading = withLoading(MyComponent);

function Test() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            <MyComponentWithLoading isLoading={isLoading} />
        </div>
    );
}

export default Test;