import Vue from 'vue'
// 全局变量设置
declare global {}

// iview 全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $ajax: any
  }
}
