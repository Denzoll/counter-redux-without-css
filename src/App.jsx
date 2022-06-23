import { useDispatch, useSelector } from 'react-redux/es/exports';
import React from 'react';
import './App.css';

function App() {

  const dispach = useDispatch()
  const  count = useSelector( state  => state.count)
  
    const plusCount = () => {
      dispach({type:'plus'})
    }  

    const minusCount = () => {
      dispach({type:'minus'})
    }
    const randomCount = () => {
      dispach ({type:'random'})
    }
  return (
   <>
   <div className='app'> {count}
    <div  style={{display:'flex'}}>
    <button onClick={plusCount} > +</button>
    <button onClick={minusCount}>-</button>
    <button onClick={randomCount}>-</button>

    </div>



   </div>
   </>
  );
}

export default App;

