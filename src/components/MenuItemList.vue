<template>

  <li class="menu-item">
    <router-link :to="item.link" class="menu-item__link">{{ item.name }}</router-link>
  </li>

</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style lang="sass" scoped>
.menu
  &-item
    &__link
      padding: 15px 20px
      display: block
      color: #000
      font-size: 20px
      &:hover
        color: #777

@media screen and (max-width: 480px)
  .menu
    &-item
      &__link
        padding: 15px 10px
        font-size: 18px
</style>
