<script setup lang="ts">
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
  <header class="z-14 relative h-52 w-full bg-white shadow md:h-52">
    <div class="mx-34 h-14 w-full flex px-3">
      <div class="relative flex">
        <button
          type="button"
          aria-expanded="false"
          aria-label="Toggle sidenav"
          class="text-4xl text-gray-500 focus:outline-none"
          @click="toggleSidebar"
        >
          &#8801;
        </button>
        <div class="relative flex items-center">
          <img
            class="h-10 ml-2 relative flex items-center"
            src="https://a.imagem.app/ok70aJ.png"
            alt=""
          />
        </div>
      </div>
      <div class="relative flex items-center w-34 max-w-md mx-auto">
        <svg
          class="pointer-events-none absolute ml-28 h-4 w-4 fill-current text-gray-500 group-hover:text-gray-400 sm:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
          />
        </svg>
        <input
          type="text"
          class="block ml-24 w-48 border rounded-md bg-gray-100 py-1.5 pl-10 pr-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Pesquisar"
        />
      </div>
      <div class="mr-10 relative flex space-x-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </div>

      <DropDown class="relative flex items-center right-0 mr-2" />
    </div>

    <!-- // eslint-disable-next-line prettier/prettier -->
  </header>
</template>

<script lang="ts">
export default {
  // Propriedades, métodos e lógica do componente
};
</script>
