import { placeOrder } from './TransientState.js'

const handleOrderSubmission = (event) => {
    if (event.target.id === "submission-button") {
        console.log("Order Saved")
        console.log(JSON.stringify(placeOrder()))
    }
}

export const MakeButton = () => {
    document.addEventListener("click", handleOrderSubmission)
    return '<button id="submission-button">Save Choices</button>'
}