import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextInput, Select, Button, Icon, Card } from 'react-materialize';

const EditForm = ( {currentId, setCurrentId, currentRoomId, setCurrentRoomId} ) => {

    const [editData, setEditData] = useState({
        editID: '', editCategory: '', roomEditID: ''
    });

    const user = JSON.parse(localStorage.getItem('profile'));


    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editData.editID) {
            switch(editData.editCategory) {
                case "package":
                    history.push('/FormPack');
                    break;
                case "ticket":
                    history.push('/FormTicket');
                    break;
                case "hotel":
                    document.getElementById('roomIDForm').removeAttribute('hidden');
                    break;
                case "cab":
                    history.push('/FormCab');
                    break;
                case "guide":
                    history.push('/FormGuide');
                    break;
                default: break;
            }
        } else {
            const warning = document.getElementById('warning');
            warning.style.setProperty('color', 'red');
            warning.removeAttribute('hidden');
        }
    };

    const roomIDFormSubmit = (e) => {
        e.preventDefault();
        if (editData.roomEditID) {
            const warningID = 'warning1';
            const warning = document.getElementById(warningID);
            warning.setAttribute('hidden','');
            history.push('/FormHotel');   
        } else {
            const warningID = 'warning1';
            const warning = document.getElementById(warningID);
            warning.style.setProperty('color', 'red');
            warning.removeAttribute('hidden');
        }
    }

    if (!user) {
        return(
            <div id="main-content" className="container errorPage">
                <div className="container">
                    <Card className="black" textClassName="teal-text text-accent-3" title="Authentication Required" actions={[<a className="white-text btn btn-large" key="1" href="/auth">Sign In</a>]}>
                        <span>Please Login to Proceed</span>
                    </Card>
                </div>
            </div>
        )
    }

    if (!user?.result?.serviceProvider) {
        return(
            <div id="main-content" className="container errorPage">
                <div className="container">
                    <Card className="black" textClassName="teal-text text-accent-3" title="Authentication Required" actions={[<a className="white-text btn btn-large" key="1" href="/auth">Sign In with another Account</a>]}>
                        <span>You don't have the permission to view this page</span>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div id="main-content">
            <div className="container editFormPage">
                <h1 className="center">Edit Form</h1>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <TextInput id="editID" label="ID" placeholder="Enter ID of Object to Edit" validate value={editData.editID} onChange={(e) => setEditData({ ...editData, editID: e.target.value.toUpperCase() })} />
                    <span id="warning" hidden>This field is requires!</span><br /><br/>
                    <Select
                    id="category"
                    label="Choose the category"
                    multiple={false}
                    options={{ classes: '', dropdownOptions: { alignment: 'left', autoTrigger: true, closeOnClick: true, constrainWidth: true, coverTrigger: true, hover: false, inDuration: 150, onCloseEnd: null, onCloseStart: null, onOpenEnd: null, onOpenStart: null, outDuration: 250 }}}
                    onChange={(e) => {setEditData({ ...editData, editCategory: e.target.value}); setCurrentId(editData.editID);}}
                    >
                        <option value="">Select One</option>
                        <option value="package">Packages</option>
                        <option value="ticket">Tickets</option>
                        <option value="hotel">Hotels</option>
                        <option value="cab">Cabs</option>
                        <option value="guide">Guides</option>
                    </Select>
                    <Button node="button" type="submit" waves="light">Submit<Icon right>send</Icon></Button>
                </form>
                <br />
                <form hidden id="roomIDForm" autoComplete="off" noValidate onSubmit={roomIDFormSubmit}>
                    <TextInput id="roomEditID" label="Room ID" placeholder="Enter ID of Room to Edit" validate value={editData.roomEditID} onChange={(e) => setEditData({ ...editData, roomEditID: e.target.value.toUpperCase() })}/>
                    <span id="warning1" hidden>This field is required!</span><br /><br />
                    <Button node="button" type="submit" waves="light" onClick={(e) => setCurrentRoomId(editData.roomEditID)}>Submit<Icon right>send</Icon></Button>
                </form>
                <br />
            </div>
        </div>
    );
}

export default EditForm;