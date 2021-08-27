import * as types from "./mutations-types"

export const ActionSetUser = ({ commit }, payload) => {
    console.log("actions user ativada")
    commit(types.SET_USER, payload)
    
}