<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="mt-4 w-full">

    <div class="container mt-2 rounded-lg border-2 text-orange-400  ">
      <div class="h-30 text-4xl mt-0 pb-10 pl-4 flex space-x-0 pt-8 rounded-lg border-2 ">Empresas  <a href="#" class=" pt-3 pl-2 relative block"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </a>
      </div>

      <div class="py-8">
        <div class="py-4">
          <div class="max-w-full overflow-x-auto rounded-lg ">

            <table class="w-full leading-normal text-black">
              <thead>
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
                  <th
                    scope="col"
                    class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  />
                </tr>
              </thead>
              <tbody class="text-black">
                <tr>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/8_yfarwk.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap">Pag.Menos</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <p class="whitespace-nowrap">123233</p>
                  </td>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      class="text-indigo-600 flex space-x-0 hover:text-indigo-900"
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
                <tr>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap">Wolksvagen</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <p class="whitespace-nowrap">123233</p>
                  </td>

                  <td class="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      class="text-indigo-600 flex space-x-0 hover:text-indigo-900"
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
                <tr>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/3_iscinv.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap">Merc.Barato</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <p class="whitespace-nowrap">123233</p>
                  </td>

                  <td class="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      class="text-indigo-600 flex space-x-0 hover:text-indigo-900"
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
                <tr>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/6_v4ytve.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap">Seduc</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <p class="whitespace-nowrap">123233</p>
                  </td>

                  <td class="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      class="text-indigo-600 flex space-x-0 hover:text-indigo-900"
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
                <tr>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/8_yfarwk.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap">Mercado pago</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <p class="whitespace-nowrap">123233</p>
                  </td>

                  <td class="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      class="text-indigo-600 flex space-x-0 hover:text-indigo-900"
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
                <tr>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap">Martis</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <p class="whitespace-nowrap">123233</p>
                  </td>

                  <td class="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      class="text-indigo-600 flex space-x-0 hover:text-indigo-900"
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
                <tr>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/3_iscinv.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap">Wallmart</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <p class="whitespace-nowrap">123233</p>
                  </td>

                  <td class="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      class="text-indigo-600 flex space-x-0 hover:text-indigo-900"
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
                <tr>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/6_v4ytve.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap">Julise</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 p-5 text-sm">
                    <p class="whitespace-nowrap">123233</p>
                  </td>

                  <td class="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      class="text-indigo-600 flex space-x-0 hover:text-indigo-900"
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

            <div
              class="xs:flex-row xs:justify-between flex flex-col items-center p-5"
            >
              <div class="flex items-center">
                <button
                  type="button"
                  class="w-full rounded-l-xl border bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  class="w-full border-y bg-white px-4 py-2 text-base text-indigo-500 hover:bg-gray-100"
                >
                  1
                </button>
                <button
                  type="button"
                  class="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  class="w-full border-y bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  class="w-full border bg-white px-4 py-2 text-base text-black-300 hover:text-white-100 hover:bg-orange-500"
                >
                  4
                </button>
                <button
                  type="button"
                  class="w-full rounded-r-xl border-y border-r bg-white p-4 text-base text-white-600 hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
