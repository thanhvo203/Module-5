import { useState } from "react";


function useCount () {
    const [count, setCount] = useState(1);

    const increase = () => {
        setCount (count + 1);
    }
    
    return [count,increase];
}

export default useCount;