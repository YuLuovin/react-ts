import counterUp from 'counterup2';
import { useEffect, useRef } from 'react';

interface IProps {
  backgroundColor: string;
  mainNumber: string | number;
}

const SingleCard = function(props:IProps) {

  const mainNumRef = useRef(null);

  useEffect(()=> {
    const el = mainNumRef.current;
    counterUp( el, {
      duration: 1000,
      delay: 16,
  } )
  },[])

  return (
    <div className="card-wrap" style={{backgroundColor: props.backgroundColor}}>
        <span className="main-num" ref={ mainNumRef }>
          {props.mainNumber}
        </span>
    </div>
  )
}

export default SingleCard;
