export default [
  {
    id: 1,
    title: 'Accordion #1',
    content: () => import('./genericTooltip').then(({ default: f }) => f()),
  },
  {
    id: 2,
    title: 'Accordion #2',
    content: () => import('./awesomeTooltip').then(({ default: f }) => f()),
  },
  {
    id: 3,
    title: 'Accordion #3',
    content: () => import('./bestTooltipEver').then(({ default: f }) => f()),
  },
];
