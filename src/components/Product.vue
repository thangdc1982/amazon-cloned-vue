<template>
  <div class="product">
    <div class="product_info">
      <p>{{title}}</p>
      <p class="product_price">
        <small>$</small>
        <strong>{{price}}</strong>
      </p>
      <div class="product_rating">
        <Star v-for="(ele, i) in productRating" :key="i" />        
      </div>
    </div>
    <img :src="imageSrc" alt="">
    <button @click="addToBasket">Add to Basket</button>
  </div>
</template>
<script>
import Star from 'vue-material-design-icons/Star.vue';
import { mapActions } from 'vuex'

export default {
  name: "Product",
  components: {
    Star
  },
  data() {
    return {
      rate : []
    }
  },
  computed: {
    productRating () {
      return Array(this.rating).fill();
    }
  },
  props: {
    id: String,
    title: String,
    price: Number,
    imageSrc: String,
    rating: Number
  },
  methods: {
    ...mapActions(['addToCart']),
    addToBasket () {
      this.addToCart({
        id: this.id,
        title: this.title,
        price: this.price,
        imageSrc: this.imageSrc,
        rating: this.rating
      });
    }
  }
}
</script>
<style>
.product {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;

  background-color: white;
  z-index: 1;
}

.product > img {
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
}

.product > button {
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  columns: #111;
  border-radius: 5px;
}

.product_rating {
  color: yellow;
  display: flex;
}

.product_info {
  height: 100px;
  margin-bottom: 15px;
}

.product_price {
  margin-top: 5px;
}
</style>