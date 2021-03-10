import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

import { defaultSettings, Settings, Species } from "./genetis.models"


@Injectable({
  providedIn: 'root'
})
export class GeneticsService {
    settings: Settings;

    runningSimulation_Subject = new BehaviorSubject<boolean>(false);

    speciesDB: {[species: string]: Species[]}
    speciesDB_Subject = new BehaviorSubject<{[species: string]: Species[]}>({})

    constructor() {
        this.speciesDB = {};
        this.settings = JSON.parse(JSON.stringify(defaultSettings))
    }

    getSpeciesInfo(genes: string) {
        return this.speciesDB[genes][0];
    }

    startSimulation(samples: string[], settings: Settings) {
        const geneticsWorker = new Worker('./genetics.worker', { type: 'module' });

        this.runningSimulation_Subject.next(true);
        this.speciesDB_Subject.next({});

        geneticsWorker.onmessage = ({ data }) => {
            this.speciesDB = data;
            this.updateChanges();
            this.runningSimulation_Subject.next(false);
        };
        geneticsWorker.postMessage({settings: settings, samples: samples});
    }

    updateChanges() {
        this.speciesDB_Subject.next(this.speciesDB);
        console.log(this.speciesDB);
    }

    getNewSamples(): Observable<{[species: string]: Species[]}> {
        return this.speciesDB_Subject.asObservable();
    }
}