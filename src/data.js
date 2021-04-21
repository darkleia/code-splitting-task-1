const a = ({default: f}) => f();

export default [
  {
    id: 1,
    title: 'Accordion #1',
    content: () => import('./genericTooltip').then(a),
  },
  {
    id: 2,
    title: 'Accordion #2',
    content: () => import('./awesomeTooltip').then(a),
  },
  {
    id: 3,
    title: 'Accordion #3',
    content: () => import('./bestTooltipEver').then(a),
  },
];
