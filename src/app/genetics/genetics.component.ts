import { Component, OnInit } from '@angular/core';
import { GeneticsService } from '../genetics.service';

@Component({
    selector: 'app-genetics',
    templateUrl: './genetics.component.html',
    styleUrls: ['./genetics.component.scss']
})
export class GeneticsComponent implements OnInit {
    runningSimulation: boolean;

    constructor(private geneticsService: GeneticsService) {
        this.runningSimulation = false;
    }

    ngOnInit(): void {
        this.geneticsService.runningSimulation_Subject.subscribe(runningSimulation => {
            this.runningSimulation = runningSimulation;
        });
    }
}
