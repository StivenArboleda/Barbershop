import {useState} from 'react';
import { useEffect } from "react";
import firebase from '../firebase';
export const UserData = ({userId}) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const getUser = async () => {
           // const firebase = firebase.firestore();
            try {
                const data = await firebase.collection("users").doc(userId).get();
                const user = data.data();
                if (user) {
                    setUser(user);
                } else {
                    console.log("No hay usuarios");
                    console.log(user);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);

    return (
        <div>
            {
                user ? (
                    <div>
                        <h1>{user.name}</h1>
                        <p>{user.description}</p>
                    </div>
                ) : (
                    <div>
                        <h1>No hay usuario</h1>
                    </div>
                )

            }
        </div>
    );
}
