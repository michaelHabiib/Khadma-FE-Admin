import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {BidiModule} from '@angular/cdk/bidi';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [],
  imports: [
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    CommonModule,
    MatSelectModule,
    MatTabsModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatInputModule,
    BidiModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatDatepickerModule
    
  ],
  exports: [
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatInputModule,
    BidiModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatDatepickerModule
  ],
})
export class MaterialModule {}
