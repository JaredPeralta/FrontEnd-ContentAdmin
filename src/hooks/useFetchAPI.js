import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import swal from 'sweetalert';

const API = process.env.REACT_APP_API_PROD

function useFetchApi() {
  const { token, refreshToken, deleteUserData } = useContext(UserContext);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  })

  async function getHomeData(){
      const response = await fetch(`${API}/home`)
      const data = await response.json()
      if(!data.error){
        setState({
          data: data,
          loading: false,
          error: null
        })

      }else{
        setState({
          data: null,
          loading: false,
          error: data.message
        })
      }
  }

  async function addHomeImage(image){

    const response = await fetch(`${API}/home/upload`,{
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: image
    })
    const data = await response.json()

    if(!data.error){
      getHomeData()
      swal({
            title: "Imagen Agregada",
            icon: "success",
            button: "OK",
          });
    }else{
      swal({
        title: "Error",
        text: data.message,
        icon: "success",
        button: "OK",
      });
    }
  }

  async function deleteHomeImage(id){
    const response = await fetch(`${API}/HOME/${id}`,{
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    const data = await response.json()

    if(!data.error){
      setState({
        ...state,
        loading: false,
        error: null
      })

      getHomeData()
    }else{
      setState({
        data: null,
        loading: false,
        error: data.message
      })
    }
  }

  async function updateHomeImage(id, image){

    let response = await fetch(`${API}/HOME/${id}`,{
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })

    let data = await response.json()

    response = await fetch(`${API}/home/upload`,{
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: image
    })
    data = await response.json()

  }

  return [state, getHomeData, addHomeImage, deleteHomeImage]
}

export default useFetchApi;