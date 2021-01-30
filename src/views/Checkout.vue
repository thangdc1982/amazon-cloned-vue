<template>
<div>
  <Header />
  <div class="checkout">       
    <div class="checkout-left">
      <h3>Hello, {{user ? user.email : 'Guest'}}</h3>
      <h2 class="checkout-title">YOUR CART</h2>
      <CartItem v-for="(item, i) in allItems"
        :key="i"
        :id="item.id"
        :price="item.price"
        :title="item.title"
        :rating="item.rating"
        :imageSrc="item.imageSrc"
      ></CartItem>      
    </div>
    <div className="checkout-right">
      <SubTotal></SubTotal>
    </div>      
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartItem from '../components/CartItem'
import Header from '../components/Header'
import SubTotal from '../components/SubTotal'

export default {
  name: "Checkout",
  components: {
    Header, 
    CartItem,
    SubTotal
  },
  computed: mapGetters(['allItems', 'user'])
}
</script>
<style>
.checkout {
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
}

.checkout-left {
  width: 100%;
  margin-bottom: 10px;
}

.checkout-title {
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
} 
</style>