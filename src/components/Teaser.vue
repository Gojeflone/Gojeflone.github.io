<!--
---- Teaser.vue
---- Created on Sat Aug 08 2020
---- by Jeremy Gouveia
----
---- Copyright (c) 2020 Kismet Creative LLC
--->

<template>
    <b-container fluid class="pl-0 pr-0 position-relative">
        <b-row no-gutters>
            <b-col cols="12">        
                <b-aspect aspect="3:2">
                    <g-image src=".././assets/images/teaser/code.jpg" class="img-fluid"></g-image>
                </b-aspect> 
            </b-col> 
        </b-row>
        <b-row class="teaser-heading vh-100 vw-100 text-center position-absolute" align-v="center">
            <b-col>
                <h1>Digital Architect</h1>
            </b-col>
        </b-row> 
    </b-container>       
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.teaser-heading {
    top: 0;
}
</style>