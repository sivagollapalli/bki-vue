import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        form: {
            email: '',
            password: ''
        },
        user: {
            first_name: '',
            last_name: '',
            email: '',
            mobile: '',
            role_id: '',
        },
        userTypes: [{value: 1, text: 'Admin'}, 
                    {value: 2, text: 'Project Manager'}, 
                    {value: 3, text: 'Project Foreman'}],
    },
    mutations: {
        ADD_TOKEN(state, token) {
            localStorage.token = token
        },
        DELETE_TOKEN(state, token) {
            delete localStorage.token
        }
    },
    actions: {
        saveToken(context, token) {
            context.commit('addToken', token)
        }
    }

})