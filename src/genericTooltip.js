export default () => {
  const tooltip = document.createElement('div');

  tooltip.className = 'tooltip';
  tooltip.innerHTML = 'Keep your mouse on me';
  tooltip.onmouseenter = () => {
    import('./genericTooltipContent').then(({ default: c }) => {
      const o = document.createElement('span');
      
      o.classList.add('tooltiptext');
      o.innerText = c;

      tooltip.appendChild(o);
    });
  };

  return tooltip;
};
