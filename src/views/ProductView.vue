<template>
  <div>
    <main class="product-container">
      <h2>{{ product.title }}</h2>
      <div class="product-desc">
        <img class="prod-img" :src="product.image" alt="">

        <div class="description">{{ product.description }}

          <AddToCartComponent>
            <div class="prod-price"> R$ <span id="price">{{ product.price }}</span>
            </div>
          </AddToCartComponent>

        </div>
      </div>
    </main>
  </div>
</template>

<script>

import AddToCartComponent from '../components/AddToCartComponent.vue';
export default {
  components: { AddToCartComponent },
  data() {
    return {
      product: []
    }
  },
  created() {
    this.$nextTick().then(this.getProducts)
  },
  methods: {
    getProducts() {
      fetch('https://fakestoreapi.com/products/' + this.$route.params.id)
        .then(res => res.json())
        .then(json => {
          console.log(json); this.product = json
          this.$store.state.product = this.product
          this.product.price = this.product.price.toLocaleString('pt-br', {
            minimumFractionDigits:
              2
          })
          this.$store.state.price = this.product.price
        })
    },
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/colors.scss";
.product-container h2 {
  font-size: 2rem;
  color: $txt-bold-title;
  font-weight: 600;
  text-align: justify;
  padding-left: 2%;
  padding-bottom: 5%;
  text-transform: uppercase;
}

.product-container {
  margin: auto;
  flex-direction: column;
  padding-bottom: 5%;
}

@media screen and (max-width: 768px) {
  .product-container {
    flex-direction: column;
  }

  .product-desc {
    display: flex;
    flex-direction: column !important;
    justify-content: center;
  }

  .product-container h2 {
    text-align: center;
  }

  .prod-img {
    width: 50vw !important;
    padding-bottom: 10%;
    position: relative;
  }

}

.prod-img {
  width: 15vw;
  background-size: contain;
  margin: auto;
  padding-left: 15vw;
  padding-right: 15%;
  position: relative;
}

.prod-price {
  color: $text-bold-price;
  font-weight: 700;
  text-align: end;
  padding-right: 10%;
  padding-bottom: 5%;
  font-size: 1.5rem;
}

.product-desc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.description {
  text-align: left;
  margin: auto;
  padding-left: 15vw;
  padding-right: 8%;
  font-size: 0.9rem;
}
</style>