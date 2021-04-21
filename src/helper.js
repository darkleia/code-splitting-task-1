export const tooltipFactory = (content, hintSourceFactory) => {
  const sample = document.createElement('div');

  sample.classList.add('tooltip');
  sample.innerHTML = content;
  sample.onmouseenter = () => {
    hintSourceFactory().then(({ default: hintText }) => {
      const hint = document.createElement('span');

      hint.classList.add('tooltiptext');
      hint.innerText = hintText;

      sample.appendChild(hint);
    });
  };

  return sample;
};
