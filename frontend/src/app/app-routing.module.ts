import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './component/lista/lista.component';
import { TransferenciaComponent } from './component/transferencia/transferencia.component';
import { ModificarComponent } from './component/modificar/modificar.component';


const routes: Routes = [
  {path: '', redirectTo:'lista', pathMatch:'full'},
  {path: 'lista', component: ListaComponent},
  {path: 'transferencia', component: TransferenciaComponent},
  {path: 'edit/:id', component: ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
