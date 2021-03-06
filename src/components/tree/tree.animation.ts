import { animate, state, style, transition, trigger } from "@angular/animations";

export const treeAnimations = trigger('collapseState', [
  state('collapsed',
    style({
      'margin-top' : '-{{ fullHeight }}px',
    }),
    { params : { fullHeight : 0 } },
  ),
  state('visible',
    style({
      'margin-top' : '0px',
    }),
    { params : { fullHeight : 0 } },
  ),
  transition('collapsed => visible', [
    animate('180ms'),
  ]),
  transition('visible => collapsed', [
    animate('180ms'),
  ]),
])
