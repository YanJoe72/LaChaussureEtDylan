import { Component } from '@angular/core';

@Component({
  selector: 'app-ligne-oscillante',
  templateUrl: './ligne-oscillante.component.html',
  styleUrls: ['./ligne-oscillante.component.css']
})
export class LigneOscillanteComponent {
  isPaused = false;

  toggleAnimation() {
    this.isPaused = !this.isPaused;
  }

}
