import { createStore } from 'vuex'
import axios from '../axios';

export default createStore({
  state: {
    //contient les infos envoyer de puis la reponse du controller player (playerid,token,pseudo)
    player: JSON.parse(localStorage.getItem('player')) || {}, 
    ChessPieces : [],
    status:'',
    message:'',
    // objet userinfo avec l'objet a recuperer
    playerInfos: {
      id:'',
      pseudo:'',
      updatedAt:'',
    },
    match: {
      //
    },
    matches:[],
  },
  getters: {
  },
  mutations: {
    DISPLAY_CHESSPIECES(state, ChessPieces) {
      state.ChessPieces = ChessPieces;
    },
    SETSTATUS(state , data) {   
      state.status = data.status;
      state.message = data.message;
    },
    SETMATCH(state, match) {
      state.match = match;
    },
     //creation mutations playerInfos
    PLAYERINFOS(state, playerInfos) {
      state.playerInfos = playerInfos;
    },
    lOGPLAYER(state, {player,token}) {
      //recuperation des infos utilisateur a la connections
      state.playerInfos = player
      //passez le token dans authorization
      console.log("info token==>",token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
      //stocker le user dans le storage local
      //stringify pour enr dans le storage
      localStorage.setItem('player', JSON.stringify(player));
      state.player = player;
    },
    //afficher les matchs
    DISPLAY_MATCHES(state, matches) {
      state.matches = matches;
    },
  },
  actions: {
      getChessboard:({commit } , matchId) => {
          axios.get(`/match/${matchId}/chessboard`)
          .then(function (response) {
            commit('DISPLAY_CHESSPIECES', response.data.pieces);
          })
          .catch(error => { 
            commit('SETSTATUS' , {status:'error',message: error.response.error});
        });
      },
      createMatch: ({commit}, {form}) => {
        //requete Post enregistrer l'utilisateur
          axios.post('/match', form) 
          .then(function (response) {
            commit('SETMATCH', response.data);
            commit('SETSTATUS' , {status:'success',message: response.data}); 
            return response
          })
          .catch(function (error) {
            //message du back-end
            commit('SETSTATUS' , {status:'error',message:`Nous faisons face à cette erreur ${error}`});
          });
        },
      getAllMatch: ({commit}) => {
        //requete Post enregistrer l'utilisateur
          axios.get('/match') 
          .then(function (response) {
            commit('SETSTATUS' , {status:'success',message: response.data}); 
            commit('DISPLAY_MATCHES' , response.data); 
          })
          .catch(function (error) {
            //message du back-end
            commit('SETSTATUS' , {status:'error',message:`Nous faisons face à cette erreur ${error}`});
          });
        },
      createPlayer: ({commit},{playerInfo}) => {
        //requete Post enregistrer l'utilisateur
          console.log('createPlayer');
          axios.post('/player', playerInfo) 
          .then(function (response) {
            commit('SETSTATUS' , {status:'success',message: response.data}); 
            // recupere data.player pour les info du player coter back-end
            commit('lOGPLAYER', {player:response.data.player,token:response.data.token})
          })
          .catch(function (error) {
            //message du back-end
            commit('SETSTATUS' , {status:'error',message:`Nous faisons face à cette erreur ${error}`});
          });
        },
        getPlayerInfos: ({commit}, playerId) => { 
          axios.get(`/player/${playerId}`) //ajoute id a l'auth
          .then(function (response) { 
            //type et payload (recupere les info utilisateur)  
            commit('PLAYERINFOS' , response.data); 
          })
          .catch(error => { 
            console.log(error); 
            commit('SETSTATUS' , {status:'error',message:`Nous faisons face à cette erreur ${error}`});
          });
        },
  }
})
