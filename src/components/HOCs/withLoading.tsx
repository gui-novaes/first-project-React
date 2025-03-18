import React from "react";

function withLoading(WrappedComponent: any) {

    return function WithLoading(props) {
        const { isLoading, ...rest } = props;

        if (isLoading) {
            return <div>Loading ...</div>;
        }

        return <WrappedComponent {...rest} />;
    };
}

export default withLoading;