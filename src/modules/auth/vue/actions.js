import * as types from "./mutations-types"
import * as storage from "../storage"
import services from '../../../http/http'


export const ActionDoLogin = ( {dispatch} , payload) => { 
    return services.auth.login(payload).then(res => {
        console.log('ActionDoLogin ativada  ')
        dispatch('ActionSetUser', res.data.user)
        dispatch('ActionToken', res.data.token)
    })
}

export const ActionSetUser = ({ commit }, payload) => {
    console.log("actions Set user ativada")
    commit(types.SET_USER, payload)
    
}

export const ActionToken = ({ commit }, payload) => {
    console.log("actions Set token ativada")
    storage.setLocalStorageToken(payload)
    storage.setHeaderToken(payload)
    commit(types.SET_TOKEN, payload)
    
}