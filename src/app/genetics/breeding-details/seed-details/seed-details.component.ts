import { Component, OnInit, Input } from '@angular/core';
import { GeneticsService } from 'src/app/genetics.service';
import { Species } from 'src/app/genetis.models';


@Component({
    selector: 'app-seed-details',
    templateUrl: './seed-details.component.html',
    styleUrls: ['./seed-details.component.scss']
})
export class SeedDetailsComponent implements OnInit {
    @Input() sample!: Species;

    parentsData: Species[];
    baseSampleData: Species | undefined;

    constructor(private geneticsService: GeneticsService) {
        this.parentsData = [];
    }

    ngOnInit(): void {
        for (let parent of this.sample.parents) {
            this.parentsData.push(this.geneticsService.getSpeciesInfo(parent));
        }

        if (this.sample.baseSample != "ANY") {
            this.baseSampleData = this.geneticsService.getSpeciesInfo(this.sample.baseSample);
        } else {
            this.baseSampleData = undefined;
        }
    }

}
