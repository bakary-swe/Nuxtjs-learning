<template>
    <div>
        <Header />
        <div class="container-fluid">
            <div class="backround-overlay"></div>
            <div class="container-content">
                <div class="columns">
                    <div class="column">Hello Text</div>
                    <div class="column">Video demo</div>
                </div>
            </div>
        </div>
        <section class="section">
            Tchenologies
        </section>
        <section class="section">
            Hot technologies
        </section>
        <Footer/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
    components: {
        Header, Footer
    }
});
</script>

<style lang="scss" scoped>
.container-fluid {
    height: 100vh;
    background: url("~assets/images/wallpaper_index.jpg");
    background-repeat: no-repeat;

    .backround-overlay {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background: rgba(0, 0, 0, 0.5);
    }
    .container-content {
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
