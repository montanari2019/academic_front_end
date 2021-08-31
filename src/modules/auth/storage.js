import { setBearerToken } from '../../http/http'

export const setHeaderToken = token => setBearerToken(token)
export const getLocalStorageToken = () => localStorage.getItem('token')
export const deleteLocalStorageToken = () => {
    console.log('Entrando na função de deletar o token no localStorage')
    localStorage.removeItem('token')
}
export const setLocalStorageToken = token => {
    console.log('Entrando na função de setar o token no localStorage')
    localStorage.setItem('token', token)
}