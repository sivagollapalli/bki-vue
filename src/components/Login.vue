<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Enter Password">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',
  computed: mapState([
    'form'
  ]),
  created(){
    this.checkUserLoggedIn()
  },
  updated() {
    this.checkUserLoggedIn()
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))

      this.$http.post('/users/sign_in', this.form)
      .then(response => this.loginSuccessful(response))
       .catch(() => this.loginFailed())
    },
    loginSuccessful (res) {
   
      if (!res.headers['x-access-token']) {
          this.loginFailed()
          return
      }

      localStorage.token = res.headers['x-access-token']
      this.error = false
      this.checkUserLoggedIn()
    },

    checkUserLoggedIn() {
      if(localStorage.token){
        this.$router.replace(this.$route.query.redirect || '/users')
      }
    },
    loginFailed () {
        this.error = 'Login failed!'
        delete localStorage.token
    }
  }
}
</script>
