import React, { useState, useEffect } from 'react';
import './About.css';
import { exname, snakeArr, isIn, exmail } from './Header';
import Modal from 'react-modal';
import axios from 'axios';
const About = () => {


    /*const user = () => {
        axios.get('http://localhost:5000/gamers/me', { headers: { 'token': localStorage.getItem('login_access_token') } })
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response on about", response);
                    exname = response.data.username;
                    console.log("name on about is: ", exname);
                    exmail = response.data.email;
                    snakeArr = response.data.snakegame;
                    console.log("Array on about : ", snakeArr);
                    console.log('me in about');
                    
                    isIn = true;
                    console.log('isIn is', isIn);
                }
            })
            .catch(function (error) {
                console.log("Error is there lmao");
            });
    }
    user();*/
    var edit_name = exname;
    var edit_mail = exmail;
    console.log("Name before: " + edit_name + " Email bfor: " + edit_mail);
    console.log("Name on About: ", exname);
    const [edit, setEdit] = useState(false);
    const [e_name, setEName] = useState('');

    const [e_email, setEEmail] = useState('');
    const onOpenEdit = () => {
        setEdit(true);
    };
    const onCloseEdit = () => {
        setEdit(false);
    };
    const onNameChange = (e) => {
        console.log(e.target.value);
        setEName(e.target.value);

    };

    const onEmailChange = (e) => {
        console.log(e.target.value);
        setEEmail(e.target.value);

    };

    function handleEdit() {

        const payload = {
            "username": exname,
            "email": exmail,
            "new_user": e_name,
            "new_mail": e_email
            
        }
        axios.put('http://localhost:5000/gamers/editprofile', payload)
            .then(function (response) {
                if (response.status === 200) {
                    console.log('done'); console.log(response); 
                    edit_name = e_name;
                    edit_mail = e_email;}
            }).catch(function (error) {
                console.log(error);
                alert('Invalid action');
            });

        
        console.log("Name after: " + edit_name + " Email after: " + edit_mail);

        onCloseEdit();
    } 



    return (
        <div>
        <Modal isOpen={edit} onRequestClose={onCloseEdit} style={{ overlay: { zIndex: '99', backgroundColor: '#b3b3b49f' }, content: { marginLeft: '35%', width: '30%', height: '75%' } }} >
            <center><h1> Edit Profile ! </h1></center><br />
            
            
            <div className="ui form">
                <div className="inline fields">
                    <div className="nine wide field">
                        <label>Edit Name</label>
                        <input type="text" placeholder="First Name" style={{ marginLeft: '22px' }} onChange={onNameChange} value={e_name} />
                    </div>

                </div>
                <div className="inline fields">
                    <div className="nine wide field">
                        <label>Edit Email</label>
                        <input type="text" placeholder="Email" style={{ marginLeft: '23px' }} onChange={onEmailChange} value={e_email} />
                    </div>
                </div>
                
                    <br />
                    <div className="ui submit button" style={{ width: '30%', marginLeft: '35%', backgroundColor: ' darkcyan' }} onClick={handleEdit} >Change it! </div>
            </div>

        </Modal>
        <div className="size-about">
            <div className="bg-about">
                <div className="container" >
                    {isIn ?
                    <div className="row text-center">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />   
                        <br />
                      <h1> Your Profile! </h1>
                    
                    
                    <br />
                    <br /> 

                    <h1> Name: {edit_name} </h1>
                    <br />
                    <br />

                    <h1> Email: {edit_mail} </h1>
                    <br />
                            <br />

                            <div className="headeritem" id="edit" onClick={onOpenEdit}>
                                <a>Edit</a>
                            </div>

                </div>
                        : <div> <br /> <br /> <br /> <br /> <br /> <br />  <h1> Please log in to  view and edit your profile! </h1> </div>}
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;