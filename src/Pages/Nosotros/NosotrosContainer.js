import {useContext, useEffect} from "react";
import Nosotros from "./Nosotros";
import {UserContext} from "../../context/UserContext";
import {Navigate} from "react-router-dom";


import {URLS} from "../../assets/urls";
import useFetchApi from "../../hooks/useFetchAPI";
import PageLoading from "../../Components/PageLoading/PageLoading";

const NosotrosContainer = () => {

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

    return (<Nosotros loading={loading} data={data}/>)
}

export default NosotrosContainer