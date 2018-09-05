<template>
    <div>
        <b-form @submit="onSubmit">
            <b-modal id="modal1" title="New User" ref="modal">
                <b-form-group id="exampleInputGroup1"
                                label="First Name"
                                label-for="exampleInput1">
                    <b-form-input id="exampleInput1"
                                type="text"
                                v-model="user.first_name"
                                placeholder="Enter first name">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1"
                                label="Last Name"
                                label-for="exampleInput1">
                    <b-form-input id="exampleInput1"
                                type="text"
                                v-model="user.last_name"
                                placeholder="Enter last name">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1"
                                label="Email"
                                label-for="exampleInput1">
                    <b-form-input id="exampleInput1"
                                type="email"
                                v-model="user.email"
                                placeholder="Enter Email">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup1"
                                label="Mobile"
                                label-for="exampleInput1">
                    <b-form-input id="exampleInput1"
                                type="text"
                                v-model="user.mobile"
                                placeholder="Enter mobile">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup3"
                                label="Role"
                                label-for="exampleInput3">
                    <b-form-select id="exampleInput3"
                                :options="userTypes"
                                v-model="user.role_id">
                    </b-form-select>
                </b-form-group>

                <div slot="modal-footer" class="w-100">
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <router-link to="/users">
                        <b-btn size="sm" class="float-right" variant="primary">
                            Close
                        </b-btn>
                    </router-link>
                </div>
            </b-modal>
        </b-form>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: mapState([
            'user',
            'userTypes'
        ]),
        mounted() {
            this.$refs.modal.show()
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                console.log("form submitting.....")
                
                this.$http.post("/users", { user: this.user}).then((result) => {
                    console.log(result)                    
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
    }
</script>

