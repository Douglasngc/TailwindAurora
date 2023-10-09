<script setup lang="ts">
import { sidebarOpen } from "../store";
import SidebarItems from "./SidebarItems.vue";

defineProps({
  mobileOrientation: {
    type: String,
    default: "end",
  },
});

const style = {
  mobileOrientation: {
    start: "left-0",
    end: "left-0",
  },
};
</script>

<template>
  <aside
    class="z-10 w-34 mt-14 h-full overflow-auto bg-gray-100 scrollbar"
    :class="[sidebarOpen ? 'absolute' : 'hidden']"
  >
    <div class="flex flex-col pb-24 lg:pb-6">
      <SidebarItems />
    </div>
    <div class="mb-20">
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
  width: 6px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
