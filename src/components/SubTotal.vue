<template>
  <div class="subtotal">
    <div class="subtotal-contain">
      <p>Subtotal {{allItems? allItems.length : 0}} items <strong>${{getTotalPrice}}</strong></p>
    </div>
    <button @click="gotoPayment" 
      :disabled="allItems.length === 0"
      :class="allItems.length === 0 ? 'subtotal-button-disable' : 'subtotal-button-active'">        
        Proceed To Checkout
      </button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: "SubTotal",    
  computed: mapGetters(['allItems', 'getTotalPrice']),
  methods: {
    gotoPayment () {
      this.$router.push('/payment');
    }
  }
}
</script>
<style>
.subtotal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
}

.subtotal-button-active {
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
}

.subtotal-button-disable {
  background: gray;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
}
</style>