import React from 'react';

function Control({changePerson, deletePerson, newPerson, editPerson}) {

    return (
        <>
            <button onClick={()=>{changePerson(-1)}}>{'<'} Previous</button>
            <button onClick={editPerson}>Edit</button>
            <button onClick={deletePerson}>Delete</button>
            <button onClick={newPerson}>New</button>
            <button onClick={()=>{changePerson(1)}}>Next {'>'}</button>
        </>
    )
}

export default Control;