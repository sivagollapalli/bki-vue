<template>
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content">
                <em>User</em>
                </template>
                <b-dropdown-item href="#" @click="signOut()">Signout</b-dropdown-item>
                <b-dropdown-item>
                    <router-link to="/users/new">Create User</router-link>
                </b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Header',
    methods: {
        ...mapMutations([
           'DELETE_TOKEN' 
        ]),

        signOut(evt) {
            this.DELETE_TOKEN(localStorage.token)
            this.$router.replace(this.$route.query.redirect || '/users/sign_in')
        }
    }
}
</script>

