import { setMetal } from "./TransientState.js"

const handleMetalChange = (changeEvent) => {
    if (changeEvent.target.name === "metalOption") {
        setMetal(changeEvent.target.value)
    }

}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChange)

    let metalsHTML = "<h2>Metals</h2>"

    const metalsArray = metals.map(
        (metal) => {
            return `<div>
                <input type="radio" name="metalOption" value="${metal.id}"/> ${metal.metal}
                </div>`
        }
    )

    metalsHTML += metalsArray.join("")

    return metalsHTML

}