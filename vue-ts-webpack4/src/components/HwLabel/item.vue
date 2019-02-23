<template>
  <div class="hw-label-item">
    <div
      class="hw-label-title"
      v-if="label"
      :style="labelWidth? {'width':labelWidth} : ''"
    >
      {{label}}：
    </div>
    <slot />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class HwLabelItem extends Vue {
  @Prop({ default: '' }) private label: string
  @Prop({ default: '' }) private labelWidth: string
}
</script>
