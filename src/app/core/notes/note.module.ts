import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoteComponent } from './note.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NoteComponent],
  exports: [NoteComponent],
})
export class NoteModule {}