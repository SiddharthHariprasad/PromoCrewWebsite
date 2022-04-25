import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGuide, getGuides, putGuide, updateGuide } from '../../actions/guides'
import { Preloader, TextInput, Button, Icon, Card } from 'react-materialize';

const FormGuide = ({ currentId, setCurrentId, currentDeleteId, setCurrentDeleteId }) => {

    const [guideData, setGuideData] = useState({
        guideID: '', guideName: '', guideLanguages: '', guideExperience: '',guideAge: '', guidePhoto: '', guideAvailability: '', guideCost: '', guideLocation: ''
    });

    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGuides());
    }, [dispatch]);

    const guide = useSelector((state) => currentId ? state.guides.find((g) => g.guideID === currentId) : null);

    const guideDel = useSelector((state) => currentDeleteId ? state.guides.find((g) => g.guideID === currentDeleteId) : null);

    const guides = useSelector((state) => state.guides);

    useEffect(() => {
        if (guide) setGuideData(guide);
    }, [guide])

    useEffect(() => {
        if (guideDel) setGuideData(guideDel);
    }, [guideDel])

    const handleSubmit = (e) => {
        e.preventDefault();

        function formater() {
            guideData.guideID = guideData.guideID.toUpperCase();
            guideData.guideName = capitalize(guideData.guideName, false);
            guideData.guideLanguages = capitalize(guideData.guideLanguages, true);
            guideData.guideAvailability = capitalize(guideData.guideAvailability, true);

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
            const fields = [guideData.guideID, guideData.guideName, guideData.guideLanguages, guideData.guideExperience, guideData.guideAge, guideData.guidePhoto, guideData.guideAvailability, guideData.guideCost]
            var index = 0;
            if(guideData.guideID && guideData.guideName && guideData.guideLanguages && guideData.guideExperience && guideData.guideAge && guideData.guidePhoto && guideData.guideAvailability && guideData.guideCost) {
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
            dispatch(updateGuide(currentId, { ...guideData, guideCreatorName: user?.result?.name }));
            setCurrentId(null);
            updateSuccess.removeAttribute('hidden');
            setTimeout(() => {updateSuccess.setAttribute('hidden',""); clear();}, 3000);
        } else if (currentDeleteId && validated) {
            dispatch(deleteGuide(currentDeleteId));
            setCurrentDeleteId(null);
            deleteSuccess.removeAttribute('hidden');
            setTimeout(() => { deleteSuccess.setAttribute('hidden',""); clear(); }, 3000);
        } else if(validated) {
            formater();
            const guideExistCheck = guides.find((g) => g.guideID === guideData.guideID)? true : false;
            if (guideExistCheck) {
                alert('Guide with the same Guide ID already exists, if you want to update please go to /EditForm, if you want to delete please go to /DeleteForm');
            } else {
                dispatch(putGuide({ ...guideData, guideCreatorName: user?.result?.name }));
                createSuccess.removeAttribute('hidden');
                setTimeout(() => {createSuccess.setAttribute('hidden',""); clear();}, 3000);
            }
        }
    };

    const clear = () => {
        window.open("/FormGuide","_self");
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
        if(user?.result?.googleId !== guide?.guideCreator && user?.result._id !== guide.guideCreator) {
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
        (guide !== null || guideDel !== null) && guideData.guideID ==='' ?  
            <div id="main-content" className="loaderPage">
                <Preloader active size="big" flashing={false} color="green" />
            </div>
        : (
            <div id="main-content" className="container">
                <div id="updateSuccess" className="success" hidden>Guide Updated Sucessfully!</div>
                <div id="createSuccess" className="success" hidden>Guide Created Sucessfully!</div>
                <div id="deleteSuccess" className="success" hidden>Guide Deleted Sucessfully!</div>
                <h1 className="center">Input Form</h1>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <TextInput id="guideID" label="Guide ID" placeholder="Enter Guide ID" validate value={guideData.guideID} onChange={(e) => setGuideData({ ...guideData, guideID: e.target.value })} />
                    <span id="warning0" hidden>This field is required!</span><br /><br />
                    <TextInput id="guideName" label="Guide Name" placeholder="Enter Guide Name" validate value={guideData.guideName} onChange={(e) => setGuideData({ ...guideData, guideName: e.target.value })} />
                    <span id="warning1" hidden>This field is required!</span><br /><br />
                    <TextInput id="guideLanguages" label="Languages Known" placeholder="Enter languages known separated by commas" validate value={guideData.guideLanguages} onChange={(e) => setGuideData({ ...guideData, guideLanguages: e.target.value.split(',') })} />
                    <span id="warning2" hidden>This field is required!</span><br /><br />
                    <TextInput id="guideExperience" label="Experience" placeholder="Enter Experience" type="number" validate  value={guideData.guideExperience} onChange={(e) => setGuideData({ ...guideData, guideExperience: e.target.value })} />
                    <span id="warning3" hidden>This field is required!</span><br /><br />
                    <TextInput id="guideAge" label="Age" placeholder="Enter Age" validate type="number" value={guideData.guideAge} onChange={(e) => setGuideData({ ...guideData, guideAge: e.target.value })} />
                    <span id="warning4" hidden>This field is required!</span><br /><br />
                    <TextInput id="guideAvailability" label="Availability" placeholder="Enter available days separated by commas" validate value={guideData.guideAvailability} onChange={(e) => setGuideData({ ...guideData, guideAvailability: e.target.value.split(',') })} />
                    <span id="warning5" hidden>This field is required!</span><br /><br />
                    <TextInput id="guideCost" label="Cost" placeholder="Enter Cost per day" validate  type="number" value={guideData.guideCost} onChange={(e) => setGuideData({ ...guideData, guideCost : e.target.value })} />
                    <span id="warning6" hidden>This field is required!</span><br /><br />
                    <TextInput id="guideLanguage" label="Location" placeholder="Enter location" validate value={guideData.guideLocation} onChange={(e) => setGuideData({ ...guideData, guideLocation : e.target.value })} />
                    <span id="warning7" hidden>This field is required!</span><br /><br />
                    <FileBase type="file" multiple={false} onDone={({base64}) => setGuideData({ ...guideData, guidePhoto: base64 })} />
                    <span id="warning8" hidden>This field is required!</span><br /><br />
                    <Button node="button" type="reset" waves="light">Clear<Icon right>refresh</Icon></Button>
                    { 
                        currentId ? 
                            <>
                                <Button 
                                    id="editButton" 
                                    node="button" 
                                    type="submit" 
                                    waves="light" 
                                    disabled={ (user?.result?.googleId === guide?.guideCreator || user?.result._id === guide.guideCreator) ? false : true }
                                >
                                    Edit<Icon right>edit</Icon>
                                </Button>
                                &nbsp;
                                <span className="red-text">{ (user?.result?.googleId === guide?.guideCreator || user?.result._id === guide.guideCreator) ? null : `You don't have permission to edit the details of this guide` }</span>
                            </>
                        : 
                        currentDeleteId ?
                            <>
                                <Button 
                                    id="deleteButton" 
                                    node="button" 
                                    type="submit" 
                                    waves="light" 
                                    disabled={ (user?.result?.googleId === guideDel?.guideCreator || user?.result._id === guideDel.guideCreator) ? false : true }
                                >
                                    Delete<Icon right>delete</Icon>
                                </Button>
                                &nbsp;
                                <span className="red-text">{ (user?.result?.googleId === guideDel?.guideCreator || user?.result._id === guideDel.guideCreator) ? null : `You don't have permission to delete this guide` }</span>
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

export default FormGuide;