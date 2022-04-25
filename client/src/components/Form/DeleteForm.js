import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextInput, Select, Button, Icon, Card } from 'react-materialize'; 

const DeleteForm = ( { currentDeleteId, setCurrentDeleteId, currentDeleteRoomId, setCurrentDeleteRoomId } ) => {

    const history = useHistory();

    const [deleteData, setDeleteData] = useState({
        deleteID: '', deleteCategory: '', roomDeleteID: ''
    });

    const user = JSON.parse(localStorage.getItem('profile'));

    const handleSubmit = (e) => {
        e.preventDefault();

        if (deleteData.deleteID) {
            switch(deleteData.deleteCategory) {
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
        if (deleteData.roomDeleteID) {
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
        <div id="main-content" className="container deleteFormPage">
            <h1 className="center">Delete Form</h1>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <TextInput placeholder="Enter ID of Object to Delete" id="deleteID" label="ID" validate value={deleteData.deleteID} onChange={(e) => setDeleteData({ ...deleteData, deleteID: e.target.value.toUpperCase() })} />
                <span id="warning" hidden>This field is required!</span><br /><br />
                <Select
                    id="category"
                    label="Choose the category"
                    multiple={false}
                    options={{ classes: '', dropdownOptions: { alignment: 'left', autoTrigger: true, closeOnClick: true, constrainWidth: true, coverTrigger: true, hover: false, inDuration: 150, onCloseEnd: null, onCloseStart: null, onOpenEnd: null, onOpenStart: null, outDuration: 250 }}}
                    onChange={(e) => {setDeleteData({ ...deleteData, deleteCategory: e.target.value}); setCurrentDeleteId(deleteData.deleteID);}}
                    >
                        <option value="">Select One</option>
                        <option value="package">Packages</option>
                        <option value="ticket">Tickets</option>
                        <option value="hotel">Hotels</option>
                        <option value="cab">Cabs</option>
                        <option value="guide">Guides</option>
                </Select>
                <Button id="submitButton" node="button" type="submit" waves="light">Submit<Icon right>send</Icon></Button>
            </form>
            <br />
            <form hidden id="roomIDForm" autoComplete="off" noValidate onSubmit={roomIDFormSubmit}>
                <TextInput id="roomDeleteID" label="Room ID" placeholder="Enter ID of Room to Delete" validate value={deleteData.roomDeleteID} onChange={(e) => setDeleteData({ ...deleteData, roomDeleteID: e.target.value.toUpperCase() })}/>
                <span id="warning1" hidden>This field is required!</span><br /><br />
                <Button id="roomSubmitButton" node="button" type="submit" waves="light" onClick={(e) => setCurrentDeleteRoomId(deleteData.roomDeleteID)}>Submit<Icon right>send</Icon></Button>
            </form>
            <br />
        </div>
    );
}

export default DeleteForm;