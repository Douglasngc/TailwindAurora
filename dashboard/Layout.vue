<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";

import TopBar from "./TopBar.vue";
import Overlay from "./Overlay.vue";
import Sidebar from "./sidebar/Sidebar.vue";
import { closeSidebar, sidebarOpen } from "./store";

const route = useRoute();

onMounted(() => {
  // set the html tag attribute overflow to hidden when component is mounted
  document.documentElement.style.overflow = "hidden";
});

watch(route, () => {
  // close sidebar on route changes when viewport is less than 1024px
  if (sidebarOpen && window.innerWidth < 1900) {
    closeSidebar();
  }
});
</script>

<!-- lg:w-[calc(100%-16rem)] class get the remained width of the main tag from lg:viewport by subtracting
(the total width by the width of the sidebar component which is w-64 = 16rem)-->
<template>
  <div class="relative h-screen overflow-hidden bg-white">
    <div class="flex items-start">
      <Overlay />
      <div class="flex">
        <Sidebar mobile-orientation="end" />
      </div>
      <div class="flex h-screen w-full flex-col pl-0 lg:w-full lg:space-y-4">
        <TopBar />
        <div class="flex-1" :class="{ 'ml-sidebar-open': sidebarOpen }">
          <main
            class="h-screen w-screen overflow-auto bg-white px-2 pb-26 pt-4 md:px-4 md:pb-8 ml-28 lg:rounded lg:px-6"
          >
            <slot />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ml-sidebar-open {
  margin-left: 100px; /* Ajuste conforme a largura da barra lateral */
}
.flex-1 {
  transition: margin-left 0.3s; /* Tempo da transição (ajuste conforme necessário) */
}
</style>
