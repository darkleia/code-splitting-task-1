import "../styles.css"
import GenericTooltip from './genericTooltip'
import AwesomeTooltip from './awesomeTooltip'
import BestTooltipEver from './bestTooltipEver'

const data = [
  {
    id: 1,
    title: "Accordion #1",
    content: GenericTooltip()
  },
  {
    id: 2,
    title: "Accordion #2",
    content: AwesomeTooltip()
    },
  {
    id: 3,
    title: "Accordion #3",
    content: BestTooltipEver()
  }
];

const accordion = document.createElement("section");
accordion.classList.add("accordion");

const renderTitle = text => {
  const title = document.createElement("div");
  title.classList.add("title");
  title.innerText = text;

  return title;
};

const renderContent = details => {
  const content = document.createElement("div");
  content.classList.add("content");
  content.appendChild(details)

  return content;
};

for (let d of data) {
  accordion.appendChild(renderTitle(d.title));
}

const attachHandlers = () => {
  const accordions = document.querySelectorAll(".accordion .title");
  accordions.forEach(accordion => {
    accordion.onclick = () => {
      accordion.classList.toggle("active");
      let content = accordion.nextElementSibling;
      if (!content || !content.classList.contains('content')) {
          const accordionText = accordion.innerText;
          const accordionContent = data.find(d => d.title === accordionText).content
          content = renderContent(accordionContent)

          accordion.after(content);

      }
      content.classList.toggle("is-open");
    };
  });
};

(() => {
  document.body.appendChild(accordion);
  attachHandlers();
})();
