import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../backend/vue-axios/axios'

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
        rows: [],
        totalRecords: 0,
        serverParams: { page: 1, perPage: 10 }
    },
    mutations: {
        ADD_TOKEN(state, token) {
            localStorage.token = token
        },
        DELETE_TOKEN(state, token) {
            delete localStorage.token
        },
        FETCH_USERS(state, data) {
            state.rows = data.users 
            state.totalRecords = 10
        }
    },
    actions: {
        fetchUsers(context) {
            axios.get('/users.json', {
              params: context.state.serverParams  
            }).then(response => {
                context.commit('FETCH_USERS', response.data)
            }); 
        }
    }

})