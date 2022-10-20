<template>
    <div class="card-cart">
        <IconCart />
        <span class="span-cart">{{ itens > 0 ? `${itens} itens` : 'Nenhum item' }} </span>
        <span class="span-cart"> {{ preco ? `R$ ${ preco }` : '0' }}</span>
    </div>
</template>

<script>
import IconCart from './icon/IconCart.vue';
export default {
    props: {
        itens: {
            type: String || Number,
            default: 0
        },
        preco: {
            type: Number,
            default: 0
        }
    },
    components: { IconCart }
}
</script>

<style scoped>
.card-cart {
    width: 150px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 2px 4px 7px rgb(134 134 134 / 20%);
    cursor: pointer;
}

.card-cart:hover {
    background-color: rgba(228, 225, 225, 0.863);
}

.span-cart {
    margin: auto;
    text-align: center;
}
</style>