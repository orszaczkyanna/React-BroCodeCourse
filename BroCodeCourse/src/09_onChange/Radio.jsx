import React, {useState} from "react"

function MyComponent(){

    const [shipping, setShipping] = useState("Delivery")

    function handleShippingChange(event) { setShipping(event.target.value)}

    return(
        <div>
           
            <label>
                <input  type="radio" value="Pick up"
                        checked={shipping === "Pick up"}
                        onChange={handleShippingChange}/>
                Pick Up
            </label>
            <br />
            <label>
                <input  type="radio" value="Delivery" 
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    )
}

export default MyComponent



