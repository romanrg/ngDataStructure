import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StackComponent} from './stack/stack.component';
import {DequeComponent} from './deque/deque.component';
import {QeueComponent} from './qeue/qeue.component';


const routes: Routes = [
  {path: 'stack', component: StackComponent},
  {path: 'qeue', component: QeueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
