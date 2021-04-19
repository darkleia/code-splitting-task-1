import { divide } from "lodash"

export default () => {
    const tooltip = document.createElement('div')
    tooltip.className = 'tooltip'
    tooltip.innerHTML = `
        Hover over me
        <span class="tooltiptext">Tooltip text</span>
    `
    return tooltip
}