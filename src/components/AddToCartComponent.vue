<template>
    <div>
        <div class="increment-prod">
            <span id="qtd">Quantidade:</span>
            <div class="increment-wrapper">
                <button id="decrement" @click="decrement">-</button>
                <!-- se está fora da tela de carrinho,o  value é uma props -->
                <input type="text" id="number" :value="$route.name !== 'Cart' ? quantity : quant" />
                <button id="increment" @click="increment">+</button>
            </div>

        </div>
        <slot>
            <!-- aqui fica o preço no componente filho-->
        </slot>
        <button class="btn-comprar" v-if="$route.name !== 'Cart'">COMPRAR</button>

    </div>
</template>

<script>
export default {
    props: {
        quant: {
            type: Number || String,
            default: Number
        }
    },
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        validateRoute() {
            return this.$route.name
        }
    },
    methods: {
        increment() {
            this.quantity++
            this.validateRoute === 'Cart' ?
                this.$store.dispatch("increment", this.quant) :
                this.$store.dispatch("increment", this.quantity)

        },
        decrement() {
            this.quantity--
            this.validateRoute === 'Cart' ?
                this.$store.dispatch("decrement", this.quant) :
                this.$store.dispatch("decrement", this.quantity)
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/css/colors.scss";
.btn-comprar {
    width: 30vw;
    height: 8vh;
    padding: 2%;
    background-color: rgba(226, 6, 101, 0.9);
    color: antiquewhite;
    border: none;
    font-weight: 600;
    border-radius: 5px;
    font-size: 1.2rem;
}

.btn-comprar:hover {
    background-color: rgba(189, 15, 90, 0.9);
}

.increment-prod {
    display: flex;
    flex-direction: row;
    padding-left: 8vw;
    padding-bottom: 5%;
    justify-content: center;
    margin: auto;
    align-items: stretch;
    padding-top: 5%;
}

.increment-wrapper {
    width: 10vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    border: solid 2px $text-bold-price;
    border-radius: 10px;
    padding: 0 0 1% 0;
    gap: 5%;
    height: 5vh;
}

#qtd {
    margin-top: 5%;
    padding-right: 5%;
}

#number {
    width: 1vw;
    border: none;
    margin-top: 9%;
}

#number:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

#increment,
#decrement {
    border: none;
    font-size: 2rem;
    color: gray;
    margin: 0 5% 0 5%;
    cursor: pointer;
}


@media screen and (max-width: 768px) {
    .increment-wrapper {
        width: 35vw;
    }

    .btn-comprar {
        width: 70vw;
    }

    #number {
        width: 2vw;
    }

    .increment-prod {
        padding-top: 15%;
    }

}
</style>