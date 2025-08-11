import { setStyle } from "./TransientState.js"

const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "styleOption") {
        setStyle(changeEvent.target.value)
    }
}

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChange)

    let stylesHTML = "<h2>Styles</h2>"

    const stylesArray = styles.map(
        (style) => {
            return `<div>
                <input type="radio" name="styleOption" value="${style.id}"/> ${style.style}
                </div>`
        }
    )

    stylesHTML += stylesArray.join("")

    return stylesHTML

}