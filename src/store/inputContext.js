import React, {useState,createContext} from 'react';

const initialValue = {
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
