import {useContext, useEffect} from "react";
import HomeUser from "./HomeUser";
import {UserContext} from "../../context/UserContext";
import {Navigate} from "react-router-dom";


import {URLS} from "../../assets/urls";
import useFetchApi from "../../hooks/useFetchAPI";
import PageLoading from "../../Components/PageLoading/PageLoading";

const HomeUserContainer = () => {

    // const [{data, loading, error}, getData] = useFetchApi('/single-assessment/first-assessment', true)
    const {isAuth, error, loading} = useContext(UserContext)

    useEffect(() =>{
        console.log('antes de entrar a get data')
        // getData()
    }, [])


    if(!isAuth){
        return <Navigate to={'/'} />
    }

    if(loading){
        return <PageLoading/>
    }

    if(error){
        if(error === 'no credentials'){
            return <Navigate to={'/'} />
        }
        return error
    }

    return (
            <HomeUser />
    )
}

export default HomeUserContainer
