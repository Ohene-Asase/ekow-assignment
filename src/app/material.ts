import {
// tslint:disable-next-line: max-line-length
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatExpansionModule, MatSlideToggleModule, MatCardModule, MatGridListModule, MatListModule, MatDividerModule,
    MatFormFieldModule, MatInputModule
    } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatExpansionModule,
      MatSlideToggleModule,
      MatCardModule,
      MatGridListModule,
      MatListModule,
      MatDividerModule,
      MatFormFieldModule,
      MatInputModule
    ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatExpansionModule,
      MatSlideToggleModule,
      MatCardModule,
      MatGridListModule,
      MatListModule,
      MatDividerModule,
      MatFormFieldModule,
      MatInputModule
    ],
})
export class MaterialModule { }