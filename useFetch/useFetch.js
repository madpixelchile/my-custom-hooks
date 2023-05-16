import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const {data, isLoading, hasError} = state;

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        })
        
    }

    console.log(state);

    useEffect(() => {
        getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return {
        data: data,
        isLoading: isLoading,
        hasError: hasError
    }
}
