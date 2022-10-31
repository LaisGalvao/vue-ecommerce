<template>
  <div :id="id" class="card-product">
    <img class="card-img" :src="img" alt="">
    <p v-if="$route.name !== 'Cart'" class="product-title">
      {{ produto }}
    </p>
    <a :class="$route.name !== 'Cart' ? 'product-title' : 'product-title-cart'"
      @click="$router.push({ path: '/product/' + id })" v-if="$route.name === 'Cart'"> {{ produto
      }}</a>
    <p class="card-price" v-if="$route.name !== 'Cart'">
      R${{ price.toLocaleString('pt-br', { minimumFractionDigits: 2 }) }}
    </p>
  </div>

</template>

<script>
export default {
  props: {
    id: {
      type: Number, required: true
    },
    produto: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      default: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/colors.scss";
.card-img {
  width: 80%;
}

.product-title {
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;
}

.product-title-cart {
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;
  margin: auto;
  cursor: pointer;
  padding: 5vw;
}

.card-product {
  width: 10rem;
}

.card-price {
  color: $input-focus;
  font-weight: 700;
}
</style>