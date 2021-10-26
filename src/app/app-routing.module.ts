import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CienciaComponent } from './paginas/ciencia/ciencia.component';
import { FilosoficoComponent } from './paginas/filosofico/filosofico.component';
import { LecturaComponent } from './paginas/lectura/lectura.component';
import { PrestamoComponent } from './paginas/prestamo/prestamo.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ServicioComponent } from './paginas/servicio/servicio.component';
import { TecnologicoComponent } from './paginas/tecnologico/tecnologico.component';

const routes: Routes = [
  {path:'principal',component:PrincipalComponent},

  {path:'ciencia',component:CienciaComponent},

  {path:'filosofico',component:FilosoficoComponent},

  {path:'tecnologico',component:TecnologicoComponent},

  {path:'servicio',component:ServicioComponent},

  {path:'registro',component:RegistroComponent},

  {path:'prestamo',component:PrestamoComponent},

  {path:'lectura',component:LecturaComponent},
  
  {path:'',redirectTo:'/principal',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

