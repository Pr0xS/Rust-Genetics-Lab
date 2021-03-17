import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { GeneticsService } from 'src/app/genetics.service';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit, OnDestroy {
    statusSubscription!: Subscription
    nCombinations: number = 0;
    nGen: number = 0;

    dots: string = "";

    constructor(private geneticsService: GeneticsService) { }

    ngOnInit(): void {
        this.statusSubscription = this.geneticsService.statusSimulation_Subject.subscribe(status => {
            this.nCombinations = status.nCombinations;
            this.nGen = status.nGen;
        });
        this.dotsAnimation()
    }

    ngOnDestroy(): void {
        this.statusSubscription.unsubscribe()
    }

    dotsAnimation(): void {
        window.setInterval(() => {
            if (this.dots.length >= 3) {
                this.dots = ""
            } else {
                this.dots += "."
            }
        }, 500)
    }

}
