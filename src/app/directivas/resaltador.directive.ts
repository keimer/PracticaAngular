import { Input, Directive, ElementRef  } from "@angular/core";

@Directive(
    {selector:"[resaltador]"}
)
export class resaltadorDirective{
    constructor(eleRef : ElementRef){
        eleRef.nativeElement.style.backgroundColor = "yellow";
    }
}