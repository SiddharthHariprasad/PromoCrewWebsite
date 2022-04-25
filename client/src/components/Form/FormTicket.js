import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTicket, getTickets, putTicket, updateTicket } from '../../actions/tickets'
import { Preloader, TextInput, Button, Icon, Card } from 'react-materialize';

const FormTicket = ({ currentId, setCurrentId, currentDeleteId, setCurrentDeleteId }) => {

    const [ticketData, setTicketData] = useState({
        ticketID: '', ticketType: '', departure: '', destination: '', seatsAvailable: '', date: '', time: '', ticketCost: '',
    });

    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets());
    }, [dispatch]);

    const ticket = useSelector((state) => currentId ? state.tickets.find((g) => g.ticketID === currentId) : null);

    const ticketDel = useSelector((state) => currentDeleteId ? state.tickets.find((t) => t.ticketID === currentDeleteId) : null);

    const tickets = useSelector((state) => state.tickets);

    useEffect(() => {
        if (ticket) setTicketData(ticket);
    }, [ticket])

    useEffect(() => {
        if (ticketDel) setTicketData(ticketDel);
    }, [ticketDel])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        function formater() {
            ticketData.ticketID = ticketData.ticketID.toUpperCase();
            ticketData.time = ticketData.time.toUpperCase();
            ticketData.date = capitalize(ticketData.date);
            ticketData.ticketType = capitalize(ticketData.ticketType);
            ticketData.departure = capitalize(ticketData.departure);
            ticketData.destination = capitalize(ticketData.destination);

            function capitalize(input) {  
                var words = input.split(' ');  
                var CapitalizedWords = [];  
                words.forEach(element => {  
                    CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length).toLowerCase());  
                });  
                return CapitalizedWords.join(' ');  
            }  
        }
        
        function validate() {
            const fields = [ticketData.ticketID, ticketData.time, ticketData.date, ticketData.ticketType, ticketData.departure, ticketData.destination, ticketData.ticketCost]
            var index = 0;
            if(ticketData.ticketID && ticketData.time && ticketData.date && ticketData.ticketType && ticketData.departure && ticketData.destination && ticketData.ticketCost) {
                index = 0;
                fields.forEach(element => {
                    if (element !== '') {
                        const warningID = 'warning' + index;
                        const warning = document.getElementById(warningID);
                        warning.setAttribute('hidden','')
                    }
                    index = index + 1;
                });
                return true;
            } else {
                index = 0;
                fields.forEach(element => {
                    if (element === '') {
                        const warningID = 'warning' + index;
                        const warning = document.getElementById(warningID);
                        warning.style.setProperty('color', 'red');
                        warning.removeAttribute('hidden');
                    } else if (element !== '') {
                        const warningID = 'warning' + index;
                        const warning = document.getElementById(warningID);
                        warning.setAttribute('hidden','');
                    }
                    index = index + 1;
                });
                return false;
            }
        }

        const validated = validate();
        var updateSuccess = document.getElementById('updateSuccess');
        var createSuccess = document.getElementById('createSuccess');
        var deleteSuccess = document.getElementById('deleteSuccess');
        if(currentId && validated) {
            dispatch(updateTicket(currentId, { ...ticketData, ticketCreatorName: user?.result?.name }));
            setCurrentId(null);
            updateSuccess.removeAttribute('hidden');
            setTimeout(() => {updateSuccess.setAttribute('hidden',""); clear();}, 3000);
        } else if (currentDeleteId && validated) {
            dispatch(deleteTicket(currentDeleteId));
            setCurrentDeleteId(null);
            deleteSuccess.removeAttribute('hidden');
            setTimeout(() => { deleteSuccess.setAttribute('hidden', ""); clear(); }, 3000);
        } else if(validated) {
            formater();
            const ticketExistCheck = tickets.find((t) => t.ticketID === ticketData.ticketID)? true : false;
            if (ticketExistCheck) {
                alert('Ticket with the same Ticket ID already exists, if you want to update please go to /EditForm, if you want to delete please go to /DeleteForm');
            } else {
                dispatch(putTicket({ ...ticketData, ticketCreatorName: user?.result?.name }));
                createSuccess.removeAttribute('hidden');
                setTimeout(() => {createSuccess.setAttribute('hidden',""); clear();}, 3000);
            }
        }
    };

    const clear = () => {
        window.open("/FormTicket","_self");
    };

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

    if ( currentId || currentDeleteId ) {
        if(user?.result?.googleId !== ticket?.ticketCreator && user?.result._id !== ticket.ticketCreator) {
            return (
                <div id="main-content" className="container errorPage">
                    <div className="container">
                        <Card className="black" textClassName="teal-text text-accent-3" title="Access Denied" actions={[<a className="white-text btn btn-large" key="1" href={currentId?"/EditForm":"/DeleteForm"}>Go Back</a>]}>
                            <span>You don't have permission to access this item.</span>
                        </Card>
                    </div>
                </div>
            ) 
        }
    }
   
    return (
        (ticket !== null || ticketDel !== null) && ticketData.ticketID ==='' ?  
            <div id="main-content" className="loaderPage">
                <Preloader active size="big" flashing={false} color="green" />
            </div>
        : (
            <div id="main-content" className="container">
                <div id="updateSuccess" className="success" hidden>Ticket Updated Sucessfully!</div>
                <div id="createSuccess" className="success" hidden>Ticket Created Sucessfully!</div>
                <div id="deleteSuccess" className="success" hidden>Cab Deleted Sucessfully!</div>
                <h1 className="center">Input Form</h1>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <TextInput id="ticketID" label="Ticket ID" placeholder="Enter Ticket ID" className="validate" value={ticketData.ticketID} onChange={(e) => setTicketData({ ...ticketData, ticketID: e.target.value })} />
                    <span id="warning0" hidden>This field is required!</span><br /><br />
                    <TextInput id="ticketType" label="Ticket Type" placeholder="Enter Ticket Type" validate value={ticketData.ticketType} onChange={(e) => setTicketData({ ...ticketData, ticketType: e.target.value })} />
                    <span id="warning1" hidden>This field is required!</span><br /><br />
                    <TextInput id="departure" label="Departure" placeholder="Enter Departure" validate value={ticketData.departure} onChange={(e) => setTicketData({ ...ticketData, departure: e.target.value })} />
                    <span id="warning2" hidden>This field is required!</span><br /><br />
                    <TextInput id="destination" label="Destination" placeholder="Enter Destination" validate value={ticketData.destination} onChange={(e) => setTicketData({ ...ticketData, destination: e.target.value })} />
                    <span id="warning3" hidden>This field is required!</span><br /><br />
                    <TextInput id="seatsAvailable" label="Seats Available" placeholder="Enter Seats Available" validate type="number" value={ticketData.seatsAvailable} onChange={(e) => setTicketData({ ...ticketData, seatsAvailable: e.target.value })} />
                    <span id="warning4" hidden>This field is required!</span><br /><br />
                    <TextInput id="date" label="Date" placeholder="Enter Date" validate value={ticketData.date} onChange={(e) => setTicketData({ ...ticketData, date: e.target.value })} />
                    <span id="warning5" hidden>This field is required!</span><br /><br />
                    <TextInput id="time" label="Time" placeholder="Enter Time" validate value={ticketData.time} onChange={(e) => setTicketData({ ...ticketData, time: e.target.value })} />
                    <span id="warning6" hidden>This field is required!</span><br /><br />
                    <TextInput id="ticketCost" label="Cost" placeholder="Enter Cost per day" validate type="number" value={ticketData.ticketCost} onChange={(e) => setTicketData({ ...ticketData, ticketCost : e.target.value })} />
                    <span id="warning7" hidden>This field is required!</span><br /><br />
                    <Button node="button" type="reset" waves="light">Clear<Icon right>refresh</Icon></Button>
                    { 
                        currentId ? 
                            <>
                                <Button 
                                    id="editButton" 
                                    node="button" 
                                    type="submit" 
                                    waves="light" 
                                    disabled={ (user?.result?.googleId === ticket?.ticketCreator || user?.result._id === ticket.ticketCreator) ? false : true }
                                >
                                    Edit<Icon right>edit</Icon>
                                </Button>
                                &nbsp;
                                <span className="red-text">{ (user?.result?.googleId === ticket?.ticketCreator || user?.result._id === ticket.ticketCreator) ? null : `You don't have permission to edit the details of this ticket` }</span>
                            </>
                        : 
                        currentDeleteId ?
                            <>
                                <Button 
                                    id="deleteButton" 
                                    node="button" 
                                    type="submit" 
                                    waves="light" 
                                    disabled={ (user?.result?.googleId === ticketDel?.ticketCreator || user?.result._id === ticketDel.ticketCreator) ? false : true }
                                >
                                    Delete<Icon right>delete</Icon>
                                </Button>
                                &nbsp;
                                <span className="red-text">{ (user?.result?.googleId === ticketDel?.ticketCreator || user?.result._id === ticketDel.ticketCreator) ? null : `You don't have permission to delete this ticket` }</span>
                            </>
                        :
                            <Button id="submitButton" node="button" type="submit" waves="light">
                                Submit<Icon right>send</Icon>
                            </Button>
                    }
                </form>
                <br />
            </div>
        )
    );
}

export default FormTicket;