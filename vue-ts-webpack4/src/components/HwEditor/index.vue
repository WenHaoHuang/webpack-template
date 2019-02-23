<template>
  <quill-editor
    :content="content"
    :options="editorOption"
    @change="onEditorChange($event)"
    class="hw-quill-editor"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

@Component({ components: { quillEditor } })
export default class HwEditor extends Vue {
  @Model('change') private content: string
  // @Prop({ type: String, default: '' }) private content: string
  private editorOption: object = {
    placeholder: '请输入公告内容',
    modules: {
      toolbar: [
        // ['bold', 'italic', 'underline', 'strike'],
        // ['blockquote', 'code-block'],
        // [{ header: 1 }, { header: 2 }],
        // [{ list: 'ordered' }, { list: 'bullet' }],
        // [{ script: 'sub' }, { script: 'super' }],
        // [{ indent: '-1' }, { indent: '+1' }],
        // [{ direction: 'rtl' }],
        // [{ size: ['small', false, 'large', 'huge'] }],
        // [{ header: [1, 2, 3, 4, 5, 6, false] }],
        // [{ font: [] }],
        // [{ color: [] }, { background: [] }],
        // [{ align: [] }],
        // ['clean'],
        // ['link', 'image', 'video']
        ['bold', 'italic', 'underline', 'strike'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ['clean'],
        ['link', 'image']
      ]
    }
  }
  private onEditorChange(editor: any) {
    this.$emit('change', editor.html)
  }
}
</script>
