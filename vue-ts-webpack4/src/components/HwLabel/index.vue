<template>
  <section
    class="hw-label"
    :class="[`align-${align}`]"
  >
    <slot />
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class HwLabel extends Vue {
  @Prop({ default: '' }) private align: string
}
</script>
