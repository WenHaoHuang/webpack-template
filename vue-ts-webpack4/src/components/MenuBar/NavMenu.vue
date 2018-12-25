<template>
  <div class="section-menu-sub">
    <router-link :to="{path:item.path}"
      v-if="!hasChild(item)"
      class="nav-item"
      @click="itemFn(item)">{{item.meta.title}} </router-link>
    <div v-if="hasChild(item)"
      class="nav-sub">
      <div class="nav-title">{{item.meta.title}}</div>
      <nav-menu :item="child"
        v-for="child in item.children"
        :key="child.id" />
    </div>
  </div>
</template>
 
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  props: {
    item: Object
  }
})
export default class NavMenu extends Vue {
  private hasChild(item) {
    return item.children && item.children.length > 0
  }
  private itemFn(item) {
    this.$router.push({
      name: item.name
    })
  }
}
</script>
<style lang="scss">
@import '~styles/var';
.menu-sub {
  .nav-title,
  .nav-item {
    display: flex;
    align-items: center;
    height: $menuItemHeight;
    cursor: pointer;
  }
  .nav-item {
    transition: all 0.3s ease-out 0s;
    &:hover {
      color: $menuHover;
    }
    &.active {
      color: #fff;
      background-color: $menuHover;
    }
  }
  > .nav-sub {
    > .nav-title {
      position: relative;
      padding: 0 20px;
      &:after {
        position: absolute;
        z-index: 2;
        top: 50%;
        right: 20px;
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-right: 1px solid #555;
        border-bottom: 1px solid #555;
        transform: translateY(-50%) rotate(45deg);
        transition: transform 0.3s ease-out 0s;
      }
    }
  }
  &.section-menu-sub {
    > .nav-item {
      padding: 0 20px;
    }
    > .nav-sub {
      > .section-menu-sub {
        > .nav-item {
          padding: 0 20px 0 40px;
        }
        > .nav-sub {
          > .nav-title {
            position: relative;
            padding: 0 20px 0 40px;
            &:after {
              position: absolute;
              z-index: 2;
              top: 50%;
              right: 20px;
              content: '';
              display: block;
              width: 6px;
              height: 6px;
              border-right: 1px solid #555;
              border-bottom: 1px solid #555;
              transform: translateY(-50%) rotate(45deg);
              transition: transform 0.3s ease-out 0s;
            }
          }
          > .section-menu-sub {
            > .nav-item {
              padding: 0 20px 0 60px;
            }
          }
        }
      }
    }
  }
}
.menu-list {
  > .nav-menu {
    .nav-item {
      cursor: pointer;
    }
    > .nav-sub {
      > .nav-menu {
        > .nav-item {
          padding-left: 40px;
        }
      }
      > .nav-title {
        position: relative;
        &:after {
          position: absolute;
          z-index: 2;
          top: 50%;
          right: 20px;
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-right: 1px solid #fff;
          border-bottom: 1px solid #fff;
          transform: translateY(-50%) rotate(-45deg);
          transition: transform 0.3s ease-out 0s;
        }
        &:hover {
          &:after {
            transform: translateY(-50%) rotate(45deg);
          }
        }
      }
    }
  }
}
</style>
