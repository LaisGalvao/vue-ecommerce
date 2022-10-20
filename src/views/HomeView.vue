<template>
  <div>  
    <main>
      <h2>Destaques da loja</h2>
      <div class="products-wrapper">
        <div class="product" v-for="product in allProducts" :key="product.id">
          <a class="linkto-product" @click="goToProduct(product.id)">
            <CardProductComponent :id="product.id" :img="product.image" :produto="product.title"
              :price="product.price" />
          </a>

        </div>
      </div>

    </main>
  </div>
</template>

<script>

import CardProductComponent from '@/components/CardProductComponent.vue';
export default {
  components: { CardProductComponent },
  data() {
    return {
      allProducts: []
    }
  },
  mounted() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => { console.log(json); this.allProducts = json })
  },
  methods: {
    goToProduct(id) {
      this.$router.push({path: '/product/'+id})
      /* return console.log("até aqui me ajudou o Senhor", id); */
    }
  },
}
</script>

<style scoped lang="scss">
main {
  margin-top: 5%;
  width: 100%;
}

main h2{
  text-transform: uppercase;
}

.linkto-product {
  cursor: pointer;
}

.products-wrapper {
  max-width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
}

.product {
  display: flex;
  flex-direction: column;
  flex: 0 1 10%;
  margin-bottom: 5%;
  margin-left: 5%;
  margin-right: 1%;
}
</style>