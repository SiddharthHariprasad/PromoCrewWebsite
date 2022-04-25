import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCab, getCabs, putCab, updateCab } from '../../actions/cabs';
import { Button, Card, Icon, Preloader, TextInput } from 'react-materialize';

const FormCab = ({ currentId, setCurrentId, currentDeleteId, setCurrentDeleteId }) => {

    const [cabData, setCabData] = useState({
        cabID: '', driverName: '', carModel: '', driverLanguages: '', driverExperience: '',driverAge: '', driverPhoto: '', driverAvailability: '', driverCost: '', driverLocation: ''
    });

    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCabs());
    }, [dispatch]);

    const cab = useSelector((state) => currentId ? state.cabs.find((c) => c.cabID === currentId) : null);

    const cabDel = useSelector((state) => currentDeleteId ? state.cabs.find((c) => c.cabID === currentDeleteId) : null);

    const cabs = useSelector((state) => state.cabs);

    useEffect(() => {
        if (cab) setCabData(cab);
    }, [cab])

    useEffect(() => {
        if (cabDel) setCabData(cabDel);
    }, [cabDel])

    const handleSubmit = (e) => {
        e.preventDefault();

        function formater() {
            cabData.cabID = cabData.cabID.toUpperCase();
            cabData.driverName = capitalize(cabData.driverName, false);
            cabData.carModel = capitalize(cabData.carModel, false);
            cabData.driverLanguages = capitalize(cabData.driverLanguages, true);
            cabData.driverAvailability = capitalize(cabData.driverAvailability, true);

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
            const fields = [cabData.cabID, cabData.driverName, cabData.carModel, cabData.driverLanguages, cabData.driverExperience, cabData.driverAge, cabData.driverPhoto, cabData.driverAvailability, cabData.driverCost, cabData.driverLocation]
            var index = 0;
            if(cabData.cabID && cabData.driverName && cabData.carModel && cabData.driverLanguages && cabData.driverExperience && cabData.driverAge && cabData.driverPhoto && cabData.driverAvailability && cabData.driverCost && cabData.driverLocation) {
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
            dispatch(updateCab(currentId, { ...cabData, cabCreatorName: user?.result?.name }));
            setCurrentId(null);
            updateSuccess.removeAttribute('hidden');
            setTimeout(() => {updateSuccess.setAttribute('hidden',""); clear();}, 3000);
        } else if (currentDeleteId && validated) {
            dispatch(deleteCab(currentDeleteId));
            setCurrentDeleteId(null);
            deleteSuccess.removeAttribute('hidden');
            setTimeout(() => { deleteSuccess.setAttribute('hidden', ""); clear(); }, 3000);
        } else if(validated) {
            formater();
            const cabExistCheck = cabs.find((c) => c.cabID === cabData.cabID)? true : false;
            if (cabExistCheck) {
                alert('Cab with the same Cab ID already exists, if you want to update please go to /EditForm, if you want to delete please go to /DeleteForm');
            } else {
                dispatch(putCab({ ...cabData, cabCreatorName: user?.result?.name }));
                createSuccess.removeAttribute('hidden');
                setTimeout(() => {createSuccess.setAttribute('hidden',""); clear();}, 3000);
            }
        }
    };

    const clear = () => {
        window.open("/FormCab","_self");
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
        if(user?.result?.googleId !== cab?.cabCreator && user?.result._id !== cab.cabCreator) {
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
        (cab !== null || cabDel !== null) && cabData.cabID ==='' ?  
            <div id="main-content" className="loaderPage">
                <Preloader active size="big" flashing={false} color="green" />
            </div>
        : (
            <div id="main-content" className="container">
                <div id="updateSuccess" className="success" hidden>Cab Updated Sucessfully!</div>
                <div id="createSuccess" className="success" hidden>Cab Created Sucessfully!</div>
                <div id="deleteSuccess" className="success" hidden>Cab Deleted Sucessfully!</div>
                <h1 className="center">Input Form</h1>
                <form autoComplete="off" noValidate onSubmit={handleSubmit} onReset={clear}>
                    <TextInput id="cabID" label="Cab ID" placeholder="Enter Cab ID" validate value={cabData.cabID} onChange={(e) => setCabData({ ...cabData, cabID: e.target.value })} />
                    <span id="warning0" hidden>This field is required!</span><br /><br />
                    <TextInput id="driverName" label="Driver Name" placeholder="Enter Driver Name" validate value={cabData.driverName} onChange={(e) => setCabData({ ...cabData, driverName: e.target.value })} />
                    <span id="warning1" hidden>This field is required!</span><br /><br />
                    <TextInput id="carModel" label="Car Model" placeholder="Enter Car Model" validate value={cabData.carModel} onChange={(e) => setCabData({ ...cabData, carModel: e.target.value })} />
                    <span id="warning2" hidden>This field is required!</span><br /><br />
                    <TextInput id="driverLanguages" label="Languages Known" placeholder="Enter languages known separated by commas" validate value={cabData.driverLanguages} onChange={(e) => setCabData({ ...cabData, driverLanguages: e.target.value.split(',') })} />
                    <span id="warning3" hidden>This field is required!</span><br /><br />
                    <TextInput id="driverExperience" label="Experience" placeholder="Enter Experience" validate  type="number" value={cabData.driverExperience} onChange={(e) => setCabData({ ...cabData, driverExperience: e.target.value })} />
                    <span id="warning4" hidden>This field is required!</span><br /><br />
                    <TextInput id="driverAge" label="Age" placeholder="Enter Age" validate type="number" value={cabData.driverAge} onChange={(e) => setCabData({ ...cabData, driverAge: e.target.value })} />
                    <span id="warning5" hidden>This field is required!</span><br /><br />
                    <TextInput id="driverAvailability" label="Availability" placeholder="Enter available days separated by commas" validate value={cabData.driverAvailability} onChange={(e) => setCabData({ ...cabData, driverAvailability: e.target.value.split(',') })} />
                    <span id="warning6" hidden>This field is required!</span><br /><br />
                    <TextInput id="driverLocation" label="Location" placeholder="Enter Location" validate value={cabData.driverLocation} onChange={(e) => setCabData({ ...cabData, driverLocation : e.target.value })} />
                    <span id="warning7" hidden>This field is required!</span><br /><br />
                    <TextInput id="driverCost" label="Cost" placeholder="Enter Cost per day" validate  type="number" value={cabData.driverCost} onChange={(e) => setCabData({ ...cabData, driverCost : e.target.value })} />
                    <span id="warning8" hidden>This field is required!</span><br /><br />
                    <FileBase type="file" multiple={false} onDone={({base64}) => setCabData({ ...cabData, driverPhoto: base64 })} />
                    <span id="warning9" hidden>This field is required!</span><br /><br />
                    <Button node="button" type="reset" waves="light">Clear<Icon right>refresh</Icon></Button>&nbsp;
                    { 
                        currentId ? 
                            <>
                                <Button 
                                    id="editButton" 
                                    node="button" 
                                    type="submit" 
                                    waves="light" 
                                    disabled={ (user?.result?.googleId === cab?.cabCreator || user?.result._id === cab.cabCreator) ? false : true }
                                >
                                    Edit<Icon right>edit</Icon>
                                </Button>
                                &nbsp;
                                <span className="red-text">{ (user?.result?.googleId === cab?.cabCreator || user?.result._id === cab.cabCreator) ? null : `You don't have permission to edit the details of this cab` }</span>
                            </>
                        : 
                            currentDeleteId ?
                                <>
                                    <Button 
                                        id="deleteButton" 
                                        node="button" 
                                        type="submit" 
                                        waves="light" 
                                        disabled={ (user?.result?.googleId === cabDel?.cabCreator || user?.result._id === cabDel.cabCreator) ? false : true }
                                    >
                                        Delete<Icon right>delete</Icon>
                                    </Button>
                                    &nbsp;
                                    <span className="red-text">{ (user?.result?.googleId === cabDel?.cabCreator || user?.result._id === cabDel.cabCreator) ? null : `You don't have permission to delete this cab` }</span>
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

export default FormCab;