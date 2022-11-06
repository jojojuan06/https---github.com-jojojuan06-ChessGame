<template>
  <div>
    <CreateMatchVue class="pb-4 items-center" />
    <!-- <GetAllMatchVue /> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
// IMPORT COMPONENTS
import CreateMatchVue from "@/components/CreateMatchVue.vue";
// import GetAllMatchVue from "@/components/GetAllMatchVue.vue";
export default {
  name: "MatchView",
  //instancier components
  components: {
    CreateMatchVue,
    // GetAllMatchVue,
  },
  //moment ou la vue et afficher
  mounted() {
    //si l'utilisateur n'est pas nul donc non connecter on retourne a la page connection/inscription
    //this.user au lieu de $store.state.user avec mapstate
    if (!this.player.id) {
      return this.$router.push({ path: "/" });
    }
    //actions sont déclenchées avec la store.dispatch , recupere les information de l'utilisateur connecter
    this.$store.dispatch("getplayerInfos", this.player.id);
  },
  computed: {
    //mapStaterenvoie un objet , pour simplifier les variable sans le ,$store.state
    ...mapState(["playerInfos", "player"]), //renomer l'element du state
  },
};
</script>

<style scoped></style>
