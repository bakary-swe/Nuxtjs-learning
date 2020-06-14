<template>
  <div>
    <Header active-option="Courses" />
    <div class="container-fluid">
      
    </div>
    <section />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Header from '~/components/Header.vue'
export default Vue.extend({
  components: {
    Header
  }
})
</script>
