import { SET_LOADING } from "../constants"
import { URL_API } from "../env"

export const GET = async (endPoint, dispatch, actionType) => {
    dispatch({type : SET_LOADING, value : true})
    try {
        fetch(`${endPoint}`,{
            method : 'GET',
        })
        .then(response => response.json())
        .then(data => {
            console.log('response_'+actionType+'_result',data)
            dispatch({type : actionType, value : data})
            dispatch({type : SET_LOADING, value : false})
        })
        .catch(error=>{
            dispatch({type : SET_LOADING, value : false})
            console.log('response_'+actionType+'_error_1', error)
        })
    } catch (error) {
        dispatch({type : SET_LOADING, value : false})
        console.log('response_'+actionType+'_error_2', error)
    }
}