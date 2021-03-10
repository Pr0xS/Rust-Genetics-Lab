import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { GeneticsService } from 'src/app/genetics.service';
import { Species } from 'src/app/genetis.models';


import {MAT_DIALOG_DATA} from '@angular/material/dialog'


@Component({
    selector: 'app-breeding-process-viewer',
    templateUrl: './breeding-process-viewer.component.html',
    styleUrls: ['./breeding-process-viewer.component.scss']
})
export class BreedingProcessViewerComponent implements OnInit {
    @ViewChild("mainSample") mainSample!: ElementRef;


    constructor(private geneticsService: GeneticsService,
                @Inject(MAT_DIALOG_DATA) public sample: Species) { }

    ngOnInit(): void {
    }

    getSpecies(genes: string): Species {
        return this.geneticsService.getSpeciesInfo(genes)
    }

    focusMainSample() {
        this.mainSample.nativeElement.scrollIntoView({ behavior: "smooth", inline: "center", block: "center"})
        console.log("doing something")
    }
}
