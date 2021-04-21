export default () => {
  const tooltip = document.createElement('div');

  tooltip.className = 'tooltip';
  tooltip.onmouseenter = () => {
    import('./awesomeTooltipContent').then(({ default: c }) => {
      const o = document.createElement('span');
      
      o.classList.add('tooltiptext');
      o.innerText = c;

      tooltip.appendChild(o);
    });
  };
  tooltip.innerHTML = 'Hover over me';

  return tooltip;
};
