// import { useState } from 'react';
import './pages.css'
import { useState } from 'react';
import Creatures from '../components/creatures/Creatures';

export default function DashBoardPage(props) {

    const [createFormVisible, setCreateFormVisible] = useState(false);

    function toggleForm() {
        setCreateFormVisible(!createFormVisible);
    }

    return (
        <main className="Page">
            <h1>Cryptid Creatures of the Week!</h1>
            <button onClick={toggleForm}>Add new cryptid</button>
            <Creatures createFormVisible={createFormVisible}/>


        </main>
    );
}