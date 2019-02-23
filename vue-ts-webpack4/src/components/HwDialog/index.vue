<template>
  <section class="hw-dialog">
    <div class="dialog__wrapper"></div>
    <div
      class="dialog__main"
      :style="{width:width,height:height}"
    >
      <div
        class="dialog__head"
        v-if="title"
      >
        <span class="item__title">{{title}}</span>
        <i
          class="item__close el-icon-close"
          @click="cancelFn"
        />
      </div>
      <div class="dialog__body">
        <slot />
      </div>
      <div
        class="dialog__foot text-right"
        v-if="!hideFooter"
      >
        <el-button
          @click="cancelFn"
          type="default"
        >取消</el-button>
        <el-button
          :loading="$store.state.loading"
          @click="confirmFn"
          type="primary"
        >确定</el-button>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class HwDialog extends Vue {
  @Prop({ default: '600px' }) private width?: string
  @Prop({ default: '' }) private height?: string
  @Prop({ default: '' }) private title?: string
  @Prop({ type: Boolean, default: false }) private hideFooter?: boolean

  private cancelFn() {
    this.$emit('onCancel')
  }
  private confirmFn() {
    this.$emit('onConfirm')
  }
}
</script>
