import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';
import { CountService } from './count.service';

const routes: Routes = [
  { path: 'two', component: TwoComponent },
  { path: 'one', component: OneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
