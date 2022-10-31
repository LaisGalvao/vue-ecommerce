<template>
    <header>
        <div class="nav-top">
            <router-link to="/">
                <img src="../assets/vuejs-icon.svg" alt="Logo" id="logo_header" />
            </router-link>

            <div class="search-wrapper">
                <input v-model="search" type="search" name="search" id="search_input"
                    placeholder="O que você está procurando?">
                <IconLupa class="lupa" />
                <div v-if="search" class="search-results">
                    <div class="results" v-for="r of searchData" :key="r.id">
                        <img class="results-img" width="120" :src="r.image" alt="">
                        <p>{{ r.title }}
                            <br>
                            <span class="result-price">
                                {{ r.price.toLocaleString('pt-br', { minimumFractionDigits: 2 }) }}
                            </span>
                        </p>
                    </div>
                </div>
            </div>



            <div class="cart-wrapper" @click="$router.push({ path: '/cart' })">
                <CartComponent :itens="quantity" :preco="price" />
            </div>
        </div>
        <nav class="nav-links">
            <a @click="goToCategory('electronics')">Eletronics</a>
            <a @click="goToCategory('jewelery')">Jewelery</a>
            <a @click="goToCategory(`men's clothing`)">Men's clothing</a>
            <a @click="goToCategory(`women's clothing`)">Women's clothing</a>
        </nav>
    </header>
</template>

<script>
import CartComponent from './CartComponent.vue';
import IconLupa from './icon/IconLupa.vue';
export default {
    components: { CartComponent, IconLupa },
    data() {
        return {
            search: null,
            allProducts: []
        }
    },
    computed: {
        quantity() {
            return this.$store.getters.quantity
        },
        price() {
            return this.$store.getters.totalUnit
        },
        searchData() {
            if (this.search) {
                return this.allProducts.filter(item => {
                    return this.search
                        .toLowerCase()
                        .split(" ")
                        .every(v => item.title.toLowerCase().includes(v));
                });
            } else {
                return "";
            }
        }
    },
    mounted() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => { console.log(json); this.allProducts = json })
    },
    methods: {
    goToCategory(type) {
      this.$router.push({path: '/products/category/'+ type})
      fetch(`https://fakestoreapi.com/products/category/${type}`)
      .then(res => res.json())
      .then(json => {
        console.log(json); this.allProducts = json

      })
      /* return console.log("até aqui me ajudou o Senhor", id); */
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/css/colors.scss";

header {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    top: 0;
    margin: auto;
    background-color: antiquewhite;
    box-shadow: 0px 10px 0px rgba(228, 225, 225, 0.98);
    ;
}

.nav-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding-left: 4%;
    padding-right: 4%;
}

.nav-links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    padding-left: 4%;
    padding-right: 4%;
}

.nav-links a {
    width: auto;
    padding-left: 6%;
    padding-right: 8%;
    padding-top: 2%;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    vertical-align: middle;
    cursor: pointer;
    color: rgba(55, 65, 81, 0.98);
    font-weight: 600;
    height: 5vh;
}

.nav-links a:hover {
    background-color: rgba(228, 225, 225, 0.98);
    border-radius: 10px;
}

#logo_header {
    width: 90%;
    margin: 0 auto;
}

.search-wrapper {
    display: flex;
    position: relative
}

#search_input {
    width: 55vw;
    height: 7.5vh;
    border: solid 2px rgb(114, 91, 194);
    border-radius: 8px;
    margin: 5%;
}

#search_input::-webkit-input-placeholder {
    color: rgb(170, 170, 170);
    padding: 5%;
    font-size: 1rem;
}

#search_input:focus {
    border-color: $input-focus;
}

#search_input:hover {
    border: solid 2px $input-focus;
}

.cart-wrapper {
    width: 20%;
    justify-content: flex-end;
}

.search-results {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    /* padding: 10vw; */
    margin: auto;
    top: 13vh;
    left: 5%;
    width: 50vw;
    height: auto;
    background-color: #fff;
    border: solid 1.5px $input-focus;
    border-radius: 0 0 10px 10px;
}

.results {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 5%;
    align-self: stretch
}

.results p {
    margin: auto;
    text-align: right;
}

.result-price {
    color: $input-focus;
    font-weight: 700;
}

@media screen and (max-width: 800px) {

    #logo_header {
        width: 55%;
        margin: 0;
    }

    .nav-links a {
        padding-left: 6%;
        padding-right: 8%;
        padding-top: 0%;
    }

    .nav-top {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: auto;
        padding-left: 0%;
        padding-right: 30%;
    }



}

@media screen and (max-width:700px) {
    #search_input {
        display: none;
    }

    .lupa {
        display: none;
    }

    .nav-links a {
        /*  margin-bottom: 1%; */
        padding-bottom: 10%;
    }
}



@media screen and (min-width:700px) and (max-width: 800px) {
    #search_input {
        width: 30vh;
        height: 10vh;
    }

    .search-results {
        width: auto;
    }

    .results {
        flex-direction: column;
    }
}


@media screen and (max-width: 768px) {
    .nav-links a {
        padding-left: 0;
        padding-right: 0%;
        padding-top: 4%;
        font-size: 0.9em;
    }

    .cart-wrapper {
        width: 20%;
        justify-content: center;
    }

}


@media screen and (min-width: 801px) and (max-width: 1024px) {
    #search_input {
        width: 70vh;
        height: 10vh;
    }

    .search-results {
        width: auto;
    }

    .results {
        flex-direction: column;
    }
}
</style>