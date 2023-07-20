
import useCount from "../hook/useCount";



function SecondCount () {
    const [secondCount,increase] = useCount(1);

    return (
       <div>
          <p>Count 2: {secondCount}</p>
          <button onClick={increase}>Add 2</button>
       </div>
    );
}

export default SecondCount;