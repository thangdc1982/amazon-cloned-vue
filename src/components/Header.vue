<template>
  <div class="header">
      <router-link to="/">
        <img src="../images/amazon-png-logo.png" class="header_logo" alt="Amazon Main Logo" />
      </router-link>
      <div class="header_search">
        <input class="header_searchInput" type="text" />
        <Magnify class="header_searchIcon"></Magnify>
      </div>
      <div class="header_nav">
        <router-link to="/login">
          <div @click="handleAuthentication" class="header_option">
            <span class="header_optionLineOne">Hello, {{user ? user.email : 'Guest'}}</span>
            <span class="header_optionLineTwo">
              {{user ? 'Sign Out' : 'Sign In'}}
            </span>
          </div>
        </router-link>
        <div class="header_option">
          <span class="header_optionLineOne">Returns</span>
          <span class="header_optionLineTwo">& Orders</span>
        </div>
        <div class="header_option">
          <span class="header_optionLineOne">Your</span>
          <span class="header_optionLineTwo">Prime</span>
        </div>
        <router-link to="/checkout">
          <div class="header_optionBasket">
            <Cart></Cart>
            <span class="header_optionLineTwo header_basketCount">
              {{getNumberItems}}
            </span>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
import Magnify from 'vue-material-design-icons/Magnify.vue';
import Cart from 'vue-material-design-icons/Cart';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Header',  
  components: {
    Magnify,
    Cart
  },
  computed: mapGetters(['getNumberItems', 'user']),
  methods: {
    ...mapActions(['signIn', 'signOut']),
    handleAuthentication() {
      if (this.user) {
        // If the user exist, then log out
        this.signOut();
        this.$router.push('/');
      } else {
        // navigate to the Login page
        this.$router.push('/login');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header_logo {
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
}

.header_search {
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
}

.header_searchInput {
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
}

.header_searchIcon {
  padding: 5px;
  height: 22px !important;
  background-color: #cd9042;
}

.header_nav {
  display: flex;
  justify-content: space-evenly;
}

.header_option {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
}

.header_optionLineOne {
  font-size: 10px;  
}

.header_optionLineTwo {
  font-size: 13px;
  font-weight: 800;  
}

.header_optionBasket {
  display: flex;
  align-items: center;
  color: white;
}

.header_basketCount {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
