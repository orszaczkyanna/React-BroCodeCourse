import React, {useState} from "react"

function MyComponent(){

    const [payment, setPayment] = useState("")

    function handlePaymentChange(event) { setPayment(event.target.value)}

    return(
        <div>
            
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

        </div>
    )
}

export default MyComponent



