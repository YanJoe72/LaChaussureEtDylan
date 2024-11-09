import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jauge',
  templateUrl: './jauge.component.html',
  styleUrls: ['./jauge.component.css']
})
export class JaugeComponent {
  isPaused = false;
  showGauge = false;
  gaugeValue = 0;
  gaugeInterval: any;
  statut = true;
  imagePosition = { x: 0, y: 0 }; // Position de l'image lors du lancer
  lineLength = 400; // Longueur de la ligne

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('line') line!: ElementRef<HTMLDivElement>; // Référence à la ligne

  constructor(private router: Router, private renderer: Renderer2) {}

  // La vidéo ne se lance plus automatiquement ici.
  // playVideo() n'est appelée que lorsqu'il y a une action utilisateur, comme stopGauge().
  playVideo(): void {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.play();
    }
  }

  toggleGauge() {
    if (this.statut) {
      this.isPaused = !this.isPaused;
      this.showGauge = true;
      this.statut = false;
      this.startGauge();

      // Rendre la ligne invisible
      const lineElement = document.querySelector('.line');
      if (lineElement) {
        lineElement.classList.add('invisible');
      }
    }
  }

  startGauge() {
    let increment = 20;
    this.gaugeInterval = setInterval(() => {
      this.gaugeValue += increment;

      if (this.gaugeValue >= 100) {
        this.gaugeValue = 100;
        increment = -20;
      } else if (this.gaugeValue <= 0) {
        this.gaugeValue = 0;
        increment = 20;
      }
    }, 100);
  }

  stopGauge() {
    clearInterval(this.gaugeInterval);
    this.playVideo(); // La vidéo est lancée seulement lorsque stopGauge est appelée.

    // Animation de l'image le long de la ligne
    this.animateImageAlongLine();

    // Vérifier la condition de victoire (uniquement basé sur la jauge)
    const hasWon = this.checkWinCondition();

    // Choisir la route de redirection en fonction du résultat du jeu
    const targetRoute = hasWon ? '/win' : '/loose';
    setTimeout(() => {
      this.router.navigate([targetRoute]);
    }, 2000);
  }

  // Méthode pour animer l'image le long de la ligne
  animateImageAlongLine() {
    const startTime = performance.now();
    const duration = 500;

    const moveImage = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Récupère l'angle actuel de la ligne pour chaque étape de l'animation
      const lineRotation = this.getCurrentLineRotation();

      // Calcule la position de l'image au bout de la ligne en fonction de la rotation et de la longueur
      this.imagePosition.x = 100 + this.lineLength * Math.cos(lineRotation) * progress;
      this.imagePosition.y = 100 + this.lineLength * Math.sin(lineRotation) * progress;

      if (progress < 1) {
        requestAnimationFrame(moveImage);
      }
    };

    requestAnimationFrame(moveImage);
  }

  // Méthode pour récupérer l'angle actuel de la ligne
  getCurrentLineRotation(): number {
    const computedStyle = window.getComputedStyle(this.line.nativeElement);
    const matrix = computedStyle.transform;

    if (matrix === 'none') {
      return 0;
    }

    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    const angle = Math.atan2(b, a);

    return angle;
  }

  // Méthode pour vérifier la condition de victoire uniquement basée sur la jauge
  checkWinCondition(): boolean {
    // Vérifier si la jauge est au-dessus de 60%
    return this.gaugeValue >= 60;
  }

  audio!: HTMLAudioElement;


  ngOnInit(): void {
    this.playMusic();
  }

  ngOnDestroy(): void {
    this.stopMusic(); // Arrêter la musique si le composant est détruit
  }
  
  playMusic(): void {
    this.audio = new Audio();
    this.audio.src = 'assets/musics/menu.mp3';
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
