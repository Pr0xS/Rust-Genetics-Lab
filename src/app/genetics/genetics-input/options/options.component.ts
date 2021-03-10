import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GeneticsInputComponent } from '../genetics-input.component';

import { defaultSettings, Settings } from 'src/app/genetis.models'

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
    settings: Settings;
    
    maxNumCombinationsOptions = [2, 3, 4, 5, 6, 7, 8];
    maxNumGenerationsOptions = [1, 2, 3, 4, 5]

    sliderMinValue: number = -0.5;
    sliderMaxValue: number = 1;
    sliderStepValue: number = 0.1;

    constructor(public dialogRef: MatDialogRef<GeneticsInputComponent>, @Inject(MAT_DIALOG_DATA) public newSettings: Settings) {
        this.settings = JSON.parse(JSON.stringify(this.newSettings));
    }

    ngOnInit(): void {
    }

    onReset() {
        this.settings = JSON.parse(JSON.stringify(defaultSettings));
    }

    onCancel() {
        this.dialogRef.close();
    }
}