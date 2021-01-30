<template>
  <div class="basketItem">
    <img :src="imageSrc" class="basketItem-image" alt="" />
    <div class="basketItem-info">
      <p class="basketItem-title">{{title}}</p>
      <p class="basketItem-price">
        <small>$</small>
        <strong>{{price}}</strong>
      </p>
      <div class="basketItem-rating">
        <Star v-for="(ele, i) in productRating" :key="i" />   
      </div>      
        <button v-if="!hideButton" @click="removeFromBasket">&nbsp;Remove from basket&nbsp;</button>            
    </div>
  </div>
</template>
<script>
import Star from 'vue-material-design-icons/Star.vue';
import { mapActions } from 'vuex'

export default {
  name: "CartItem",
  props: {
    hideButton: Boolean,
    id: String,
    title: String,
    price: Number,
    imageSrc: String,
    rating: Number
  },
  components: {
    Star
  },
  computed: {
    productRating () {
      return Array(this.rating).fill();
    }
  },
  methods: {
    ...mapActions(['removeFromCart']),
    removeFromBasket () {
      this.removeFromCart(this.id);
    }
  }
}
</script>
<style>
.basketItem {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
}

.basketItem-info {
  padding-left: 20px;
}

.basketItem-title {
  font-size: 17px;
  font-weight: 800;
}

.basketItem-info > button {
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 5px;
  color: #111;
}

.basketItem-image {
  object-fit: contain;
  width: 180px;
  height: 180px;
}

.basketItem-rating {
  color: yellow;
}
</style>