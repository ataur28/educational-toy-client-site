import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Educational Toy`;
    }, [title])
}

export default useTitle;