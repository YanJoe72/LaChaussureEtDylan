import { Component } from '@angular/core';

@Component({
  selector: 'app-loose',
  templateUrl: './loose.component.html',
  styleUrls: ['./loose.component.css']
})
export class LooseComponent {

  audio!: HTMLAudioElement;


  ngOnInit(): void {
    this.playMusic();
  }

  ngOnDestroy(): void {
    this.stopMusic(); // Arrêter la musique si le composant est détruit
  }
  
  playMusic(): void {
    this.audio = new Audio();
    this.audio.src = 'assets/musics/loose.mp3';
    this.audio.load();
    this.audio.play().catch(error => {
      console.log('Playback error:', error);
    });
  }

  stopMusic(): void {
    if (this.audio) {
      this.audio.pause(); // Mettre en pause la musique
      this.audio.currentTime = 0; // Réinitialiser la position à 0
    }
  }
}
