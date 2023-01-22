<template>
  <div class="hello flex justify-center items-center">
    <ion-phaser v-bind:game.prop="game" v-bind:initialize.prop="initialize" />
  </div>
</template>

<script>
// const config = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   backgroundColor: "#2d2d2d",
//   parent: "chessboard",
//   scene: [Example],
// };
import { mapState } from "vuex";
import Phaser from "phaser";
export default {
  name: "gameVue",
  watch: {
    ChessPieces(neWW) {
      alert("aaa");
    },
  },
  mounted() {
    //permet de recuperer les pieces
    this.chesspiecePosition();
    //this.$store.dispatch("getChessboard", matchId);
  },
  //computed  nous permettent de définir une valeur réutilisable qui est mise à jour en fonction d'autres propriétés
  //Mapstate permet d’utiliser des function calculer depuis le store
  computed: {
    //mapStaterenvoie un objet , pour simplifier les variable sans le ,$store.state
    ...mapState(["ChessPieces", "match"]), //renomer l'element du state
  },
  props: {
    match: {
      type: Object,
    },
  },
  data() {
    const This = this;
    return {
      // game: new Phaser.Game(config),
      initialize: true,
      chesspieceImages: [],
      game: {
        width: 680,
        height: 686,
        type: Phaser.AUTO,
        scene: {
          init() {
            this.cameras.main.setBackgroundColor("#24252A");
          },
          preload() {
            this.load.image("bg", "../assets/images/chessboard.png");
            this.load.image("Brook", "../assets/images/Brook.png");
            this.load.image("Bknight", "../assets/images/Bknight.png");
            this.load.image("Bbishop", "../assets/images/Bbishop.png");
            this.load.image("Bqueen", "../assets/images/Bqueen.png");
            this.load.image("Bking", "../assets/images/Bking.png");
            this.load.image("Bpawn", "../assets/images/Bpawn.png");
            this.load.image("Wrook", "../assets/images/Wrook.png");
            this.load.image("Wknight", "../assets/images/Wknight.png");
            this.load.image("Wbishop", "../assets/images/Wbishop.png");
            this.load.image("Wqueen", "../assets/images/Wqueen.png");
            this.load.image("Wking", "../assets/images/Wking.png");
            this.load.image("Wpawn", "../assets/images/Wpawn.png");
          },
          create() {
            this.add.image(0, 0, "bg").setOrigin(0, 0).setScale(0.5, 0.5);
            const tab = [
              //tour
              {
                x: 0,
                y: 7,
                img: "Brook",
              },
              {
                x: 7,
                y: 7,
                img: "Brook",
              },
              //cavalier
              {
                x: 1,
                y: 7,
                img: "Bknight",
              },
              {
                x: 6,
                y: 7,
                img: "Bknight",
              },
              //fou
              {
                x: 2,
                y: 7,
                img: "Bbishop",
              },
              {
                x: 5,
                y: 7,
                img: "Bbishop",
              },
              //roi
              {
                x: 4,
                y: 7,
                img: "Bking",
              },
              //reine
              {
                x: 3,
                y: 7,
                img: "Bqueen",
              },
              //tour
              {
                x: 0,
                y: 0,
                img: "Wrook",
              },
              {
                x: 7,
                y: 0,
                img: "Wrook",
              },
              //cavalier
              {
                x: 1,
                y: 0,
                img: "Wknight",
              },
              {
                x: 6,
                y: 0,
                img: "Wknight",
              },
              //fou
              {
                x: 2,
                y: 0,
                img: "Wbishop",
              },
              {
                x: 5,
                y: 0,
                img: "Wbishop",
              },
              //roi
              {
                x: 4,
                y: 0,
                img: "Wking",
              },
              //reine
              {
                x: 3,
                y: 0,
                img: "Wqueen",
              },
            ];
            for (let index = 0; index < 8; index++) {
              tab.push({
                x: index,
                y: 1,
                img: "Wpawn",
              });
              tab.push({
                x: index,
                y: 6,
                img: "Bpawn",
              });
            }
            for (const piece of tab) {
              const img = this.add
                .image(400, 400, piece.img)
                .setOrigin(0.5, 0.5)
                .setScale(0.5, 0.5);
              This.setcase(piece.x, piece.y, img);
            }
          },
          update() {
            // this.gameVue.angle += 1;
          },
        },
      },
      // pieces: {
      //   Brook: require("../assets/images/Brook.png"),
      //   Bknight: require("../assets/images/Bknight.png"),
      //   Bbishop: require("../assets/images/Bbishop.png"),
      //   Bqueen: require("../assets/images/Bqueen.png"),
      //   Bking: require("../assets/images/Bking.png"),
      //   Bpawn: require("../assets/images/Bpawn.png"),
      //   Wrook: require("../assets/images/Wrook.png"),
      //   Wknight: require("../assets/images/Wknight.png"),
      //   Wbishop: require("../assets/images/Wbishop.png"),
      //   Wqueen: require("../assets/images/Wqueen.png"),
      //   Wking: require("../assets/images/Wking.png"),
      //   Wpawn: require("../assets/images/Wpawn.png"),
      // },
    };
  },
  methods: {
    setcase(x, y, chesspiece) {
      const leftBorderWidth = 48;
      const bottomBorderHeight = 58;
      const boxsize = 162;
      //const chessboardWidth = 1360;
      const chessboardHeight = 1372;
      // midlle case (position dans le canvas , point au milieu de la case)
      const canvasx = leftBorderWidth + boxsize * x + boxsize / 2;
      const canvasy = chessboardHeight - (bottomBorderHeight + boxsize * y + boxsize / 2);
      // changer la position d'un element (image de la piece)setPosition
      chesspiece.setPosition(canvasx / 2, canvasy / 2);
    },
    chesspiecePosition() {
      this.$store.dispatch("getChessboard", { matchId: this.$route.params.id });
    },
    initializeGame() {
      this.initialize = true;
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
