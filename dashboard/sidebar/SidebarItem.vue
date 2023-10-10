<script setup lang="ts">
import { useRoute } from "vue-router";

defineProps({
  to: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
const route = useRoute();
</script>
<script lang="ts">
export default {
  // Propriedades, métodos e lógica do componente
};
</script>

<template>
  <RouterLink :to="to">
    <span
      class="my-1 flex h-9 w-full items-center justify-start p-5 font-thin"
      :class="[
        route.path === to
          ? 'font-medium bg-white border-4  border-y-white border-r-white border-l-orange-600 text-orange-600 '
          : ' text-black',
      ]"
    >
      <span>
        <slot />
      </span>
      <span class="mx-4 text-sm font-normal">
        {{ title }}
      </span>
    </span>
  </RouterLink>
</template>
