<template>
    <q-page class="">
      <q-toolbar inset>
        <q-breadcrumbs active-color="cyan" style="font-size: 16px">
          <q-breadcrumbs-el label="Dashboard" icon="widgets" />
          <q-breadcrumbs-el label="Schedule" />
        </q-breadcrumbs>
      </q-toolbar>
      <q-card-section>
        <app-schedule />
      </q-card-section>
    </q-page>
  </template>
  
  <script>
    import ScheduleIndex from 'src/components/teacher/Schedule/ScheduleIndex.vue';
    export default {
      name: "SchedulePage",
      data: () => ({
        slide: 1,
      }),
      components: {
        'app-schedule': ScheduleIndex,
      },
    };
  </script>
  