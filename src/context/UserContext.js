import React, { createContext , useState } from "react";
import {URLS} from "../assets/urls";
import swal from "sweetalert";


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

const API = process.env.REACT_APP_API_PROD

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
        console.log('login')
        console.log(loginData)
        if(loginData.error){
            setError(loginData.error)
        }else{
            localStorage.setItem('username', JSON.stringify(loginData.user))
            localStorage.setItem('token', loginData.access_token)
            setUsername(loginData.username)
            setToken(loginData.access_token)
        }
        return loginData
    }

    async function register(data){
        const url = `${API}/users/register`

        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const responseData = await response.json()
        console.log(data)
        console.log(responseData)
        if(responseData.error){
            setError(responseData.error)
            swal({
                title: `${responseData.message}`,
                //text: "You clicked the button!",
                icon: "warning",
                button: "OK",
            });
        }else{
            //alerta de creacion correcta
            login({username: data.username, password: data.password})
        }

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
                register,
                deleteUserData
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider };
