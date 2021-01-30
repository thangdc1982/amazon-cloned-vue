<template>
  <div class="login">
    <div class="login_container">
      <router-link to="/">
        <img src="../images/amazon-png-logo.png" alt="" className="login_image" />
      </router-link>
      <form>
        <h5>E-mail</h5>
        <input
          type="text"
          v-model="email"          
        />
        <h5>Password</h5>
        <input
          type="password"
          v-model="password"
        />
        <button class="login_signInButton" type="submit" @click="login">
          Sign In
        </button>
      </form>
      <p>
        By Signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
        Please see out Privacy Notice, our Cookies Notice and our
        Interest-Based Ads Notice
      </p>
      <button class="login_registerButton" @click="register">
        Create your Amazon Account
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { auth } from '../firebase';

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    }
  },  
  computed: mapGetters(['user']),
  created () {
    if (this.user) {
      // navigate to home page
      this.$router.push('/');
    }
  },
  methods: {
    ...mapActions(['signIn', 'createUser']),
    login(e) {
      e.preventDefault();
      auth 
        .signInWithEmailAndPassword(this.email, this.password)
        .then(authed => {
          this.signIn(authed.user);
          // navigate to home page
          this.$router.push('/'); 
        })
        .catch(error => alert(error.message));
    },
    register() {
      auth 
        .createUserWithEmailAndPassword(this.email, this.password)
        .then (authed => {
          this.createUser(authed.user); 
          // navigate to home page
          this.$router.push('/');      
        })     
        .catch(error => alert(error.message));        
    }
  }
}
</script>
<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 50px;
}

.login_image {
  background-color: black;
  object-fit: contain;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
}

.login_container {
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
}

.login_container > h1 {
  font-weight: 500;
  margin-bottom: 20px;
}

.login_container > form > h5 {
  margin-bottom: 5px;
}

.login_container > form > input {
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 98%;
  border-radius: 5px;
}

.login_container > p {
  margin-top: 15px;
  font-size: 12px;
}

.login_signInButton {
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  columns: #111;
  border-radius: 5px;
  width: 100%;
  height: 30px;
}

.login_registerButton {
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
  columns: #111;
  border-radius: 5px;
  width: 100%;
  height: 30px;
}
</style>