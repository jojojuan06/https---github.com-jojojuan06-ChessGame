<template>
  <div>
    <div v-for="match of this.$store.state.matches" :key="match.id">
      {{ match }}
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  mounted() {
    //actions sont déclenchées avec la store.dispatch , recupere les information de l'utilisateur connecter
    this.$store.dispatch("getAllMatch");
  },
  computed: {
    //mapStaterenvoie un objet , pour simplifier les variable sans le ,$store.state
    ...mapState(["matches"]), //renomer l'element du state
  },
};
</script>

<style></style>
