import React from 'react';  
import { Provider } from 'react-redux'
import { createStore } from 'redux' 
import reducer from './reducer'
import ROUTE from './route'; 


const store = createStore(reducer)
function App() {
  return (
    <div  > 
      <Provider store={store} >
       <ROUTE />
      </Provider>
    </div>
  );
} 
export default App;
