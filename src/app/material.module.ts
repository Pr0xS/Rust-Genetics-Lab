import { NgModule } from '@angular/core'

import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatSliderModule,
        MatTooltipModule,
        ClipboardModule
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatSliderModule,
        MatTooltipModule,
        ClipboardModule
    ]
})
export class MaterialModule {}