import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { URLS } from "../assets/urls";

const API = process.env.REACT_APP_API_PROD

function useFetchApi() {
  const { token, refreshToken, deleteUserData } = useContext(UserContext);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  })

  // async function getData() {
  //   try {
  //     const response = await fetch(BASE_URL + endpoint, {
  //       method: 'GET',
  //       headers: {
  //         authorization: isPrivate ? `token ${localStorage.getItem('token')}` : '',
  //       }
  //     });
  //
  //
  //     const data = await response.json()
  //
  //     if (isPrivate && response.status === 401) {
  //       await refreshToken()
  //       return getData()
  //     } else if (isPrivate && data.error === 'no credentials') {
  //       deleteUserData()
  //     }
  //
  //
  //     if (data.error) {
  //
  //       setState({
  //         data: null,
  //         loading: false,
  //         error: data.error
  //       })
  //     } else {
  //       setState({
  //         data,
  //         loading: false,
  //         error: null
  //       })
  //     }
  //
  //   } catch (error) {
  //     setState({
  //       data: null,
  //       loading: false,
  //     })
  //   }
  // }

  async function getHomeData(){
      const response = await fetch(`${API}/home`)
      const data = await response.json()
      console.log(data)
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

    console.log(image)
    // debugger
    console.log(`Bearer ${token}`)
    const response = await fetch(`${API}/home/upload`,{
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: image
    })
    const data = await response.json()


    console.log(data)

  }

  async function deleteHomeImage(id){
    const response = await fetch(`${API}/HOME/${id}`,{
      method: 'DELETE'
    })
    const data = await response

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

  return [state, getHomeData, addHomeImage, deleteHomeImage]
}

export default useFetchApi;