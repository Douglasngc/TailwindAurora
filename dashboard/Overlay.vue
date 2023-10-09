<script setup lang="ts">
import { sidebarOpen, closeSidebar } from "./store";
</script>

<template>
  <!-- The overlay will only be visible on small screens to emphasize the focus on sidebar when it is open.-->
  <!--  it also allows to close sidebar on click outside-->
  <div
    :class="
      sidebarOpen && ' fixed h-screen left-0 opacity-14 top-0 w-0 z-2 lg:hidden'
    "
    @click="closeSidebar"
  />
</template>
<script lang="ts">
export default {
  // Propriedades, métodos e lógica do componente
};
</script>
