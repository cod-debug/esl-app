<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          color="dark"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>
    
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="bg-custom-gradient  shadow-4"
    >
      <div class="text-center">
        <img src="~assets/img/esl-logo3.png" style="width: 100px" />
      </div>
      
      <q-separator></q-separator>
      <div class="text-center text-h6 q-py-md">Teacher</div>
      <q-separator></q-separator>
      <template v-for="(item, key) in essentialLinks" :key="key">
        <q-item clickable v-ripple @click="goTo(item.link)">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            {{ item.title }}
          </q-item-section>
        </q-item>
        <q-separator :key="'sep' + index"  v-if="item.separator" />
      </template>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default{
  data: () => ({
    leftDrawerOpen: true,
    essentialLinks:[
      {
        title: "Dashboard",
        caption: "quasar.dev",
        icon: "dashboard",
        link: "/esl-app",
        // separator: true,
      },
      {
        title: "Schedule",
        caption: "github.com/quasarframework",
        icon: "calendar_month",
        link: "/esl-app/schedule",
        // separator: true,
      },
    ]
  }),
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    goTo(link){
      this.$router.push(link);
    },
  }
}
// export default defineComponent({
//   name: "MainLayout",

//   components: {
//     // EssentialLink,
//   },

//   setup() {
//     const leftDrawerOpen = ref(false);

//     return {
//       essentialLinks: linksList,
//       leftDrawerOpen,
//       toggleLeftDrawer() {
//         leftDrawerOpen.value = !leftDrawerOpen.value;
//       },
//       goTo(link){

//       }
//     };
//   },
// });
</script>
