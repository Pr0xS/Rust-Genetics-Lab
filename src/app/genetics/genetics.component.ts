import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { GeneticsService } from '../genetics.service';

@Component({
    selector: 'app-genetics',
    templateUrl: './genetics.component.html',
    styleUrls: ['./genetics.component.scss']
})
export class GeneticsComponent implements OnInit, OnDestroy {
    runningSimulation: boolean;
    runningSimulationSubscription!: Subscription

    constructor(private geneticsService: GeneticsService) {
        this.runningSimulation = false;
    }

    ngOnInit(): void {
        this.runningSimulationSubscription = this.geneticsService.runningSimulation_Subject.subscribe(runningSimulation => {
            this.runningSimulation = runningSimulation;
        });
    }

    ngOnDestroy(): void {
        this.runningSimulationSubscription.unsubscribe()
    }
}
