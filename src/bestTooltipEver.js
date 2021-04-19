export default () => {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.innerHTML = `
        Mouse over me
        <span class="tooltiptext">This is tooltip 2</span>
    `;
  return tooltip;
};
