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

<template>
  <div>
    <div class="border-b py-2">
      <SidebarItem title="Dashboard" to="/">
        <!--Icone Dashboard -->
        <DashboardIcon />
      </SidebarItem>

      <SidebarItem title="Atendimento" to="/">
        <!--Icone Atendimentos-->
        <AtendimentosIcon />
      </SidebarItem>

      <SidebarItem title="Empresas" to="/">
        <!--Icone Empresas-->
        <EmpresasIcon />
      </SidebarItem>

      <SidebarItem title="Clientes" to="/">
        <!--Icone Clientes-->
        <ClientesIcon />
      </SidebarItem>

      <SidebarItem title="Tickets" to="/">
        <!--Icone Tickets-->
        <TicketsIcon />
      </SidebarItem>

      <SidebarItem title="Campanhas" to="/">
        <!--Icone Campanhas-->
        <CampanhasIcon />
      </SidebarItem>

      <SidebarItem title="Quadros" to="/">
        <!--Icone Quadros-->
        <QuadrosIcon />
      </SidebarItem>

      <SidebarItem title="Chat interno" to="/">
        <!--Icone Chat-->
        <ChatIcon />
      </SidebarItem>

      <SidebarItem title="Settings" to="/">
        <!--Icone Configuração-->
        <SettingsIcon />
      </SidebarItem>

      <SidebarItem title="Relatórios" to="/">
        <ReportIcon />
      </SidebarItem>
    </div>

    <div>
      <SidebarItem title="Documentation" to="/admin/documentation">
        <DocIcon />
      </SidebarItem>
    </div>
  </div>
</template>
