<template>
    <div class="text-center">
      <q-toolbar inset>
        <q-breadcrumbs style="font-size: 16px">
          <q-breadcrumbs-el label="Dashboard" icon="widgets" class="text-cyan" />
        </q-breadcrumbs>
      </q-toolbar>
    </div>
  </template>
  
  <script>
  export default {
    name: "IndexPage",
    data: () => ({
      slide: 1,
    }),
  };
  </script>
  