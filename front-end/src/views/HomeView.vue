<template>
  <div class="home flex flex-col justify-center items-center">
    <CreatePlayerVue class="pb-4 items-center" />
  </div>
</template>

<script>
// @ is an alias to /src
import CreatePlayerVue from "@/components/CreatePlayerVue.vue";

export default {
  name: "HomeView",
  components: {
    CreatePlayerVue,
  },
};
</script>
