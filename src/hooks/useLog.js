import { useEffect } from "react";

function useLog(state) {
    useEffect(logger, [state]);

    function logger() {
        console.log('efeito colateral', state);
    }

    return state + '... Att, Gui'; //pode ou não ter um return
}

export default useLog;