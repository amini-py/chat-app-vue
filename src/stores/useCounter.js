import { defineStore } from "pinia";

import { auth, db } from "@/includes/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export const useCounterStore = defineStore("authentication", {
    state: () => {
        return {
            reg_msg: null,
            reg_hasError: false,
            reg_showAlert: false,
            log_msg: null,
            log_hasError: false,
            log_showAlert: false,
            userLoggedIn: false,
            currentUserName: null
        }
    },

    actions: {
        async register(values) {
            await createUserWithEmailAndPassword(auth, values.email, values.password)
                .then(() => {
                    this.reg_msg = "User created successfully!";
                    this.reg_showAlert = true;
                    this.reg_hasError = false

                    // window.location.reload();

                    // Write collections to Firestore
                    // addDoc(collection(db, 'Users'), {
                    //     name: values.name,
                    //     email: values.email,
                    //     password: values.email
                    // })

                    setDoc(doc(db, "Users", values.name), {
                        name: values.name,
                        email: values.email,
                        password: values.password
                    });
                })
                .catch(err => {
                    console.log(err)
                    this.reg_msg = "An error occurred during the registration!"
                    this.reg_showAlert = true
                    this.reg_hasError = true
                })

        },

        async login(values) {
            await signInWithEmailAndPassword(auth, values.email, values.password)
                .then(() => {
                    this.log_msg = "User Logged in successfully!";
                    this.log_showAlert = true;
                    this.log_hasError = false

                    window.location.reload();
                })
                .catch(err => {
                    console.log(err);
                    this.log_msg = "An error occurred during the registration!"
                    this.log_showAlert = true
                    this.log_hasError = true
                })
        },

        async login_google() {
            const provider = new GoogleAuthProvider();

            await signInWithPopup(auth, provider)
                .then(result => {
                    console.log(result);
                    this.userLoggedIn = true
                })
                .catch(error => {
                    console.log(error);
                    this.userLoggedIn = false
                })

            window.location.reload();
        },

        async signOut() {
            await auth.signOut();

            window.location.reload();
        },

        init_login() {
            const user = auth.currentUser;

            if (user) {
                this.userLoggedIn = !this.userLoggedIn
            }

        }
    }
})