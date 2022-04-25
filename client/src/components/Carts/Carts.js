import { useEffect } from 'react';
import { Button, Col, Icon, Preloader, Row, Card, DatePicker, TimePicker } from 'react-materialize';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../../actions/carts';
import { putOrder } from '../../actions/orders';
import Cart from './Cart/Cart';

function Carts() {

    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarts());
    }, [dispatch]);

    const carts = useSelector((state) => state.carts);

    let checker=0;

    carts.map((cart) => (
        (cart.cartID === user?.result?.googleId || cart.cartID === user?.result._id) ? 
            checker=checker+1
        : checker
    ));

    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const nextWeek = new Date().getDate() + 7;
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const date = new Date(year, month, nextWeek, hours, minutes);
    const newDate = new Date(year, month, nextWeek+1, hours, minutes);
    let startDateAndTime, endDateAndTime, startDate=date, endDate=newDate, startHour=hours, startMinute=minutes, endHour=hours, endMinute=minutes;

    
    const placeOrder = (e) => {
        e.preventDefault()
        startDateAndTime = new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate(),startHour,startMinute);
        endDateAndTime = new Date(endDate.getFullYear(),endDate.getMonth(),endDate.getDate(),endHour,endMinute);
        carts.map((cart) => (
            (cart.cartID === user?.result?.googleId || cart.cartID === user?.result._id) ? 
            dispatch(putOrder({...cart, orderCategory: cart.cartCategory, orderID: cart.cartID, orderStartDate: startDateAndTime, orderEndDate: endDateAndTime, orderEmail: user?.result?.email }))
            : null 
        ));
        alert(`Order Placed for the dates ${startDateAndTime} to ${endDateAndTime} successfully!`);
        clear();
    }

    const clear = () => {
        window.open("/Order", "_self");
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

    return(
        !carts.length && checker!==0 ? 
            <div id="main-content" className="loaderPage">
                <h1>Cart is empty! 😕</h1>
            </div>
        :(
            checker===0 ?
                <div id="main-content" className="loaderPage">
                    <Preloader active size="big" flashing={false} color="green" />
                </div>
            :(
                <div id="main-content" className="container cartPage">
                    <div id="removeSuccess" className="success" hidden>Item successfully removed from cart!</div>
                    <h1 className="center">Cart</h1>
                    <Row id="cartRow">
                        {carts.map((cart) => (
                            (cart.cartID === user?.result?.googleId || cart.cartID === user?.result._id) ? 
                                <Col key={cart._id} s={12} m={6}>
                                    <Cart cart={cart} />
                                </Col> 
                                : null 
                        ))}
                    </Row>
                    <form autoComplete="off" noValidate onSubmit={placeOrder}>
                    <h5 className="left-align">Please select the date and time you want to avail the services from: </h5>
                        <Row>
                            <Col s={12} m={6}>
                                <DatePicker
                                    id="startDatePicker"
                                    label="Start Date"
                                    options={{
                                        setDefaultDate: true,
                                        defaultDate: date,
                                        firstDay: 1,
                                        format: 'mmmm dd, yyyy (ddd)',
                                        i18n: {
                                            cancel: 'Cancel', clear: 'Clear', done: 'Ok',
                                            months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
                                            monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
                                            nextMonth: '›', previousMonth: '‹', 
                                            weekdays: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
                                            weekdaysAbbrev: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
                                            weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
                                        },
                                        minDate: date,
                                        onSelect: (selectedDate=date) => {startDate=selectedDate},
                                        yearRange: 10
                                    }}
                                />
                            </Col>
                            <Col s={12} m={6}>
                                <TimePicker
                                    id="startTimePicker"
                                    label="Start Time"
                                    options={{
                                        defaultTime: 'now',
                                        fromNow: 0,
                                        twelveHour: false,
                                        i18n: { cancel: 'Cancel', clear: 'Clear', done: 'Ok' },
                                        onSelect: (selectedHour, selectedMinute) => {startHour = selectedHour; startMinute=selectedMinute;},
                                    }}
                                />
                            </Col>
                        </Row>
                        <h5 className="left-align">Please select the date and time untill which you want to avail the services: </h5>
                        <Row>
                            <Col s={12} m={6}>
                                <DatePicker
                                    id="endDatePicker"
                                    label="End Date"
                                    options={{
                                        setDefaultDate: true,
                                        defaultDate: newDate,
                                        firstDay: 1,
                                        format: 'mmmm dd, yyyy (ddd)',
                                        i18n: {
                                            cancel: 'Cancel', clear: 'Clear', done: 'Ok',
                                            months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
                                            monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
                                            nextMonth: '›', previousMonth: '‹', 
                                            weekdays: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
                                            weekdaysAbbrev: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
                                            weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
                                        },
                                        minDate: date,
                                        onSelect: (selectedDate=newDate) => {endDate=selectedDate},
                                        yearRange: 10
                                    }}
                                />
                            </Col>
                            <Col s={12} m={6}>
                                <TimePicker
                                    id="endTimePicker"
                                    label="End Time"
                                    options={{
                                        defaultTime: 'now',
                                        fromNow: 0,
                                        twelveHour: false,
                                        i18n: { cancel: 'Cancel', clear: 'Clear', done: 'Ok' },
                                        onSelect: (selectedHour, selectedMinute) => {endHour = selectedHour; endMinute = selectedMinute;},
                                    }}
                                />
                            </Col>
                        </Row>
                        <span>*These dates and times don't affect that of the ticket</span><br /><br />
                    <Button node="button" type="submit"><Icon>shopping_bag</Icon> Place Order</Button>
                    </form>
                </div>
            )
        )
    );
}


export default Carts;