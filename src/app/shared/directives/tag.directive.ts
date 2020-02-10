import { Directive, HostBinding, Input } from '@angular/core';
//directive光拿来写css有些多余，只是做提醒可以这样做
@Directive({
    selector: '[appTag]',
})
export class TagDirective { 
    @Input() @HostBinding('style.background-color') tagBgColor = '#faefe3';
    @Input() @HostBinding('style.color') tagColor = '#ca516a';
    @Input() @HostBinding('style.font-size') tagSize = '0.8rem';
    @Input() @HostBinding('style.padding') tagPadding = '3px';
    @Input() @HostBinding('style.border-radius') tagRadius = '0';
}