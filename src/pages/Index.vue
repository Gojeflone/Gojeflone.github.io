<!--
---- Index.vue
---- Created on Sat Aug 08 2020
---- by Jeremy Gouveia
----
---- Copyright (c) 2020 Kismet Creative LLC
--->

<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <Teaser></Teaser>
    

    <h1>Hello, world!</h1>
    <h2>Hi</h2>

    <h3>lorem ipsum dolor est
      sdnaksjdbakjsd</h3>

    <p> 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p> 
      Test
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
import Teaser from "@/components/Teaser.vue";


export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Teaser,
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
