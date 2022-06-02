import {useState} from 'react';
import { useEffect } from "react";
import firebase from '../firebase';
export const BarberData = ({barberId}) => {
    const [barber, setBarber] = useState({});
    useEffect(() => {
        const getBarber = async () => {
         //   const firebase = firebase.firestore();
            try {
                const data = await firebase.collection("barbers").doc(barberId).get();
                const barber = data.data();
                if (barber) {
                    setBarber(barber);
                } else {
                    console.log("No hay barberos");
                    console.log(barber);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getBarber();
    }, []);

    return (
        <div>
            {
                barber ? (
                    <div>
                        <h1>{barber.name}</h1>
                        <p>{barber.description}</p>
                    </div>
                ) : (
                    <div>
                        <h1>No hay barbero</h1>
                    </div>
                )

            }
        </div>
    );
}