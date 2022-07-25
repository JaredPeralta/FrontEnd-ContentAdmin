import {useContext, useEffect} from "react";
import HomeUser from "./HomeUser";
import {UserContext} from "../../context/UserContext";
import {Navigate} from "react-router-dom";


import {URLS} from "../../assets/urls";
import useFetchApi from "../../hooks/useFetchAPI";
import PageLoading from "../../Components/PageLoading/PageLoading";

const HomeUserContainer = () => {

    const [{data, loading, error}, getHomeData] = useFetchApi()
    const {isAuth} = useContext(UserContext)

    useEffect(() =>{
        getHomeData()
        console.log(loading)
    }, [])


    if(!isAuth){
        return <Navigate to={'/'} />
    }

    if(error){
        if(error === 'no credentials'){
            return <Navigate to={'/'} />
        }
        return error
    }

    return (<HomeUser loading={loading} data={data}/>)
}

export default HomeUserContainer
