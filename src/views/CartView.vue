<template>
  <div>
    <main class="cart-checkout">
      <h2>meu carrinho</h2>
      <div>
        <div class="prod-checkout" v-for="product in allProducts" :key="product.id">
          <a class="prod-item">
            <CardProductComponent class="prod-cart-container" :id="product.id" :img="product.image"
              :produto="product.title" :price="product.price" />
            <div>
              <AddToCartComponent :quant="product.filteredrepeats" />

              <div class="prod-price">
                R$ <span id="price">
                  {{ product.subtotal.toLocaleString('pt-br', {
                      minimumFractionDigits:
                        2
                    })
                  }}
                </span>
              </div>
            </div>
          </a>
        </div>
        <div class="prod-checkout">
          {{ total > 0 ? 'SUBTOTAL' : '' }}
          <div class="prod-price">
            <span id="price">
              {{ total > 0 ? 'R$' + total : 'NENHUM ITEM.' }}
            </span>
          </div>
          <button class="btn-finalizar">FINALIZAR PEDIDO</button>
        </div>
      </div>

    </main>
  </div>
</template>

<script>

import AddToCartComponent from '../components/AddToCartComponent.vue';
import CardProductComponent from '@/components/CardProductComponent.vue';
import _ from 'lodash'
export default {
  components: { CardProductComponent, AddToCartComponent },
  data() {
    return {
      allProducts: [],
      total: null
    }
  },
  mounted() {
    //tudo que está persistido no localstorage + vuex está aqui
    let cart = JSON.parse(localStorage.getItem("items"))

    if (this.$store.state.quantity === null || this.$store.state.quantity.totalUnit === null) {
      localStorage.clear()
    } else {

      this.$store.dispatch("getcartCheckoutitems", cart)
      //todos os produtos recebem o valor do locastorage
      this.allProducts = cart;

      //percorro o objeto
      for (const iterator of cart) {

        //filtro quantas repetições tem daquele id no storage
        const filtered = this.allProducts.filter(item => item.id === iterator.id);

        //e adiciono o tamanho dela como propriedade
        iterator['filteredrepeats'] = filtered.length

        // aqui faço o cálculo dos subtotais
        iterator['subtotal'] = parseFloat(iterator.price) * parseFloat(iterator.filteredrepeats)
        console.log(iterator.subtotal);


      }

      //somo todos os valores para o total
      this.total = this.allProducts.map(item => item.subtotal).reduce((prev, curr) => prev + curr, 0);

      //aqui ele faz o dispatch pro vuex
      this.$store.dispatch("getcartCheckoutitems", this.allProducts)

      /* quando chegar aqui, todos os itens do carrinho já filtrados e sem repetições 
      mostrarão a nova propriedade "filteredrepeats"
      usei o uniqBy do lodash para mostrar apenas uma instancia do produto, enquanto
      o número de repetições dele (que no input é a auantidade) está na propriedade "filteredrepeats" */
      this.allProducts = _.uniqBy(this.allProducts, 'id')
      console.log(this.allProducts);

    }
  },

}
</script>

<style scoped lang="scss">
@import "../assets/css/colors.scss";
.prod-price {
  color: $input-focus;
  font-weight: 700;
}

.prod-cart-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

.cart-checkout {
  margin: auto;
  flex-direction: column;

}

.prod-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.cart-checkout h2 {
  font-size: 2rem;
  color: $txt-bold-title;
  font-weight: 600;
  text-align: center;
  padding-left: 2%;
  padding-bottom: 1%;
  text-transform: uppercase;
}

.prod-checkout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-finalizar {
  width: 30vw;
  height: 8vh;
  padding: 1.5%;
  margin: 2%;
  background-color: rgba(226, 6, 101, 0.9);
  color: antiquewhite;
  border: none;
  font-weight: 600;
  border-radius: 5px;
  font-size: 1.2rem;
}

.btn-finalizar:hover {
  background-color: rgba(189, 15, 90, 0.9);
}

@media screen and (max-width: 768px) {
  .btn-finalizar {
    width: 70vw;
    padding: 5%;
    margin: 5%;
  }

  .prod-item,
  .prod-cart-container {
    flex-direction: column;
  }

  .prod-checkout,
  .cart-checkout {
    padding: 5%;
  }

}
</style>