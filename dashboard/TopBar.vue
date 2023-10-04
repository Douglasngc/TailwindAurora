<script setup lang="ts">
import { ref } from "vue";
import { sidebarOpen, openSidebar, closeSidebar } from "./store";

const toggleSidebar = () => {
  if (sidebarOpen.value) {
    closeSidebar();
  } else {
    openSidebar();
  }
};
</script>
<template>
  <header class="z-30 relative h-16 w-full items-center bg-white shadow md:h-20">

    <div class="mx-auto w-full flex justify-between items-center px-3">
      <div class="relative flex items-center">
        
        
        <button
    type="button"
    aria-expanded="false"
    aria-label="Toggle sidenav"
    class="text-4xl text-gray-500 focus:outline-none"
    @click="toggleSidebar"
  >
    &#8801;
  </button>
        <img class="h-10 ml-4" src="https://a.imagem.app/ok70aJ.png" alt="" />
      </div>
      <div class="relative flex items-center w-full max-w-md mx-auto">
        <svg
          class="pointer-events-none absolute left-0 ml-4 h-4 w-4 fill-current text-gray-500 group-hover:text-gray-400 sm:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
          />
        </svg>
        <input
          type="text"
          class="block w-full rounded-md bg-gray-100 py-1.5 pl-10 pr-4 text-gray-400 opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
        />
        <div
          class="absolute right-0 mr-2 hidden h-auto rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-400 md:block"
        >
          +
        </div>
      </div>
     
    </div>
  </header>
</template>

<script lang="ts">
export default {
  // Propriedades, métodos e lógica do componente
}
</script>