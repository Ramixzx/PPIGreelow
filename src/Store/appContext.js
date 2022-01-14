import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const Context = createContext(null);

const UserProvider = ({children}) => {
    
    const [api, setApi] = useState([])
    const [space, setSpace] = useState([])
    const [deporte, setDeporte] = useState([])


    const obtenerDeportes = async () =>{
        const response = await axios.get('https://apipdtc.herokuapp.com/deportes')
        setSpace(response);
    }

    const obtenerInfoDeporte = async (deporte) =>{
        const response = await axios.get(`https://apipdtc.herokuapp.com/${deporte}`)
        setDeporte(response.data);
    }

    useEffect(async () =>{
        const response = await axios.get('https://apipdtc.herokuapp.com/deportes')
        setApi(response.data)
    }, [])

    return (
    <Context.Provider value={{api, space, deporte, obtenerDeportes, obtenerInfoDeporte}}>
        {children}
    </Context.Provider>
    );
};

  
export default UserProvider
