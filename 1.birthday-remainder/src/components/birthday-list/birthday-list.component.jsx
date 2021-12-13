import React, { useState } from "react";
import { BirthdayDetails } from "../../data/birthdayDetails";
import BirthdayCard from "../birthday-card/birthday-card.component";
import './birthday-list.styles.css';


const BirthDayList = () => {
    const [peoples, setPeople] = useState(BirthdayDetails);

    return (
        <div className="birthday-list-container">
            <h2>{peoples.length} Birthday Today</h2>
            {
                peoples.map(people => (<BirthdayCard key={people.id} people={people} />))
            }
            <button onClick={() => setPeople([])}>Delete All</button>
        </div>
    )
}

export default BirthDayList
