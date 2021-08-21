import xButton from './xButton.vue'

export default {
  title: 'xButton',
  component: { xButton },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    },
    variant: {
      options: ['button--big', 'none'],
      control: { type: 'radio' }
    }
  }
}

const template = (args) => ({
  components: { xButton },
  data () {
    return { args }
  },
  template: `
    <xButton v-bind="args">Follow</xButton>
  `
})

export const Default = template.bind({})

Default.args = {
  variant: 'none'
}
