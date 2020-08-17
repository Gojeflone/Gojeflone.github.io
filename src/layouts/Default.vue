<!--
---- Default.vue
---- Created on Sat Aug 08 2020
---- by Jeremy Gouveia
----
---- Copyright (c) 2020 Kismet Creative LLC
--->

<template> 
  <div class="default layout">
    <header class="header">
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav> -->
      <Header></Header>
    </header>
    <slot/>
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

export default {
  components: {
    Header,
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
