<template>
  <div id="app">
    <header-block />
    <router-view/>
  </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock';

export default {
  components: {
    HeaderBlock,
  },
};
</script>

<style lang="sass" src="@/styles/main.sass"></style>
