import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WiscIvComponent } from './wisc-iv/wisc-iv.component';
import { BotonesComponent } from './botones/botones.component';
const routes: Routes = [
  { path: 'prueba-wisc', component: WiscIvComponent },
  { path: '', component: BotonesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
