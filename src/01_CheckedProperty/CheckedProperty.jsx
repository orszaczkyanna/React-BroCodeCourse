import React, { useRef } from 'react';

function CheckedProperty(){
    
    const chkSubscribeRef = useRef(null);
    const radioVisaRef = useRef(null);
    const radioMasterCardRef = useRef(null);
    const radioPayPalRef = useRef(null);
    const subResultRef = useRef(null);
    const paymentResultRef = useRef(null);

    function submit(){
        // Checkbox
        if (chkSubscribeRef.current.checked){
            subResultRef.current.textContent = "You are subscribed";
        }
        else{
            subResultRef.current.textContent = "You are NOT subscribed";
        }

        // Radio buttons
        if(radioVisaRef.current.checked){
            paymentResultRef.current.textContent = "You are paying with Visa";
        }
        else if(radioMasterCardRef.current.checked){
            paymentResultRef.current.textContent = "You are paying with MasterCard";
        }
        else if(radioPayPalRef.current.checked){
            paymentResultRef.current.textContent = "You are paying with PayPal";
        }
        else{
            paymentResultRef.current.textContent = "You must select a payment type!";
        }
        
    }

    return(
        <div>
            <input type="checkbox" id="chkSubscribe" ref={chkSubscribeRef}/>
            <label htmlFor="chkSubscribe">Subscribe</label>
            <br /><br />
            <input type="radio" id="radioVisa" name="card" value="Visa" ref={radioVisaRef}/>
            <label htmlFor="radioVisa">Visa</label>
            <br />
            <input type="radio" id="radioMasterCard" name="card" value="MasterCard" ref={radioMasterCardRef} />
            <label htmlFor="radioMasterCard">MasterCard</label>
            <br />
            <input type="radio" id="radioPayPal" name="card" value="PayPal" ref={radioPayPalRef} />
            <label htmlFor="radioPayPal">PayPal</label>
            <br /><br />
            <button type="submit" id="btnSubmit" onClick={submit}>Submit</button>
            <p ref={subResultRef}></p>
            <p ref={paymentResultRef}></p>            
        </div>
    )
}
export default CheckedProperty