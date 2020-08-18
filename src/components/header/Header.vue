<!--
---- Header.vue
---- Created on Sun Aug 16 2020
---- by Jeremy Gouveia
----
---- Copyright (c) 2020 Kismet Creative LLC
--->

<template>
<div class="container-fluid">
    <Nav :isScrolling="isScrolling"></Nav>
</div>    
</template>

<script>
import Nav from "@/components/header/Nav.vue";

export default {
    components: {
        Nav
    },
    props: {
        isScrolling: false
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>

</style>