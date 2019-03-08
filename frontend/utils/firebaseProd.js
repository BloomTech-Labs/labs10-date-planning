import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDQ1wUgadFuPSpRppfG9bmawP8H6HMgfQU",
	authDomain: "up4-life.firebaseapp.com",
	databaseURL: "https://up4-life.firebaseio.com",
	projectId: "up4-life",
	storageBucket: "up4-life.appspot.com",
	messagingSenderId: "813752834482"
};

export default (!firebase.apps.length ? firebase.initializeApp(config) : firebase.app());
export const auth = firebase.auth();
