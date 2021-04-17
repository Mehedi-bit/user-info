import React from 'react';

const User = (props) => {
    const userData = props.userData;
    const user = props.user;
    const handleAddMe = props.handleAddMe;
    const userStyle = {
        border: '2px solid gray',
        margin: 'auto',
        marginBottom: '30px',
        padding: '10px',
        width: '500px',
    }
    return (
        <div>
            <div style={userStyle}> 
                <img src={user.image} alt=""/>
                <h4>Hi! I am {user.name}</h4>
                <h3>Phone: {user.phone}</h3>
                <button onClick={()=>{handleAddMe(user)}}>Add me</button>
            </div> 
        </div>
    );
};

export default User;