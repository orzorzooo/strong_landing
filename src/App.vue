<template>
  <v-app>
    <Navbar></Navbar>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <div class="text-2xl font-bold">APDC</div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-main class="">
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer.vue";
export default {
  name: "App",
  components: { Navbar, Footer },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions("landing", ["getLandingDatas"]),
  },
  async created() {
    const getLandingDatas = await this.getLandingDatas();
  },
};
</script>
