import * as types from "./mutations-types"
import * as storage from "../storage"
import services from '../../../http/http'
// import * as vue from 'vue'


export const ActionDoLogin = ( {dispatch} , payload) => { 
    return services.auth.login(payload).then(res => {
        console.log('ActionDoLogin ativada  ')
        console.log(res.data)
        dispatch('ActionSetUser', res.data.user)
        dispatch('ActionToken', res.data.token)
        // dispatch('ActionLoadSession')
    })
}

export const ActionCheckToken =  ({ dispatch, state }) => {
    console.log('ActionCheckToken ativada  ')

    if(state.token) {
        console.log('Verificando se existe token no state')
        return Promise.resolve(state.token)
    }
    console.log('Acabei de varificar e não existe toke no state')

    const token = storage.getLocalStorageToken()
    console.log('Buscando token no localStorage: ', token)

    if(!token){
        console.log('Não existe token no localStorage')
        return Promise.resolve(null)
    }

    console.log('Existe token no localStorage')
    dispatch('ActionToken', token)

    console.log('Token salvo no state e chamando LoadSession')

    
    
    return dispatch('ActionLoadSession')

}

export const ActionLoadSession = ({ dispatch }) => {
    console.log('ActionLoadSession ativada  ')
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            const { body: { user }} = await services.auth.loadSession()
            // console.log(user)
            dispatch('ActionSetUser', user)
            resolve()

        }catch (err) {  
            console.log(err)
            dispatch('ActionLogout')
            reject(err)
        }
    })
}

export const ActionContratoUser = ({ dispatch }) => {
    console.log('ActionContratoUser ativada')
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            const { body: {contratos} } = await services.auth.contratoUser()
            // console.log(contratos.[0])
            dispatch('ActionSetContratoUser', contratos.[0])
            resolve()

        }catch (err) {  
            console.log(err)
            dispatch('ActionLogout')
            reject(err)
        }
    })
}

export const ActionSetContratoUser = ({ commit }, payload) => {
    console.log("ActionSetContratoUser ativada")
    commit(types.SET_CONTRATO_USER, payload)
    
}

export const ActionSetUser = ({ commit }, payload) => {
    console.log("actions Set user ativada")
    commit(types.SET_USER, payload)
    
}

export const ActionToken = ({ commit }, payload ) => {
    console.log("actions Set token ativada")
    localStorage.setItem('token', payload)
    storage.setHeaderToken(payload)
    commit(types.SET_TOKEN, payload)
    
}

export const ActionLogout = ({ dispatch }) => {
    console.log('Action Logout ativada  ')
    storage.setHeaderToken('')
    storage.deleteLocalStorageToken()
    dispatch('ActionSetUser', {})
    dispatch('ActionSetToken', '')
    console.log('Token deletado')
}