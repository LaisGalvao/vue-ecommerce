import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        quantity: localStorage.getItem("quantity"),
        price: null,
        totalUnit: localStorage.getItem("total"),
        allProducts: [],
        cartCheckoutitems: [],
        product: {}
    },
    getters: {
        quantity: state => state.quantity,
        price: state => state.price,
        totalUnit: state => state.totalUnit,
        allProducts: state => state.allProducts,
        product: state => state.product,
        cartCheckoutitems: state => state.cartCheckoutitems
    },
    mutations: {
        getAllProducts: (state, payload) => {
            fetch(
                `https://fakestoreapi.com/products/category/${payload}`
            )
                .then((res) => res.json())
                .then((json) => {
                    state.allProducts = json

                })
        },
        getcartCheckoutitems: (state, payload) => {
            state.cartCheckoutitems = payload
        },
        increment: (state) => {
            state.quantity++
            state.totalUnit = parseFloat(state.price) * parseFloat(state.quantity)
            if (localStorage.getItem("items") !== null) {
                state.allProducts = JSON.parse(localStorage.getItem("items"))
            }
            state.allProducts.push(state.product)

            localStorage.setItem("items", JSON.stringify(state.allProducts));

            localStorage.setItem("total", state.totalUnit)
            localStorage.setItem("quantity", state.quantity)
        },
        decrement: (state, payload) => {
            state.quantity--
            //faço a tratativa para que quando o cálculo chegar a zero ele remover
            //alguns items do localstorage e retornar a mensagem de carrinho vazio
            if (state.totalUnit > 0) {
                state.totalUnit = parseFloat(state.totalUnit - state.price)
                state.allProducts.splice(payload, 1)

                localStorage.setItem("items", JSON.stringify(state.allProducts))

                localStorage.setItem("total", state.totalUnit)
                localStorage.setItem("quantity", state.quantity)
            } else {
                state.totalUnit = 0
                localStorage.removeItem("total")
                localStorage.removeItem("quantity")


            }


        },
    },
    actions: {
        getAllProducts(context, payload) {
            context.commit("getAllProducts", payload)
        },
        getcartCheckoutitems(context, payload) {
            context.commit("getcartCheckoutitems", payload)
        },
        increment(context, payload) {
            context.commit("increment", payload)
        },
        decrement(context, payload) {
            context.commit("decrement", payload)
        }
    },
    modules: {

    }
})