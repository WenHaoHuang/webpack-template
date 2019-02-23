<template>
  <div class="section-menu-sub">
    <router-link
      :to="{path:item.path}"
      v-if="!hasChild(item)"
      class="nav-item"
      @click="itemFn(item)"
    >{{item.meta.title}} </router-link>
    <div
      v-if="hasChild(item)"
      class="nav-sub"
    >
      <div class="nav-title">{{item.meta.title}}</div>
      <nav-menu
        :item="child"
        v-for="child in item.children"
        :key="child.id"
      />
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'NavMenu',
  props: {
    item: Object
  },
  methods: {
    hasChild(item) {
      return item.children && item.children.length > 0
    },
    itemFn(item) {
      this.$router.push({
        name: item.name
      })
    }
  }
}
</script>
