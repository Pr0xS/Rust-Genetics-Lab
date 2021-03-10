import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';

import { GeneticsService } from 'src/app/genetics.service';
import { Species } from 'src/app/genetis.models';

import { BreedingProcessViewerComponent } from './breeding-process-viewer/breeding-process-viewer.component';

@Component({
    selector: 'app-breeding-details',
    templateUrl: './breeding-details.component.html',
    styleUrls: ['./breeding-details.component.scss']
})
export class BreedingDetailsComponent implements OnInit {
    samplesDB: {[species: string]: Species[]};
    
    selectedSample!: Species;
    
    runningSimulation: boolean;
    availableSpecies: Species[] = [];
    
    filteredSpecies: Species[];
    
    searchString: string = '';
    searchGenesControlForm = new FormControl();
    maxSpeciesToShow: number = 0;

    nGenesOptions: number[] = [1, 2, 3, 4, 5, 6];
    nGSelected?: number;
    nYSelected?: number;
    nHSelected?: number;

    constructor(private geneticsService: GeneticsService, public dialog: MatDialog) {
        this.samplesDB = {}
        this.filteredSpecies = [];
        this.runningSimulation = false;

    }

    ngOnInit(): void {
        this.subscribeToResults();
    }

    subscribeToResults() {
        this.geneticsService.getNewSamples()
            .subscribe(samplesDB => {
                this.samplesDB = samplesDB;

                this.availableSpecies = [];
                Object.keys(this.samplesDB).forEach(sample => {
                    this.availableSpecies.push(this.samplesDB[sample][0]);
                });

                this.filteredSpecies = this.availableSpecies;
                this.maxSpeciesToShow = 5;
                // this.onLoadMore();
            });

        this.geneticsService.runningSimulation_Subject.subscribe(simulation => this.runningSimulation = simulation);
    }

    onSelect(sample: Species) {
        this.selectedSample = sample;
        this.dialog.open(BreedingProcessViewerComponent, {
            data: sample
        });
    }

    onLoadMore(nItems: number = 5) {
        this.maxSpeciesToShow += nItems;
    }

    nGenesAvailables(currentLetter: string) {
        const g = typeof(this.nGSelected) == "undefined" || currentLetter == "G" ? 0 : this.nGSelected;
        const y = typeof(this.nYSelected) == "undefined" || currentLetter == "Y" ? 0 : this.nYSelected;
        const h = typeof(this.nHSelected) == "undefined" || currentLetter == "H" ? 0 : this.nHSelected;

        return 6 - (g + y + h);
    }

    onFiltersChange() {
        this.filteredSpecies = this._mainFilter(this.searchString);
    }

    _mainFilter(searchString: string): Species[] {
        // For filtering the searchString
        const filterValue = searchString.toUpperCase();

        // For filtering the num genes selector
        const g = typeof(this.nGSelected) == "undefined" ? 0 : this.nGSelected;
        const y = typeof(this.nYSelected) == "undefined" ? 0 : this.nYSelected;
        const h = typeof(this.nHSelected) == "undefined" ? 0 : this.nHSelected;
        const datRegex = `(?=(.*G.*){${g}})(?=(.*Y.*){${y}})(?=(.*H.*){${h}})` 

        // Chain of filters
        return this.availableSpecies
            .filter(specie => specie.genes.toUpperCase().startsWith(filterValue))
            .filter(specie => specie.genes.search(datRegex) != -1)
    }

}
