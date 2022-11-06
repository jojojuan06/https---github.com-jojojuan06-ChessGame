<template>
  <div class="home flex flex-col justify-center items-center">
    <CreatePlayerVue class="pb-4 items-center" />
    <GameVue />
  </div>
</template>

<script>
// @ is an alias to /src
import GameVue from "@/components/GameVue.vue";
import CreatePlayerVue from "@/components/CreatePlayerVue.vue";

export default {
  name: "HomeView",
  components: {
    GameVue,
    CreatePlayerVue,
  },
};
</script>
