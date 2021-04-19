import "../styles.css";

const data = [
  {
    id: 1,
    title: "Accordion #1",
    getContent: async() => import('./genericTooltip'),
  },
  {
    id: 2,
    title: "Accordion #2",
    getContent: async () => import('./awesomeTooltip'),
  },
  {
    id: 3,
    title: "Accordion #3",
    getContent: async () => import('./bestTooltipEver'),
  },
];

const accordion = document.createElement("section");
accordion.classList.add("accordion");

const renderTitle = (text) => {
  const title = document.createElement("div");
  title.classList.add("title");
  title.innerText = text;

  return title;
};

const renderContent = (details) => {
  const content = document.createElement("div");
  content.classList.add("content");
  content.appendChild(details);

  return content;
};

for (let d of data) {
  accordion.appendChild(renderTitle(d.title));
}

const attachHandlers = () => {
  const accordions = document.querySelectorAll(".accordion .title");
  accordions.forEach((accordion) => {
    accordion.onclick = async () => {
      accordion.classList.toggle("active");
      let content = accordion.nextElementSibling;
      if (!content || !content.classList.contains("content")) {
        const accordionText = accordion.innerText;
        const accordionContent = await data
            .find((d) => d.title === accordionText)
            .getContent();
        content = renderContent(accordionContent.default());

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
