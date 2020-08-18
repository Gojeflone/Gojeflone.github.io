<!--
---- Nav.vue
---- Created on Sun Aug 09 2020
---- by Jeremy Gouveia
----
---- Copyright (c) 2020 Kismet Creative LLC
--->

<template>
<div class="nav row container-inner">
    <b-col cols="12">
        <b-navbar type="dark" toggleable="true" class="pl-0 pr-0">
            <b-navbar-brand to="/" class="d-flex align-items-center">
                <g-image src="~/assets/images/logos/logo2.png" width="50" class="brand-image"></g-image>
                <h6 class="pl-3 mb-0" :class="isScrolling ? 'd-block' : 'd-none'">Jeremy Gouveia</h6>
            </b-navbar-brand>         
            <b-navbar-nav class="d-flex flex-row">
                <b-nav-item to="/projects/" class="p-2">projects</b-nav-item>
                <b-nav-item to="/about/" class="p-2">about</b-nav-item>
                <b-nav-item to="/contact/" class="p-2">contact</b-nav-item>
            </b-navbar-nav>    
        </b-navbar>
    </b-col>    
</div>    
</template>

<script>
export default {
    props: {
        isScrolling: true
    }
    
}
</script>

<style lang="scss" scoped> 

</style>