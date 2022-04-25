import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { deletePack, getPacks, putPack, updatePack } from '../../actions/packs';
import { Preloader, Button, Icon, TextInput, Card } from 'react-materialize';

const FormPack = ({ currentId, setCurrentId, currentDeleteId, setCurrentDeleteId }) => {

    const [packData, setPackData] = useState({
        packID: '', packName: '', packDetails: '', ticketID: '', hotelID: '', roomID: '', cabID: '', guideID: '', packPhoto: '', packCost: '', 
    });

    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPacks());
    }, [dispatch]);

    const pack = useSelector((state) => currentId ? state.packs.find((p) => p.packID === currentId) : null);

    const packDel = useSelector((state) => currentDeleteId ? state.packs.find((p) => p.packID === currentDeleteId) : null);

    const packs = useSelector((state) => state.packs);

    useEffect(() => {
        if (pack) setPackData(pack);
    }, [pack])

    useEffect(() => {
        if (packDel) setPackData(packDel);
    }, [packDel])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        function formater() {
            packData.packID = packData.packID.toUpperCase();
            packData.ticketID = packData.ticketID.toUpperCase();
            packData.hotelID = packData.hotelID.toUpperCase();
            packData.roomID = packData.roomID.toUpperCase();
            packData.cabID = packData.cabID.toUpperCase();
            packData.guideID = packData.guideID.toUpperCase();
            packData.packName = capitalize(packData.packName);

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
            const fields = [packData.packID, packData.packDetails, packData.ticketID, packData.hotelID, packData.roomID, packData.cabID, packData.guideID, packData.packName, packData.packCost]
            var index = 0;
            if (packData.packID && packData.ticketID && packData.hotelID && packData.roomID && packData.cabID && packData.guideID && packData.packName && packData.packDetails && packData.packCost) {
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
            dispatch(updatePack(currentId, { ...packData, packCreatorName: user?.result?.name }));
            setCurrentId(null);
            updateSuccess.removeAttribute('hidden');
            setTimeout(() => {updateSuccess.setAttribute('hidden',""); clear();}, 3000);
        } else if (currentDeleteId && validated) {
            dispatch(deletePack(currentDeleteId));
            setCurrentDeleteId(null);
            deleteSuccess.removeAttribute('hidden');
            setTimeout(() => { deleteSuccess.setAttribute('hidden', ""); clear(); }, 3000);
        } else if(validated) {
            formater();
            const packExistCheck = packs.find((c) => c.packID === packData.packID)? true : false;
            if (packExistCheck) {
                alert('Pack with the same Pack ID already exists, if you want to update please go to /EditForm, if you want to delete please go to /DeleteForm');
            } else {
                dispatch(putPack({ ...packData, packCreatorName: user?.result?.name }));
                createSuccess.removeAttribute('hidden');
                setTimeout(() => {createSuccess.setAttribute('hidden',""); clear();}, 3000);
            }
        }
    };

    const clear = () => {
        window.open("/FormPack","_self");
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
        if(user?.result?.googleId !== pack?.packCreator && user?.result._id !== pack.packCreator) {
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
        (pack !== null || packDel !== null) && packData.packID ==='' ?  
            <div id="main-content" className="loaderPage">
                <Preloader active size="big" flashing={false} color="green" />
            </div>
        : (
            <div id="main-content" className="container">
                <div id="updateSuccess" className="success" hidden>Package Updated Sucessfully!</div>
                <div id="createSuccess" className="success" hidden>Package Created Sucessfully!</div>
                <div id="deleteSuccess" className="success" hidden>Cab Deleted Sucessfully!</div>
                <h1 className="center">Input Form</h1>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <TextInput id="packID" label="Pack ID" placeholder="Enter Pack ID" validate value={packData.packID} onChange={(e) => setPackData({ ...packData, packID: e.target.value })} />
                    <span id="warning0" hidden>This field is required!</span><br /><br />
                    <TextInput id="packName" label="Pack Name" placeholder="Enter Pack Name" validate value={packData.packName} onChange={(e) => setPackData({ ...packData, packName: e.target.value })} />
                    <span id="warning1" hidden>This field is required!</span><br /><br />
                    <TextInput id="packDetails" label="Pack Details" placeholder="Enter Pack Details" validate value={packData.packDetails} onChange={(e) => setPackData({ ...packData, packDetails: e.target.value })} />
                    <span id="warning2" hidden>This field is required!</span><br /><br />
                    <TextInput id="ticketID" label="Ticket ID" placeholder="Enter Ticket ID" validate value={packData.ticketID} onChange={(e) => setPackData({ ...packData, ticketID: e.target.value })} />
                    <span id="warning3" hidden>This field is required!</span><br /><br />
                    <TextInput id="hotelID" label="Hotel ID" placeholder="Enter Hotel ID" validate value={packData.hotelID} onChange={(e) => setPackData({ ...packData, hotelID: e.target.value })} />
                    <span id="warning4" hidden>This field is required!</span><br />
                    <TextInput id="roomID" label="Room ID" placeholder="Enter Room ID" validate type="text" value={packData.roomID} onChange={(e) => setPackData({ ...packData, roomID: e.target.value })} />
                    <span id="warning5" hidden>This field is required!</span><br /><br />
                    <TextInput id="cabID" label="Cab ID" placeholder="Enter Cab ID" validate value={packData.cabID} onChange={(e) => setPackData({ ...packData, cabID: e.target.value })} />
                    <span id="warning6" hidden>This field is required!</span><br /><br />
                    <TextInput id="guideID" label="Guide ID" placeholder="Enter Guide ID" validate value={packData.guideID} onChange={(e) => setPackData({ ...packData, guideID: e.target.value })} />
                    <span id="warning7" hidden>This field is required!</span><br /><br />
                    <TextInput id="packCost" label="Cost" placeholder="Enter Cost per day" className="validate" type="number" value={packData.packCost} onChange={(e) => setPackData({ ...packData, packCost : e.target.value })} />
                    <span id="warning8" hidden>This field is required!</span><br /><br />
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPackData({ ...packData, packPhoto: base64 })} />
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
                                    disabled={ (user?.result?.googleId === pack?.packCreator || user?.result._id === pack.packCreator) ? false : true }
                                >
                                    Edit<Icon right>edit</Icon>
                                </Button>
                                &nbsp;
                                <span className="red-text">{ (user?.result?.googleId === pack?.packCreator || user?.result._id === pack.packCreator) ? null : `You don't have permission to edit the details of this pack` }</span>
                            </>
                        : 
                        currentDeleteId ?
                            <>
                                <Button 
                                    id="deleteButton" 
                                    node="button" 
                                    type="submit" 
                                    waves="light" 
                                    disabled={ (user?.result?.googleId === packDel?.packCreator || user?.result._id === packDel.packCreator) ? false : true }
                                >
                                    Delete<Icon right>delete</Icon>
                                </Button>
                                &nbsp;
                                <span className="red-text">{ (user?.result?.googleId === packDel?.packCreator || user?.result._id === packDel.packCreator) ? null : `You don't have permission to delete this pack` }</span>
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

export default FormPack;