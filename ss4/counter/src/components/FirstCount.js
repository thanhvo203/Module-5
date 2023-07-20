
import useCount from '../hook/useCount';

function FirstCount() {
    const [firstCount, increase] = useCount(1);


    return (
       <div>
          <p>Count 1 : {firstCount}</p>
          <button onClick={increase}>Add 1</button>
       </div>
    );
}
export default FirstCount;