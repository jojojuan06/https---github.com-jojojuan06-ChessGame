<template>
  <div class="flex flex-col w-full">
    <div v-if="mode == 'bydefault'">
      <button
        @click="switchTocreatePlayer"
        class="bg-blue-500 p-2 rounded font-bold text-black"
      >
        Crée un player
      </button>
    </div>
    <div v-else class="w-full flex flex-col justify-center items-center max-w-xs">
      <h2>Ajouter un joueur</h2>
      <!-- permet de valider facilement les entrées de formulaire. -->
      <form ref="form" class="mx-2 w-full">
        <div>
          <label
            for="pseudo"
            class="block mb-2 text-sm font-medium text-black placeholder-[red]"
            placeholder="votre nom"
          >
          </label>
          <input
            v-model="form.pseudo"
            type="text"
            id="pseudo"
            class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="w-full flex justify-between pt-2">
          <button
            class="bg-blue-500 p-2 rounded text-black font-bold"
            @click="switchToDisplayNewPlayer"
          >
            annuler
          </button>
          <button
            type="button"
            v-on:click="CreatePlayer"
            class="bg-green-500 p-2 rounded text-black font-bold"
          >
            Création du player
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreatePlayer",
  data() {
    return {
      mode: "bydefault",
      form: {
        pseudo: "",
      },
    };
  },
  methods: {
    ...mapActions({ add: "createPlayer" }),
    CreatePlayer() {
      console.log("createplayer");
      let This = this;
      let AddPlayer = {
        pseudo: this.form.pseudo,
      };
      this.add({ playerInfo: AddPlayer })
        .then(() => {
          This.$router.push({ path: "/match" });
        })
        .catch((error) => console.log(error));
    },
    //function pour different etat sur l'affichage des buttons
    switchToDisplayNewPlayer() {
      this.mode = "bydefault";
      console.log(this.mode);
    },
    switchTocreatePlayer() {
      this.mode = "create";
      console.log(this.mode);
    },
  },
};
</script>

<style></style>
