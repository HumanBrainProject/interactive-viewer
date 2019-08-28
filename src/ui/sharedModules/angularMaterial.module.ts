import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatCardModule,
  MatTabsModule,
  MatTooltipModule,
  MatBadgeModule,
  MatDividerModule,
  MatSelectModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatInputModule,
  MatBottomSheetModule,
  MatListModule,
  MatSlideToggleModule,
  
} from '@angular/material';
import { NgModule } from '@angular/core';

/**
 * TODO should probably be in src/util
 */

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    MatBadgeModule,
    MatDividerModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatInputModule,
    MatBottomSheetModule,
    MatListModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatTooltipModule,
    MatBadgeModule,
    MatDividerModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatInputModule,
    MatBottomSheetModule,
    MatListModule,
    MatSlideToggleModule,
  ],
})
export class AngularMaterialModule { }