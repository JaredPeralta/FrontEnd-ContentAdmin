import React, { createContext , useState } from "react";
import {URLS} from "../assets/urls";


//export const UserContext = createContext();

export const UserContext = createContext({
    userData: {
        name: 'jared',
        date: 'dssadsa',
        email: 'asdsaas@gmail.com',
    },
    isAuth: false,
    error: null,
    token: '',
    login: () => {},
    logout: () => {},
    refreshToken: () => {},
    deleteUserData: () => {}
});

const local = {
    user: 'jared',
    token: '123'
}

const API = process.env.REACT_APP_API_DEV

function UserProvider({ children }) {


    const [token, setToken] = useState(() => {
        //const local = localStorage.getItem('token')
        return local ? local : ''

    });

    const [username, setUsername] = useState(() => {
        //const local = localStorage.getItem('username')
        return local ? local : null
    });

    const [error, setError] = useState(null)



    async function login(data){

        const url = `${API}/auth/login`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const loginData = await response.json()

        if(loginData.error){
            setError(loginData.error)
        }else{
            console.log(loginData)
            localStorage.setItem('username', JSON.stringify(loginData.user))
            localStorage.setItem('token', loginData.access_token)
            setUsername(loginData.username)
            setToken(loginData.access_token)
        }

        return loginData
    }


    function deleteUserData(){
        localStorage.setItem('username', '')
        localStorage.setItem('token', '')

        setUsername(localStorage.getItem('username'))
        setToken(localStorage.getItem('token'))
    }

    return (
        <UserContext.Provider
            value={{
                username: username,
                isAuth: token !== '' && token !== 'null',
                error,
                token,
                login,
                deleteUserData
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider };
