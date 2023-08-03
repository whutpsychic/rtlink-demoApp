<template>
  <div :class="cls">
    <RouterView />
  </div>
</template>

<script >
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    return {
      cls: computed(() => store.state.style)
    }
  }
}

</script>

