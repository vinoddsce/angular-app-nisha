import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';


@Directive({
    selector: '[changeBgColor]'
})
class ChangeBgColorDirective {

    constructor(private ref: ElementRef, private ren: Renderer) {
        this.changeBgColor();
    }

    changeBgColor() {
        this.ren.setElementStyle(this.ref.nativeElement, 'text-align', 'center');
    }

    @HostListener('mouseenter')
    mouseEnter() {
        this.ren.setElementStyle(this.ref.nativeElement, 'background-color', 'yellow');
        this.ren.setElementStyle(this.ref.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave')
    mouseExit() {
        this.ren.setElementStyle(this.ref.nativeElement, 'background-color', '#369');
        this.ren.setElementStyle(this.ref.nativeElement, 'color', 'white');
    }
}

export default ChangeBgColorDirective;