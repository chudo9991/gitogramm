import { ref, onMounted, onBeforeUnmount } from 'vue'

export default (props, emit) => {
  const isActive = ref(false)
  const emitOnFinish = () => {
    emit('onFinish')
    console.log('onFinish')
  }
  const setActive = () => {
    isActive.value = true
  }
  const indicator = ref(null)

  onMounted(() => {
    console.log(!props.isLastSlide)
    setTimeout(
      setActive, 1000
    )
    // if (!props.isLastSlide) {
    //   indicator.value.addEventListener('transitionend', emitOnFinish())
    // }
  })

  onBeforeUnmount(() => {
    // indicator.value.removeEventListener('transitionend', emitOnFinish())
  })

  return { isActive, emitOnFinish, setActive, indicator }
}
