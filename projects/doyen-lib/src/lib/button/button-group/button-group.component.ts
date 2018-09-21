import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ButtonDirective } from '../button.directive';
import { ButtonType } from '../button.constants';

export enum StackingOptions {
  StackedOnly = 'stacked',
  StackedForMedium = 'stacked-for-medium',
  StackedForSmall = 'stacked-for-small'
}

@Component({
  selector: 'bd-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent extends ButtonDirective {

  /**
   * Defining stack attribute for button group
   */
  @Input('stack') set stack(option: StackingOptions) {
    if (option.length <= 0) {
      this.class = StackingOptions.StackedOnly;
    } else {
      this.class = option;
    }
  }

  constructor(
    element: ElementRef
  ) {
    super(element);
    super.resetClass(() => {
      this.class = ButtonType.ButtonGroup;
    });
  }



}
