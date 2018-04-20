import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { EmpresaComponent } from './institucional/empresa/empresa';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'institucional/empresa', component: EmpresaComponent },
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }