// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyC7aYU1L6rN6_v3nd-j_p868jrel4M7KWg",
  authDomain: "chat-app-gs-578d6.firebaseapp.com",
  projectId: "chat-app-gs-578d6",
  storageBucket: "chat-app-gs-578d6.firebasestorage.app",
  messagingSenderId: "4469440560",
  appId: "1:4469440560:web:bf4882d0b60082fd8b6df5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password)=>{
    try{
           const res = await createUserWithEmailAndPassword(auth,email,password);
           const user = res.user;
           await setDoc(doc(db, "users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email ,
            name:"",
            avatar:"",
            bio:"Hey, There i am using chat app",
            lastSeen:Date.now()
           })

           await setDoc(doc(db, "chats", user.uid), {
            chatsData:[]
           })
    } catch(error){
        console.error(error);
        toast.error(error.code.spit('/')[1].spit('-').join(" "))
    }
}

const login= async(email,password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);

    } catch(error){
        console.error(error);
        toast.error(error.code.spit('/')[1].spit('-').join(" "));
    }
}

const logout = async() => {
    try{
        await signOut(auth)
    } catch(error){
        console.error(error);
        toast.error(error.code.spit('/')[1].spit('-').join(" "))
    }
}


export {signup, login, logout, auth, db}