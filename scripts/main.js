import { MetalOptions } from './Metals.js'
import { SizeOptions } from './Sizes.js'
import { StyleOptions } from './Styles.js'
import { MakeButton } from './OrderButton.js'
import { Orders } from './Orders.js'

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const buttonHTML = MakeButton()
    const ordersHTML = await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML

}

document.addEventListener("newSubmissionCreated", render)

render()