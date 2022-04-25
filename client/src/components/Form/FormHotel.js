import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHotel, getHotels, putHotel, updateHotel } from '../../actions/hotels'
import { Preloader, TextInput, Button, Icon, Card } from 'react-materialize';

const FormHotel = ({ currentId, setCurrentId, currentRoomId, setCurrentRoomId, currentDeleteId, setCurrentDeleteId, currentDeleteRoomId, setCurrentDeleteRoomId }) => {

    const [hotelData, setHotelData] = useState({
        hotelID: '', hotelName: '', hotelDetails: '', hotelPhoto: '', roomID: '', roomType: '', facilities: '', roomPhoto: '', roomAvailability: '', roomCost: ''
    });

    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotels());
    }, [dispatch]);

    const hotel = useSelector((state) => currentId ? state.hotels.find((h) => h.hotelID === currentId && h.roomID === currentRoomId): null);

    const hotelDel = useSelector((state) => currentDeleteId ? state.hotels.find((h) => h.hotelID === currentDeleteId && h.roomID === currentDeleteRoomId) : null);

    const hotels = useSelector((state) => state.hotels);


    useEffect(() => {
        if (hotel) setHotelData(hotel);
    }, [hotel])

    useEffect(() => {
        if (hotelDel) setHotelData(hotelDel);
    }, [hotelDel])

    const handleSubmit = (e) => {
        e.preventDefault();
        function formater() {
            hotelData.hotelID = hotelData.hotelID.toUpperCase();
            hotelData.roomID = hotelData.roomID.toUpperCase();
            hotelData.hotelName = capitalize(hotelData.hotelName, false);
            hotelData.roomType = capitalize(hotelData.roomType, false);
            hotelData.facilities = capitalize(hotelData.facilities, true);
            hotelData.roomAvailability = capitalize(hotelData.roomAvailability, true);
            
            function capitalize(input, isArray) {  
                if (isArray) {
                    for (let index = 0; index < input.length; index++) {
                        for (let j = 0; j < input[index].length; j++) {
                            if (input[index][j]===" ") {
                                if (j===0) {
                                    input[index] = input[index][j+1].toUpperCase() + input[index].slice(j+2, input[index].length).toLowerCase();
                                } else {
                                    input[index] = input[index].slice(0,j+1) + input[index][j+1].toUpperCase() + input[index].slice(j+2, input[index].length).toLowerCase();
                                }
                            } else {
                                if (j===0) {
                                    input[index] = input[index][j].toUpperCase() + input[index].slice(j+1, input[index].length).toLowerCase();
                                }
                            }
                        }
                    }
                    return input;
                } else {
                    var words = input.split(' ');  
                    var CapitalizedWords = [];  
                    words.forEach(element => {  
                        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length).toLowerCase());  
                    });  
                    return CapitalizedWords.join(' ');  
                }
            }  
        }

        function validate() {
            const fields = [hotelData.hotelID, hotelData.hotelName, hotelData.hotelDetails, hotelData.hotelPhoto, hotelData.roomID, hotelData.roomType, hotelData.facilities, hotelData.roomPhoto, hotelData.roomAvailability, hotelData.roomCost]
            var index = 0;
            if(hotelData.hotelID && hotelData.hotelName && hotelData.hotelDetails && hotelData.hotelPhoto && hotelData.roomID && hotelData.roomType && hotelData.roomPhoto && hotelData.facilities && hotelData.roomAvailability && hotelData.roomCost) {
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
            formater();
            dispatch(updateHotel(currentId, { ...hotelData, hotelCreatorName: user?.result?.name }));
            setCurrentId(null);
            updateSuccess.removeAttribute('hidden');
            setTimeout(() => {updateSuccess.setAttribute('hidden',""); clear();}, 3000);
        } else if (currentDeleteId && validated) {
            dispatch((deleteHotel(currentDeleteId)));
            deleteSuccess.removeAttribute('hidden');
            setTimeout(() => { deleteSuccess.setAttribute('hidden', ""); clear(); }, 3000);
        } else if(validated) {
            formater();
            const hotelExistCheck = hotels.find((h) => h.hotelID === hotelData.hotelID)? true : false;
            if (hotelExistCheck) {
                alert('Hotel with the same Hotel ID already exists, if you want to update please go to /EditForm, if you want to delete please go to /DeleteForm');
            } else {
                dispatch(putHotel({ ...hotelData, hotelCreatorName: user?.result?.name }));
                createSuccess.removeAttribute('hidden');
                setTimeout(() => {createSuccess.setAttribute('hidden',""); clear();}, 3000);
            }
        }
    };

    const clear = () => {
        window.open("/FormHotel","_self");
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
        if(user?.result?.googleId !== hotel?.hotelCreator && user?.result._id !== hotel.hotelCreator) {
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
        (hotel !== null || hotelDel !== null) && hotelData.hotelID ==='' ?  
            <div id="main-content" className="loaderPage">
                <Preloader active size="big" flashing={false} color="green" />
            </div>
        : (
            <div id="main-content" className="container">
                <div id="updateSuccess" className="success" hidden>Hotel Updated Sucessfully!</div>
                <div id="createSuccess" className="success" hidden>Hotel Created Sucessfully!</div>
                <div id="deleteSuccess" className="success" hidden>Cab Deleted Sucessfully!</div>
                <h1 className="center">Input Form</h1>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <TextInput id="hotelID" label="Hotel ID" placeholder="Enter Hotel ID" validate value={hotelData.hotelID} onChange={(e) => setHotelData({ ...hotelData, hotelID: e.target.value })} />
                    <span id="warning0" hidden>This field is required!</span><br /><br />
                    <TextInput id="hotelName" label="Hotel Name" placeholder="Enter Hotel Name" validate value={hotelData.hotelName} onChange={(e) => setHotelData({ ...hotelData, hotelName: e.target.value })} />
                    <span id="warning1" hidden>This field is required!</span><br /><br />
                    <TextInput id="carModel"label="Hotel Details" placeholder="Enter Hotel Details" validate value={hotelData.hotelDetails} onChange={(e) => setHotelData({ ...hotelData, hotelDetails: e.target.value })} />
                    <span id="warning2" hidden>This field is required!</span><br /><br />
                    <FileBase type="file" multiple={false} onDone={({base64}) => setHotelData({ ...hotelData, hotelPhoto: base64 })} />
                    <span id="warning3" hidden>This field is required!</span><br /><br />
                    <TextInput id="roomID" label="Room ID" placeholder="Enter Room ID" validate value={hotelData.roomID} onChange={(e) => setHotelData({ ...hotelData, roomID: e.target.value })} />
                    <span id="warning4" hidden>This field is required!</span><br /><br />
                    <TextInput id="roomType" label="Room Type" placeholder="Enter Room Type" validate value={hotelData.roomType} onChange={(e) => setHotelData({ ...hotelData, roomType: e.target.value })} />
                    <span id="warning5" hidden>This field is required!</span><br /><br />
                    <TextInput id="facilities" label="Facilities" placeholder="Enter facilities known separated by commas" validate value={hotelData.facilities} onChange={(e) => setHotelData({ ...hotelData, facilities: e.target.value.split(',') })} />
                    <span id="warning6" hidden>This field is required!</span><br /><br />
                    <TextInput id="roomAvailability" label="Availability" placeholder="Enter available days separated by commas" validate value={hotelData.roomAvailability} onChange={(e) => setHotelData({ ...hotelData, roomAvailability: e.target.value.split(',') })} />
                    <span id="warning7" hidden>This field is required!</span><br /><br />
                    <TextInput id="roomCost" label="Cost" placeholder="Enter Cost per day" validate type="number" value={hotelData.roomCost} onChange={(e) => setHotelData({ ...hotelData, roomCost : e.target.value })} />
                    <span id="warning8" hidden>This field is required!</span><br /><br />
                    <FileBase type="file" multiple={false} onDone={({base64}) => setHotelData({ ...hotelData, roomPhoto: base64 })} />
                    <span id="warning9" hidden>This field is required!</span><br /><br />
                    <Button node="button" type="reset" waves="light">Clear<Icon right>refresh</Icon></Button>
                    { 
                        currentId ? 
                            <>
                                <Button 
                                    id="editButton" 
                                    node="button" 
                                    type="submit" 
                                    waves="light" 
                                    disabled={ (user?.result?.googleId === hotel?.hotelCreator || user?.result._id === hotel.hotelCreator) ? false : true }
                                >
                                    Edit<Icon right>edit</Icon>
                                </Button>
                                &nbsp;
                                <span className="red-text">{ (user?.result?.googleId === hotel?.hotelCreator || user?.result._id === hotel.hotelCreator) ? null : `You don't have permission to edit the details of this hotel` }</span>
                            </>
                        : 
                        currentDeleteId ?
                            <>
                                <Button 
                                    id="deleteButton" 
                                    node="button" 
                                    type="submit" 
                                    waves="light" 
                                    disabled={ (user?.result?.googleId === hotelDel?.hotelCreator || user?.result._id === hotelDel.hotelCreator) ? false : true }
                                >
                                    Delete<Icon right>delete</Icon>
                                </Button>
                                &nbsp;
                                <span className="red-text">{ (user?.result?.googleId === hotelDel?.hotelCreator || user?.result._id === hotelDel.hotelCreator) ? null : `You don't have permission to delete this hotel` }</span>
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

export default FormHotel;