export default () => {
  const tooltip = document.createElement('div');

  tooltip.className = 'tooltip';
  tooltip.innerHTML = 'Mouse over me';
  tooltip.onmouseenter = () => {
    import('./bestTooltipEverContent').then(({ default: c }) => {
      const o = document.createElement('span');
      
      o.classList.add('tooltiptext');
      o.innerText = c;

      tooltip.appendChild(o);
    });
  };

  return tooltip;
};
