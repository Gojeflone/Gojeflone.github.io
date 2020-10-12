<!--
---- Contact.vue
---- Created on Mon Aug 17 2020
---- by Jeremy Gouveia
----
---- Copyright (c) 2020 Kismet Creative LLC
--->


<template>
    <Layout>
        <div class="Contact container-fluid page-container">
            <b-row>
                <b-col cols="12">
                    <h1>Contact Me</h1>
                </b-col>
            </b-row>

            <b-row class="contact-content">
                <b-col cols="12" lg="8" offset-lg="2">
                    <h4 class="blog-heading">Get in touch</h4>
                    <font-awesome-icon :icon="['fas', 'envelope']" size="6x" class="m-3"/>
                    <font-awesome-icon :icon="['fab', 'instagram']" size="6x" class="m-3" />
                    <font-awesome-icon :icon="['fab', 'facebook']" size="6x" class="m-3" />


                </b-col>
            </b-row>
        </div>
    </Layout>    
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>