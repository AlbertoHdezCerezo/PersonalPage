import { Directive, ElementRef, OnDestroy, OnInit, Input } from '@angular/core';

declare var $: any;

@Directive({
    selector: '[accordion]'
})
/** [Directive] Initialize a SemanticUI accordion element */
export default class AccordionDirective implements OnInit, OnDestroy {
    @Input() public context: string;

    constructor(private el: ElementRef) {}

    /**
     * Initializes dropdown component
     */
    public ngOnInit() {
        $(this.el.nativeElement).accordion();
    }

    /**
     * Removes dropdown component from DOM
     */
    public ngOnDestroy() {
        $(this.el.nativeElement).accordion('destroy');
    }
}
