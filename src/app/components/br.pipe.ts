import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'brPipe',
  standalone: true
})
export class BrPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return '';
    
    // Convertir <br> en saltos de línea HTML y sanitizar
    const html = value.replace(/<br\s*\/?>/gi, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}