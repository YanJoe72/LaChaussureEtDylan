import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LigneOscillanteComponent } from './ligne-oscillante/ligne-oscillante.component';
import { JaugeComponent } from './jauge/jauge.component';
import { MenuComponent } from './menu/menu.component';
import { JeuComponent } from './jeu/jeu.component';
import { LooseComponent } from './loose/loose.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    LigneOscillanteComponent,
    JaugeComponent,
    MenuComponent,
    JeuComponent,
    LooseComponent,
    WinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
