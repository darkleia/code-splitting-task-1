export default () => {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.innerHTML = `
        Keep your mouse on me
        <span class="tooltiptext">This is tooltip 3</span>
    `;
  return tooltip;
};
