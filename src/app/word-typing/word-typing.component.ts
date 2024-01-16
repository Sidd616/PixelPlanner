import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-typing',
  templateUrl: './word-typing.component.html',
  styleUrls: ['./word-typing.component.css']
})
export class WordTypingComponent implements OnInit {
  words: string[] = ['Angular', 'Tailwind', 'JavaScript', 'TypeScript'];
  currentWordIndex = 0;

  constructor() { }

  ngOnInit(): void {
    // Initial word
    this.changeWord();
  }

  changeWord() {
    // Increment index or reset to 0 if reached the end
    this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
  }
}
