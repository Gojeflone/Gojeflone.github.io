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
    <div class="Index container-fluid page-container">
      <b-row class="index-content">
        <b-col cols="12" class="pl-0 pr-0">
          <g-image src=".././assets/images/index/AdobeStock_349361491.jpeg" class="img-fluid"></g-image>
        </b-col>
        <b-col cols="12" lg="8" offset-lg="2">

          <h4 class="blog-heading mt-5">"Digital Real Estate Agent"</h4>
          <h3 class="blog-heading mt-4">Online properties have never been cheaper</h3>
          <p class="mt-4">
            In this ever-changing digital landscape, there is a market for everyone. If you can envision it, you can
            make it come true. I'm all about enabling people to reach their potential. Online can be daunting. Most people
            prefer to stay as an audience, but there is much to be gained by getting involved.

            Take a look around and see what I have to offer, what I'm working on, and who I'm working with.
          </p>

          <p class="mt-3">People underestimate the power of online presence. With automation on the rise, and this age of information,
          creativity will be the last commodity that is scaled. I'm here to help you leverage yourself on the net.</p>
        </b-col>
        <b-col cols="12" lg="8" offset-lg="2" class="mt-5">
          <!--
          <h4 class="blog-heading">Disrupting industry, creating ripples</h4>
          <h3 class="blog-heading">Whether it's revamping a </h3>
          -->
        </b-col>
      </b-row>
    </div>


    <!--
    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
    -->

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
