import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { GeneticsComponent } from './genetics/genetics.component';

const routes: Routes = [
    { path: '', component: GeneticsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'donate', component: DonateComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
