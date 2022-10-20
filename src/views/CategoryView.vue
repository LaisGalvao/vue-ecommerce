<template>
  <div>
    <main>
      <div class="title-category-wrapper">
        <h2>{{ category }}</h2>
        <select name="filterBy" id="filter" v-model="selected">
          <option value="">Ordenar por</option>
          <option v-for="opt in options" :value="opt" :key="opt">{{ opt.text }}</option>
        </select>

      </div>
      <div class="products-wrapper">
        <div class="product" v-for="product in allProducts" :key="product.id">
          <a class="linkto-product" @click="$router.push({ path: '/product/' + product.id })">
            <CardProductComponent :id="product.id" :img="product.image" :produto="product.title"
              :price="parseFloat(product.price)" />
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
      allProducts: [],
      category: this.$route.params.type.toUpperCase(),
      selected: null,
      options: [
        { value: 'rating', text: 'Avaliação' },
        { value: 'title', text: 'Nome' },
        { value: 'price', text: 'Preço' }
      ],

    }
  },
  computed: {
    filteredItems() {
      return this.allProducts.filter(el => {
        return el.title === this.selected.value
      }, this)
    }
  },
  mounted() {
    console.log(this.selected);
    fetch('https://fakestoreapi.com/products' + this.$route.fullPath)
      .then(res => res.json())
      .then(json => {
        console.log(json); this.allProducts = json

      })
  },
}
</script>

<style scoped lang="scss">
@import "../assets/css/colors.scss";

.title-category-wrapper {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding-left: 30vw;
}

.title-category-wrapper h2 {
  font-size: 2rem;
  color: $txt-bold-title;
  font-weight: 600;
}

select {
  width: 15vw;
  height: 7.5vh;
  border: solid 2px rgb(114, 91, 194);
  border-radius: 8px;
  font: 1.2rem sans-serif;
  color: $txt-bold-title;
  text-align: justify;
}

select:hover {
  border: solid 2px rgb(101, 60, 155);
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
</style>