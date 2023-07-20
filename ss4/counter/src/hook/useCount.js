import { useState } from "react";


function useCount (addAmount) {
    const [count, setCount] = useState(1);

    const increase = (addAmount) => {
        setCount (count + 1);
    }
    
    return [count,increase];
}

export default useCount;