import { ref } from "vue";

const sidebarOpen = ref(false);

const openSidebar = () => {
  sidebarOpen.value = true;
};

const closeSidebar = () => {
  sidebarOpen.value = false;
  // Adicione o código para mover os itens de volta à posição original
};


export { sidebarOpen, openSidebar, closeSidebar };
