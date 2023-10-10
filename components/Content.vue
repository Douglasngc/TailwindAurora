<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-0 mb-10 pr-4 w-screen flex">
    <div class="mt-2 mb-14 rounded-lg shrink w-3/4 border-2 text-orange-600">
      <div
        class="bg-gray-200 text-4xl mt-0 pb-1 pl-1 flex space-x-0 pt-8 rounded-t-lg border-3"
      >
        Empresas
        <a href="#" class="pt-1 pl-2 relative block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>

      <div class="py-1">
        <div class="py-1">
          <div class="overflow-x-auto rounded-lg">
            <table class="w-full pr-2 h-auto mb-2 text-black">
              <thead class="">
                <tr>
                  <th
                    scope="col"
                    class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Empresas
                  </th>
                  <th
                    scope="col"
                    class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Código externo
                  </th>

                  <th
                    scope="col"
                    class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Ações
                  </th>
                </tr>
              </thead>

              <tbody class="mr-0 w-full text-sm font-normal text-black">
                <tr
                  v-for="(empresa, index) in empresas"
                  :key="index"
                  :style="{
                    backgroundColor:
                      index % 2 === 0 ? 'rgb(213, 230, 246)' : 'white',
                  }"
                  scope="col"
                >
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <div class="flex items-center">
                      <div class="ml-3 mr-1 pr-2">
                        <p class="whitespace-nowrap">{{ empresa.nome }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <p class="whitespace-nowrap">{{ empresa.codigoExterno }}</p>
                  </td>
                  <td class="border-b border-gray-200 p-2 flex space-x-0">
                    <a
                      :href="empresa.editarLink"
                      class="text-blue-600 pt-5 pb-5 flex space-x-0 hover:text-blue-900"
                    >
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
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </a>
                    <a
                      :href="empresa.apagarLink"
                      class="text-red-600 pt-5 pb-5 flex space-x-0 hover:text-red-900"
                    >
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
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="py-8 flex justify-center items-center space-x-4">
              <button
                v-for="page in 4"
                :key="page"
                class="px-4 py-2 rounded-lg text-black bg-gray-200 hover:bg-orange-600 hover:text-white transition-colors"
              >
                {{ page }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empresas: [
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        {
          nome: "Empresa 1",
          codigoExterno: "COD-001",
        },
        // Adicione mais empresas seguindo o mesmo padrão
      ],
    };
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados aqui se necessário */
</style>
