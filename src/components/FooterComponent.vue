<template>
    <footer class="footer">
        <div>
            <img src="../assets/vuejs-icon.svg" alt="Logo" id="logo_footer" />
        </div>
        <div class="links-wrapper">
            <p class="title-footer">Institucional</p>

            <a class="link-footer" href="#">Quem somos</a>
            <a class="link-footer" href="#">Política de privacidade</a>
            <a class="link-footer" href="#">Política de compra</a>
            <a class="link-footer" href="#">Política de troca e devolução</a>
            <a class="link-footer" href="#">Nossas lojas</a>
        </div>
        <div class="links-wrapper">
            <p class="title-footer">Ajuda</p>

            <a class="link-footer" href="">Fale conosco</a>
            <a class="link-footer" href="">Perguntas frequentes</a>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    background-color: antiquewhite;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: auto;
    top: 0;
    margin: 5% auto auto auto;
}

#logo_footer {
    /* width: 75%; */
    margin: 0;
    display: flex;
    justify-content: center;
}

.title-footer {
    margin-bottom: 5%;
    font-weight: 600;
    font-size: 1.2rem;
}

.links-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2%;
}

.link-footer {
    text-decoration: none;
    font-weight: 400;
    color: rgba(55, 65, 81, 0.98);
    font-size: 1.2rem;
    padding: 0.5rem;
}

.link-footer:hover {
    color: blueviolet;
}

@media screen and (max-width: 768px) {
    .footer {
        justify-content: center;
        flex-direction: column;
    }

    .links-wrapper {
        align-items: center;
        margin-bottom: 2%;
    }

    #logo_footer {
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
}
</style>