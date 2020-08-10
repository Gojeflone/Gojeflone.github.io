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
                    <g-image src=".././assets/images/teaser/code.jpg" class="teaser-image img-fluid"></g-image>
                </b-aspect> 
            </b-col> 
        </b-row>
        <b-row no-gutters class="teaser-heading-row vh-100 vw-100 text-center position-absolute" align-v="center">
            <b-col>
                <h1 class="teaser-heading heading-one">{{heading}}</h1>
            </b-col>
        </b-row> 
    </b-container>       
</template>

<script>
export default {
    data() {
        return {
            heading: 'Jeremy Gouveia'
        }
    }
}
</script>

<style lang="scss"> 
    .teaser-heading-row {
        top: 0;
    }

    .teaser-image {
        filter: brightness(0.7);
    }




</style>