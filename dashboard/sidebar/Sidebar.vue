<!-- eslint-disable vue/multi-word-component-names -->
<!--eslint-disable-next-line vue/multi-word-component-names -->
<script setup lang="ts">
import { sidebarOpen } from "../store";
import SidebarItems from "./SidebarItems.vue";

defineProps({
  mobileOrientation: {
    type: String,
    default: "end",
  },
});
</script>

<template>
  <aside
    class="w-34 scrollbar mb-20 mt-12 h-screen overflow-auto bg-gray-200"
    :class="[sidebarOpen ? 'absolute' : 'hidden']"
  >
    <div class="pr-0 pt-1 pb-1 lg:pb-1">
      <SidebarItems />
    </div>
    <div class="mb-2 pr-4 mt-16">
      <div class="text-center py-4">
        <p class="text-xs">Powered by</p>
        <img
          src="https://www.npxtech.com.br/images/logo.png"
          alt="Logo"
          class="mx-auto h-8"
        />
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
export default {
  // Propriedades, métodos e lógica do componente
};
</script>

<style scoped>
.scrollbar {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.scrollbar::-webkit-scrollbar {
  width: 0px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
