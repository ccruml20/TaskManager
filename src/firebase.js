import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD_0-IfKReah7C3wYHvHkD_pVMK4TVev-M",
  authDomain: "goalcoach-c15aa.firebaseapp.com",
  databaseURL: "https://goalcoach-c15aa.firebaseio.com",
  projectId: "goalcoach-c15aa",
  storageBucket: "",
  messagingSenderId: "790978235794"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
