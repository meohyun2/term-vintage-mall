import React, {useState,createContext} from 'react';

const initialValue = {
  id: 'meo',
  pwd: 'meo'
}

export const InputContext = createContext(initialValue);

export const InputProvider = (props) => {

  const [info,setInfo] = useState();

  return(
    <InputContext.Provider value ={[info,setInfo]}>
      {props.children}
    </InputContext.Provider>
  )
}
