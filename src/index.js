import '../styles.css';
import data from './data';

const accordion = document.createElement('section');
accordion.classList.add('accordion');

const renderTitle = (text) => {
  const title = document.createElement('div');
  title.classList.add('title');
  title.innerText = text;

  return title;
};

const renderContent = (details) => {
  const content = document.createElement('div');
  content.classList.add('content');
  content.appendChild(details);

  return content;
};

for (let d of data) {
  accordion.appendChild(renderTitle(d.title));
}

const attachHandlers = () => {
  const accordions = document.querySelectorAll('.accordion .title');

  accordions.forEach((accordion, index) => {
    accordion.onclick = () => {
      accordion.classList.toggle('active');
      let content = accordion.nextElementSibling;
      if (!content || !content.classList.contains('content')) {
        const accordionText = accordion.innerText;

        data[index].content().then((accordionContent) => {
          content = renderContent(accordionContent);
          content.classList.add('is-open');

          accordion.after(content);
        });
      } else {
        content.classList.toggle('is-open');
      }
    };
  });
};

(() => {
  document.body.appendChild(accordion);
  attachHandlers();
})();
