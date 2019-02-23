import Vue from 'vue'

// 全局变量设置
declare global {
  interface PageBean {
    pageIndex: number
    pageSize: number
    total: number
    hasNextPage?: boolean
    hasPreviousPage?: boolean
    pageTotal?: number
  }
  interface ObjectRes {
    data: any
    pageBean: PageBean
    list: object[]
    entity: object
    retCode: string
    retDescription: string
  }
}

// iview 全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $ajax: any
    $Cookies: any
    $util: any
  }
}
