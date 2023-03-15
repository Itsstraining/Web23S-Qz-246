import { createReducer, on } from '@ngrx/store';
import { PlayerState } from '../states/player.state';
import * as PlayerActions from '../actions/player.action';

export const initialState: PlayerState = {
  players: [
    {
      id: '1',
      name: 'Player 1',
      score: 0,
      correctAnswer: 0,
    },
  ],
  player: null,
  error: '',
  isSuccess: false,
  isLoading: false,
};

export const playerReducer = createReducer(
  initialState,
  on(PlayerActions.getPlayers, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(PlayerActions.getPlayersSuccess, (state, { players }) => ({
    ...state,
    players,
    isLoading: false,
  })),
  on(PlayerActions.getPlayersFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(PlayerActions.getPlayer, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(PlayerActions.getPlayerSuccess, (state, { player }) => ({
    ...state,
    player,
    isLoading: false,
  })),
  on(PlayerActions.getPlayerFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(PlayerActions.addNewPlayer, (state, { player }) => ({
    ...state,
    // isLoading: true,
    players: [...state.players, player],
  })),
  // on(PlayerActions.addNewPlayerSuccess, (state, { player }) => ({
  //   ...state,
  //   players: [...state.players, player],
  //   isLoading: false,
  // })),
  // on(PlayerActions.addNewPlayerFailure, (state, { error }) => ({
  //   ...state,
  //   error,
  //   isLoading: false,
  // })),
  on(PlayerActions.sortPlayers, (state) => ({
    ...state,
    players: state.players.sort((a, b) => b.score - a.score),
  })),
  on(PlayerActions.updatePlayers, (state, { players }) => ({
    ...state,
    players: players,
  })),
  on(PlayerActions.updatePlayer, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(PlayerActions.updatePlayerSuccess, (state, { player }) => ({
    ...state,
    players: state.players.map((p) => (p.id === player.id ? player : p)),
    isLoading: false,
  })),
  on(PlayerActions.updatePlayerFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(PlayerActions.deletePlayer, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(PlayerActions.deletePlayerSuccess, (state, { id }) => ({
    ...state,
    players: state.players.filter((p) => p.id !== id),
    isLoading: false,
  })),
  on(PlayerActions.deletePlayerFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);
