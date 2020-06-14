<template>
  <div class="container-fluid">
    <div class="container">
      <div class="is-pulled-left">
        Powered by Ciwaratech.
      </div>
    </div>
    <div class="container">
      <div class="is-pulled-right" style="">
        All Right Reserved. 2020
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>
<style lang="scss" scoped>
    .container, .container-fluid {
        display: flex;
        align-items: stretch;
        flex-direction: row;
        align-self: stretch;
        flex-grow: 2;
        background-color: lightgray;
        font-size: 12px;
        padding:5px;
    }
    .container:first-child {
      float: right;
    }
</style>
