import { useState, useEffect } from "react";
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            //console.log("Done waiting");
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("Invalid end point at server end");
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    }
                    else {
                        setIsPending(false);
                        setError(err.message);
                        setData(null);
                    }
                });
        }, 1000);
        return () => {
            //console.log("Wrong Url, don't Fetch");
            abortCont.abort();
        };
    }, [url]);
    return { data, isPending, error }
}

export default useFetch;