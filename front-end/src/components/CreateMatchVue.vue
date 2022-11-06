<template>
  <div class="flex flex-col w-full">
    <div v-if="mode == 'bydefault'">
      <button
        @click="switchTocreateMatch"
        class="bg-blue-500 p-2 rounded font-bold text-black"
      >
        Crée un match
      </button>
    </div>
    <div v-else class="w-full flex flex-col justify-center items-center max-w-xs">
      <h2>Ajouter un match</h2>
      <!-- permet de valider facilement les entrées de formulaire. -->
      <form ref="form" class="mx-2 w-full">
        <div>
          <label for="match_public" class="block mb-2 text-sm font-medium text-black"
            >public
          </label>
          <input
            v-model="form.public"
            type="text"
            id="match_public"
            class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label for="playerColor" class="block mb-2 text-sm font-medium text-black"
            >playerColor
          </label>
          <input
            v-model="form.playerColor"
            type="text"
            id="playerColor"
            class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="w-full flex justify-between pt-2">
          <button
            class="bg-blue-500 p-2 rounded text-black font-bold"
            @click="switchToDisplayNewMatch"
          >
            annuler
          </button>
          <button
            type="button"
            v-on:click="CreateMatch"
            class="bg-green-500 p-2 rounded text-black font-bold"
          >
            Création du match
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreateMatch",
  data() {
    return {
      mode: "bydefault",
      form: {
        public: "",
        playerColor: "",
      },
    };
  },
  methods: {
    ...mapActions({ add: "createMatch" }),
    CreateMatch() {
      console.log("creatematch");
      let This = this;
      let AddMatch = {
        public: this.form.public,
        playerColor: this.form.playerColor,
      };
      this.add({ form: AddMatch })
        .then(() => {
          This.$router.push({ path: "/" });
        })
        .catch((error) => console.log(error));
    },
    //function pour different etat sur l'affichage des buttons
    switchToDisplayNewMatch() {
      this.mode = "bydefault";
      console.log(this.mode);
    },
    switchTocreateMatch() {
      this.mode = "create";
      console.log(this.mode);
    },
    //rafraichir la liste des posts apres ajout d'un nouveau
    refreshMatch() {
      //dispatch apliquer l'action (recuperer a nouveau les post)
      this.$store.dispatch("getMatch");
    },
  },
};
</script>

<style></style>
