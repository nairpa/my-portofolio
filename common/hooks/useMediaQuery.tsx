import { useEffect, useState } from "react";

type useMediaQuery = (query: string) => boolean;

export const useMediaQuery: useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const matchQueryList = window.matchMedia(query);
        
        const handleChange = (e: MediaQueryListEvent) => {
            setMatches(e.matches)
        }

        matchQueryList.addEventListener("change", handleChange);

        return () => {
            matchQueryList.removeEventListener("change", handleChange)
        }
    }, [query])

    return matches;
}