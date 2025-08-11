import { setSize } from "./TransientState.js"

const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "sizeOption") {
        setSize(changeEvent.target.value)
    }
}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleStyleChange)

    let sizesHTML = "<h2>Sizes</h2>"

    const sizesArray = sizes.map(
        (size) => {
            return `<div>
                <input type="radio" name="sizeOption" value="${size.id}"/> ${size.carets} carats
                </div>`
        }
    )

    sizesHTML += sizesArray.join("")

    return sizesHTML

}