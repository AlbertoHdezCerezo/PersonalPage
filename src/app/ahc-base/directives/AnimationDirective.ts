import { Directive, ElementRef, OnDestroy, OnInit, Input } from '@angular/core';

declare var $: any;

@Directive({
    selector: '[animation]'
})
/** [Directive] Creates a Semantic UI animation */
export default class AnimationDirective implements OnInit {
    @Input() public animationIn: string = null;
    @Input() public animationOut: string = null;

    constructor(private el: ElementRef) {}

    /**
     * Initializes dropdown component
     */
    public ngOnInit() {
        $(this.el.nativeElement).transition('hide');
        $(this.el.nativeElement).transition(this.animationIn ? this.animationIn : 'scale');
    }
}
