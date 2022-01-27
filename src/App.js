import React, { useState } from 'react';

import Card from './Card';
import Control from './Control';
import Header from './Header';

import data from './data';

function App() {
    const [id, setId] = useState(data[0].id);
    const [person, setPerson] = useState(data[0]);
    const [maxId, setMaxId] = useState(data[data.length - 1].id);

    // declare the changePerson function with a single parameter of value
    const changePerson = (value) => { // value is either -1 or 1
        // if we are decreasing the value and the id is greater than 1
        // or if we are increaseing the value and the id is less than the maximum
        if ((value === -1 && id > 1) || (value === 1 && id < maxId)){ // max id starts at 25
            // then we can change the card without going too high or too low
            // if we are increasing the value,
                // set the id to one plus the current id
            // otherwise (it is a decrease in value)
                // set the id to one minus the current id
            setId(value === 1 ? id + 1 : id - 1);
            // then we set the data for the person object to the new and improved data
            setPerson(value === 1 ? data[id] : data[id - 2]);
        }
    }

    const deletePerson = () => {
        if (maxId !== 1) {
            let hasBeenDeleted = false;
            for (let i = 0; i < data.length; i++) {
                if (!hasBeenDeleted && data[i].id === id) {
                    data.splice(i, 1);
                    hasBeenDeleted = true;
                    i -= 1;
                    if (i < 1) {
                        setPerson(data[0]);
                        setId(1);
                    } else if (maxId === id) {
                        setPerson(data[i]);
                        setId(i + 1);
                    } else {
                        setPerson(data[i + 1]);
                        setId(i + 2);
                    }
                } else if (hasBeenDeleted) {
                    data[i].id -= 1;
                }
            }
            setMaxId(data[data.length -1].id);
            console.log(data);
        } else {
            alert('Cannot delete everyone!');
        }
    }

    const newPerson = () => {

    }

    const editPerson = () => {

    }

    return (
        <div>
            <Header />
            <Card person={person} maxId={maxId}/>
            <Control changePerson={changePerson} deletePerson={deletePerson} newPerson={newPerson} editPerson={editPerson} />
        </div>
    )
}

export default App;