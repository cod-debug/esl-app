<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <div style="width: 30%">
          <img src="~assets/img/esl-logo3.png" style="width: 80px" />
        </div>

        <div style="width: 100%">
          <nav class="top-nav">
            <ul>
              <li v-for="(item, key) in headerLinks" :key="key">
                <a @click.prevent="goTo(item.route_name)" class="text-grey-9 text-bold text-custom-nav" :class="current_route_name == item.route_name ? 'active': ''"
                  ><q-icon :name="item.icon" /> {{ item.label }}</a
                >
              </li>
              <!-- <li>
                <a href="#" class="text-grey-9 text-bold text-custom-nav"
                  ><q-icon name="question_mark" /> ABOUT</a
                >
              </li>
              <li>
                <a href="#" class="text-grey-9 text-bold text-custom-nav">
                  <q-icon name="phone" />
                  CONTACT
                </a>
              </li>
              <li>
                <a href="#" class="text-grey-9 text-bold text-custom-nav"
                  ><q-icon name="image" /> GALLERY</a
                >
              </li> -->
            </ul>
          </nav>
        </div>
      </q-toolbar>
    </q-header>
    <!-- 
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="footer text-center">&copy; Dec 2022</div>
  </q-layout>
</template>

<script>
export default {
  data: () => ({
    headerLinks: [
      {
        icon: "home",
        route_name: "home",
        label: "Home",
      },
      {
        icon: "login",
        route_name: "login",
        label: "SIGN IN",
      },
      {
        icon: "question_mark",
        route_name: "about",
        label: "ABOUT",
      },
      {
        icon: "phone",
        route_name: "contact",
        label: "CONTACT US",
      },
      {
        icon: "image",
        route_name: "gallery",
        label: "GALLERY",
      }
    ]
  }),
  computed:{
    current_route_name(){
      return this.$route.name;
    },
  },
  methods: {
    goTo(link){
      this.$router.push({name: link});
    },
  },
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
//     };
//   },
// });
</script>
