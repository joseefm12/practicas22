import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

{  path:'',
  component: HomeComponent
},
{
  path:'profile',
  component:ProfileComponent
},
{
  path: '**',
  component:NotfoundpageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
