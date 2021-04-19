export default () => {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.innerHTML = `
        Hover over me
        <span class="tooltiptext">This is tooltip 1</span>
    `;
  return tooltip;
};
