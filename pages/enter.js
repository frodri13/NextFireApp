import {auth, googleAuthProvider, firestore} from "../lib/firebase"
import { doc, writeBatch, getDoc, getFirestore } from 'firebase/firestore';
import { signInWithPopup, signInAnonymously, signOut } from 'firebase/auth';

export default function EnterPage(props) {
    const user = null;
    const username = null;

    //  1. user signed out <SignInButton />

    // User signed in, but missing username <UsernameForm />

    // User signed in, has username <SignOutButton />

    return(
        <main>
          {user?
            !username ? <UsernameForm /> : <SignOutButton />
          :
          <SignInButton />
          }
        </main>
    )
}

function SignInButton(){
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleAuthProvider);
    }

    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'} width="30px"/>Sign in with Google
        </button>
    )
}

function SignOutButton(){
    return <button onClick={() => signOut(auth)}>Sign Out</button>;

}

function UsernameForm() {

}
