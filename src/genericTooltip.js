import { tooltipFactory } from './helper';

export default () =>
  tooltipFactory('Keep your mouse on me', () => import('./genericTooltipContent'));
