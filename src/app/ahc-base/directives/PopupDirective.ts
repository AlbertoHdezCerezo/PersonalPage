import { Directive, ElementRef, OnDestroy, OnInit, Input } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[popup]'
})
/** [Directive] Initialize a SemanticUI popup element */
export default class PopupDirective implements OnInit, OnDestroy {
  @Input() public content: string;

  constructor(private el: ElementRef) {}

  /**
   * Initializes dropdown component
   */
  public ngOnInit() {
    $(this.el.nativeElement).popup({position: 'right center'});
  }

  /**
   * Removes dropdown component from DOM
   */
  public ngOnDestroy() {
    $(this.el.nativeElement).popup('destroy');
  }
}
