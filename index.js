import React, { useReducer } from 'react';
import { render } from 'react-dom';
import './style.css';


const initialState = { update1: "React", update2: "Redux" };

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE1':
      return { ...state, update1: action.value };
    case 'UPDATE2':
      return { ...state, update2: action.value };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  return (
    <div>
      {JSON.stringify(state)}<br /><br />
      {state.update1}
      <button onClick={() => { dispatch({ type: 'UPDATE1', value: 'React hooks' }) }}>update1</button><br /><br />
      {state.update2}
      <button onClick={() => { dispatch({ type: 'UPDATE2', value: 'Redux hooks' }) }}>update2</button>
    </div>
  )
}

render(<App />, document.getElementById('root'));
