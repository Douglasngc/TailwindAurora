<script setup lang="ts">
import DashboardIcon from "./icons/DashboardIcon.vue";
import AtendimentosIcon from "./icons/Atendimentos.vue";
import EmpresasIcon from "./icons/Empresasicon.vue";
import ClientesIcon from "./icons/ClientesIcon.vue";
import TicketsIcon from "./icons/TicketsIcon.vue";
import CampanhasIcon from "./icons/CampanhasIcon.vue";
import QuadrosIcon from "./icons/QuadrosIcon.vue";
import ChatIcon from "./icons/ChatIcon.vue";
import ReportIcon from "./icons/ReportIcon.vue";
import SidebarItem from "./SidebarItem.vue";
import SettingsIcon from "./icons/SettingsIcon.vue";
</script>
<script lang="ts">
export default {
  // Propriedades, métodos e lógica do componente
};
</script>

<template>
  <div>
    <div class="pt-0">
      <SidebarItem title="Dashboard" to="/admin/Dash">
        <!--Icone Dashboard -->
        <DashboardIcon />
      </SidebarItem>

      <SidebarItem title="Atendimento" to="/admin/Atendimento">
        <!--Icone Atendimentos-->
        <AtendimentosIcon />
      </SidebarItem>

      <SidebarItem title="Empresas" to="/admin/empresas">
        <!--Icone Empresas-->
        <EmpresasIcon />
      </SidebarItem>

      <SidebarItem title="Clientes" to="/admin/clientes">
        <!--Icone Clientes-->
        <ClientesIcon />
      </SidebarItem>

      <SidebarItem title="Tickets" to="/admin/tickets">
        <!--Icone Tickets-->
        <TicketsIcon />
      </SidebarItem>

      <SidebarItem title="Campanhas" to="/admin/TesteRoute">
        <!--Icone Campanhas-->
        <CampanhasIcon />
      </SidebarItem>

      <SidebarItem title="Quadros" to="/admin/TesteRoute">
        <!--Icone Quadros-->
        <QuadrosIcon />
      </SidebarItem>

      <SidebarItem title="Chat interno" to="/admin/TesteRoute">
        <!--Icone Chat-->
        <ChatIcon />
      </SidebarItem>

      <SidebarItem title="Settings" to="/admin/settings">
        <!--Icone Configuração-->
        <SettingsIcon />
      </SidebarItem>

      <SidebarItem title="Relatórios" to="/admin/TesteRoute">
        <ReportIcon />
      </SidebarItem>
    </div>
  </div>
</template>
