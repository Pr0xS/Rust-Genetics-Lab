import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

import { defaultSettings, Settings, Species } from "./genetis.models"


@Injectable({
  providedIn: 'root'
})
export class GeneticsService {
    settings: Settings;

    runningSimulation_Subject = new BehaviorSubject<boolean>(false);
    statusSimulation_Subject = new BehaviorSubject<{nCombinations: number, nGen: number}>({nCombinations: 0, nGen: 0});

    speciesDB: {[species: string]: Species[]}
    speciesDB_Subject = new BehaviorSubject<{[species: string]: Species[]}>({})

    constructor() {
        this.speciesDB = {};
        // Deep object copy
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
            if (data.hasOwnProperty("speciesDB")) {
                this.speciesDB = data.speciesDB;
                this.updateChanges();
                this.runningSimulation_Subject.next(false);
            } else if (data.hasOwnProperty("status")) {
                this.updateStatusMessage(data.status)
            }
        };
        geneticsWorker.postMessage({settings: settings, samples: samples});
    }

    updateChanges() {
        this.speciesDB_Subject.next(this.speciesDB);
    }

    updateStatusMessage(message: {nCombinations: number, nGen: number}) {
        this.statusSimulation_Subject.next({nCombinations: message.nCombinations, nGen: message.nGen})
    }

    getNewSamples(): Observable<{[species: string]: Species[]}> {
        return this.speciesDB_Subject.asObservable();
    }
}