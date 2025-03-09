import { useEffect } from "react";

function useLogTemperature(state) {
    useEffect(logger, [state]);

    function logger() {
        console.log('sua temperatura em graus celsius é', state);
    }
}

export default useLogTemperature;