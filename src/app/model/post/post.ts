import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Post {
  userid: string;
  id: string;
  title: string;
  body: string;
}
