<!--
---- Default.vue
---- Created on Sat Aug 08 2020
---- by Jeremy Gouveia
----
---- Copyright (c) 2020 Kismet Creative LLC
--->

<template> 
  <div class="default layout">
    <header class="header" v-bind:class="{ 'header-sticky' : isScrolling }">
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav> -->
      <Header :isScrolling="isScrolling"></Header> 
    </header>
    <slot/>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      scrollPosition: null,
      isScrolling: false
    }    
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition > 50) {
        this.isScrolling = true;
      } else {
        this.isScrolling = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}


.layout {
  max-width: 100%;
  margin: 0 auto;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
}

.nav__link {
  margin-left: 20px;
}
</style>
