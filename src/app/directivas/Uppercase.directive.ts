import { Directive, ElementRef } from "@angular/core";

@Directive(
    {selector: '[Mayuscula]'}
)
export class UpperCaseDirective {
    constructor(ele:ElementRef){
        ele.nativeElement.style.textTransform = 'uppercase';
        
    }
}