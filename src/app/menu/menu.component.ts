import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(private router: Router) {}
  navigateToJeu() {
    this.router.navigate(['/jeu']);
  }

  audio: HTMLAudioElement | null = null;

  ngOnInit(): void {
    // Simuler un clic sur un élément invisible après le chargement de la page
    setTimeout(() => {
      const trigger = document.getElementById('music-trigger');
      trigger?.click(); // Simuler le clic pour activer la musique
    }, 1000);
  }

  ngOnDestroy(): void {
    this.stopMusic(); // Arrêter la musique si le composant est détruit
  }

  playMusic(): void {
    if (this.audio) {
      this.audio.play().catch(error => {
        console.log('Erreur de lecture audio :', error);
      });
    } else {
      this.audio = new Audio('assets/musics/menu.mp3');
      this.audio.play().catch(error => {
        console.log('Erreur de lecture audio :', error);
      });
    }
  }

  stopMusic(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0; // Réinitialiser la position à 0
    }
  }

}
