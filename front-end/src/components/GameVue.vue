<template>
  <div v-for="(piece, index) in pieces" :key="index">
    <div class="flex flex-col w-full justify-center items-center">
      <div class="flex">
        <li class="box Bpiece flex"><img :src="piece.Brook" alt="" class="w-full" /></li>
        <li class="box Bpiece flex">
          <img :src="piece.Bknight" alt="" class="w-full" />
        </li>
        <li class="box Bpiece flex">
          <img :src="piece.Bbishop" alt="" class="w-full" />
        </li>
        <li class="box Bpiece flex"><img :src="piece.Bqueen" alt="" class="w-full" /></li>
        <li class="box Bpiece flex"><img :src="piece.Bking" alt="" class="w-full" /></li>
        <li class="box Bpiece flex">
          <img :src="piece.Bbishop" alt="" class="w-full" />
        </li>
        <li class="box Bpiece flex">
          <img :src="piece.Bknight" alt="" class="w-full" />
        </li>
        <li class="box Bpiece flex"><img :src="piece.Brook" alt="" class="w-full" /></li>
      </div>
      <div class="flex">
        <li class="box Bpawn flex"><img :src="piece.Bpawn" alt="" class="w-full" /></li>
        <li class="box Bpawn flex"><img :src="piece.Bpawn" alt="" class="w-full" /></li>
        <li class="box Bpawn flex"><img :src="piece.Bpawn" alt="" class="w-full" /></li>
        <li class="box Bpawn flex"><img :src="piece.Bpawn" alt="" class="w-full" /></li>
        <li class="box Bpawn flex"><img :src="piece.Bpawn" alt="" class="w-full" /></li>
        <li class="box Bpawn flex"><img :src="piece.Bpawn" alt="" class="w-full" /></li>
        <li class="box Bpawn flex"><img :src="piece.Bpawn" alt="" class="w-full" /></li>
        <li class="box Bpawn flex"><img :src="piece.Bpawn" alt="" class="w-full" /></li>
      </div>
      <div class="flex">
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
      </div>
      <div class="flex">
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
      </div>
      <div class="flex">
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
      </div>
      <div class="flex">
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
      </div>
      <div class="flex">
        <li class="box Wpawn flex"><img :src="piece.Wpawn" alt="" class="w-full" /></li>
        <li class="box Wpawn flex"><img :src="piece.Wpawn" alt="" class="w-full" /></li>
        <li class="box Wpawn flex"><img :src="piece.Wpawn" alt="" class="w-full" /></li>
        <li class="box Wpawn flex"><img :src="piece.Wpawn" alt="" class="w-full" /></li>
        <li class="box Wpawn flex"><img :src="piece.Wpawn" alt="" class="w-full" /></li>
        <li class="box Wpawn flex"><img :src="piece.Wpawn" alt="" class="w-full" /></li>
        <li class="box Wpawn flex"><img :src="piece.Wpawn" alt="" class="w-full" /></li>
        <li class="box Wpawn flex"><img :src="piece.Wpawn" alt="" class="w-full" /></li>
      </div>
      <div class="flex">
        <li class="box Wpiece flex"><img :src="piece.Wrook" alt="" class="w-full" /></li>
        <li class="box Wpiece flex">
          <img :src="piece.Wknight" alt="" class="w-full" />
        </li>
        <li class="box WPiece flex">
          <img :src="piece.Wbishop" alt="" class="w-full" />
        </li>
        <li class="box Wpiece flex"><img :src="piece.Wqueen" alt="" class="w-full" /></li>
        <li class="box Wpiece flex"><img :src="piece.Wking" alt="" class="w-full" /></li>
        <li class="box Wpiece flex">
          <img :src="piece.Wbishop" alt="" class="w-full" />
        </li>
        <li class="box Wpiece flex">
          <img :src="piece.Wknight" alt="" class="w-full" />
        </li>
        <li class="box Wpiece flex"><img :src="piece.Wrook" alt="" class="w-full" /></li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameVue",
  // mounted() {
  //     //permet de recuperer les pieces
  //     this.chesspiecePosition();
  // },
  props: {
    match: {
      type: Object,
    },
  },
  data() {
    return {
      pieces: [
        {
          Brook: require("../assets/images/Brook.png"),
          Bknight: require("../assets/images/Bknight.png"),
          Bbishop: require("../assets/images/Bbishop.png"),
          Bqueen: require("../assets/images/Bqueen.png"),
          Bking: require("../assets/images/Bking.png"),
          Bpawn: require("../assets/images/Bpawn.png"),
          Wrook: require("../assets/images/Wrook.png"),
          Wknight: require("../assets/images/Wknight.png"),
          Wbishop: require("../assets/images/Wbishop.png"),
          Wqueen: require("../assets/images/Wqueen.png"),
          Wking: require("../assets/images/Wking.png"),
          Wpawn: require("../assets/images/Wpawn.png"),
        },
      ],
    };
  },
  methods: {
    chesspiecePosition() {
      this.$store.dispatch("getChessboard", { matchId: this.match.id });
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.box {
  width: 4rem;
  height: 4rem;
  border: solid black 1px;
}
div:nth-child(odd) > li:nth-child(even),
div:nth-child(even) > li:nth-child(odd) {
  background: rgba(0, 0, 0, 0.46);
}
</style>
