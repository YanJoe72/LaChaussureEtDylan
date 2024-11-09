import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeuComponent } from './jeu/jeu.component';
import { MenuComponent } from './menu/menu.component';
import { LooseComponent } from './loose/loose.component';
import { WinComponent } from './win/win.component';


const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'jeu', component: JeuComponent },
  { path: 'loose', component: LooseComponent },
  { path: 'win', component: WinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
