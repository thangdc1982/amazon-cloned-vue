<template>
  <div>
    <Header />
    <div class="payment">
      <div class="payment-title-header">
        <h1>Checkout {{allItems? "(" + allItems.length + " items)" : ""}}</h1>
      </div>      
      <div class="payment-container">
        <div class="payment-section">
          <div class="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div class="payment-address">
            <p><b>{{user ? user.email : "Guest"}}</b></p>
            <p>123 King Street</p>
            <p>Toronto, ON M6E 2V5</p>
          </div>
        </div>
        <div class="payment-section">
          <div class="payment-title">
            <h3>Reviews items for delivery</h3>
          </div>
          <div class="payment-items">
            <CartItem v-for="(item, i) in allItems"
              :key="i"
              :id="item.id"
              :price="item.price"
              :title="item.title"
              :rating="item.rating"
              :imageSrc="item.imageSrc"
              :hideButton="true"
            ></CartItem>  
          </div>
        </div>
        <div class="payment-section">
          <div class="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div class="payment-details">
            <form onSubmit={handleSubmit}>
              <StripeElementCard 
                ref="elementRef"
                :pk="pulishableKey"
                @token="tokenCreated"
                @change="handleChange"></StripeElementCard>
              <br />
              <div class="payment-priceContainer">
                <h3>Order Total: ${{getTotalPrice}}</h3>
                <button type="submit" :disabled="processing || disbale || succeeded">
                  <span>{{processing ? "Processing" : "Buy Now"}}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import CartItem from '../components/CartItem'
import { mapGetters } from 'vuex'
import { StripeElementCard } from '@vue-stripe/vue-stripe';

export default {
  name: "Payment",
  components: {
    Header,  
    CartItem,  
    StripeElementCard
  },
  data() {
    this.pulishableKey = "adfshdshf"; // process.env.STRIPE_PUBLISHABLE_KEY;
    return {
      processing: false, // Processing payment
      disbale: true,
      succeeded: false, // Completed payment
      token: null,
    }
  },
  computed: mapGetters(['user', 'allItems', 'getTotalPrice']),
  methods: {
    handleChange() {},
    tokenCreated (token) {
      console.log(token);
      // handle the token
      // send it to your server
    },
  }
}
</script>
<style>
.payment {
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
}

.payment-title-header {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: gray;
}

.payment-container > h1 {
  text-align: center;
  padding: 10px;
  font-weight: 400;
  background-color: rgb(234, 237, 237);
  border-bottom: 1px solid lightgray;
}

.payment-container > h1 a {
  text-decoration: none;
}

.payment-section {
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
}

.payment-title {
  flex: 0.2;
}

.payment-address,
.payment-items,
.payment-details {
  flex: 0.8;
}

.payment-details > form {
  max-width: 600px;
}

.payment-details > h3 {
  padding-bottom: 20px;
}

.payment-details > form > div > button {
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  font-weight: bolder;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
}  
</style>