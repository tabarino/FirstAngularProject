import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testBoxCase'
})
export class TestBoxCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) { return null; }

    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (i > 0 && this.isPreposition(word)) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.toTextBoxCase(word);
      }
    }

    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    const prepositions = [
      'of',
      'the'
    ];

    return prepositions.includes(word.toLowerCase());
  }

  private toTextBoxCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
