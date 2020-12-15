// import { useState } from 'react';
import './pages.css'

import Creatures from '../components/creatures/Creatures';

export default function DashBoardPage(props) {
    // const [ formState, setFormState ] = useState({
    //     image: "",
    //     name: "",
    //     description: "",
    //     lastKnownLocation: ""
    // });


    return (
        <main className="Page">
            <h1>Cryptid Creatures of the Week!</h1>
            <Creatures />

    
        </main>
    );
}