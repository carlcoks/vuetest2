<template>

  <header class="header">
    <div class="header-block" :class="fixed ? 'fixed' : ''">
      <div class="wr">
        <ul class="menu">
          <menu-item-list v-for="(item, i) in menuList" :key="i" :item="item"/>
        </ul>
      </div>
    </div>
  </header>

</template>

<script>
import { mapState } from 'vuex';
import MenuItemList from '@/components/MenuItemList';

export default {
  components: {
    MenuItemList,
  },
  data() {
    return {
      fixed: false,
    }
  },
  computed: {
    ...mapState(['menuList']),
  },
  mounted() {
    this.sticky();
  },
  methods: {
    sticky() {
      this.check = () => {
        this.fixed = document.documentElement.scrollTop > 100;
      }
      window.addEventListener('scroll', this.check)
    },
  },
};
</script>

<style lang="sass" scoped>
.header
  width: 100%
  &-block
    width: 100%
    background: #999
    transition: background-color .3s
    &.fixed
      top: 0
      position: fixed
      background: rgba(0,0,0,.5)
      z-index: 1000
  .menu
    display: flex
    align-items: center
</style>
