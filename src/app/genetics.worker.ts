/// <reference lib="webworker" />

import { Species } from 'src/app/genetis.models'
import { cartesian, getCombinations, getCustomRegexExpresion } from 'src/app/helpers'
import { genesCrossBreedingValues, defaultGenesWeight } from 'src/app/genetis.models'
import { Settings } from 'src/app/genetis.models';


addEventListener('message', ({ data }) => {
    let speciesDB: {[species: string]: Species[]};

    const genetics = new Genetics(data.settings);
    genetics.startNewAnalisys(data.samples);
    speciesDB = genetics.getSpeciesDB()

    postMessage({speciesDB: speciesDB});
});

class Genetics {
    settings: Settings;
    samples: Set<string>;
    breeding: Breeding
    speciesDB: {[species: string]: Species[]}
  
    constructor(settings: Settings) {
        this.samples = new Set();
        this.breeding = new Breeding();
        this.speciesDB = {};
        this.settings = settings;

    }
  
    getSpeciesDB(): {[species: string]: Species[]} {
        return this.speciesDB;
    }
  
    startNewAnalisys(samples: string[]) {
        this.resetData();
        this.samples = new Set(samples);
  
        if (this.settings.mode == "auto") {
            this.startAutoAnalisys(this.settings.auto.minGoodSamples, this.settings.auto.minScoreSample);
        } else if (this.settings.mode == "manual") {
            this.startManualAnalisys(this.settings.manual.maxNumCombinations, this.settings.manual.maxNumGenerations);
        }

    }
  
    startAutoAnalisys(numGoodSamples: number, minSampleValue: number) {
        this.startParentsAnalysis();
  
        // Combinations of 4 and 5. Generation 1, 2 and 3
        for (let nGen = 1; nGen <= 4; nGen++) {
            if (nGen > 1) {
                this.getNextGenSamples();
            }
            for (let nCombinations = 2; nCombinations <= 5; nCombinations++) {
                this.startSamplesAnalysis(nCombinations);
                this.reorganizeSpeciesDB();
                
                console.log(`Combiantons: ${nCombinations}, Generation: ${nGen}`)
                postMessage({status: {nCombinations: nCombinations, nGen: nGen}})
                if (this.enoughGoodSamples(numGoodSamples, minSampleValue)) {
                    return
                }
            }
        }

        // // Combiantions of 6 and 7. Generations 1, 2
        // for (let nGen = 1; nGen <= 2; nGen++) {
        //     if (nGen > 1) {
        //         this.getNextGenSamples();
        //     }
        //     for (let nCombinations = 6; nCombinations <= 7; nCombinations++) {
        //         console.log(`Combiantons: ${nCombinations}, Generation: ${nGen}`)
        //         this.startSamplesAnalysis(nCombinations);
        //         this.reorganizeSpeciesDB();
  
        //         if (this.enoughGoodSamples(numGoodSamples, minSampleValue)) {
        //             return
        //         }
        //     }
        // }
    }

    startManualAnalisys(maxCombinations: number, maxGeneration: number) {
        this.startParentsAnalysis();
  
        for (let nGen = 1; nGen <= maxGeneration; nGen++) {
            if (nGen > 1) {
                this.getNextGenSamples();
            }
            for (let nCombinations = 2; nCombinations <= maxCombinations; nCombinations++) {
                this.startSamplesAnalysis(nCombinations);
            }
        }
        this.reorganizeSpeciesDB();
    }
  
    resetData() {
        this.samples = new Set();
        this.speciesDB = {};
    }
  
    startParentsAnalysis() {
        this.samples.forEach(sample => {
            let newSample = new Species([], sample, 100, 0, this.settings.genesWeight, "ANY");
            this.speciesDB[newSample.genes] = [newSample]
        })
    }
  
    startSamplesAnalysis(nCombinations: number) {
        let combinationGroups: string[][] = getCombinations(Array.from(this.samples), nCombinations);

        if (nCombinations > 3) {
            combinationGroups.forEach(combination => {
                let newSpecies: string[]
                newSpecies = this.breeding.breedingSimulation(combination);

                if(newSpecies.length) {
                    const probability = 100/newSpecies.length;
                    newSpecies.forEach(species => {
                        if (!this.samples.has(species)) {
                            let newSpecie = new Species(combination, species, probability, this.getSampleGeneration(combination, "ANY"), this.settings.genesWeight, "ANY");
                            if (newSpecie.genes in this.speciesDB) {
                                this.speciesDB[newSpecie.genes].push(newSpecie);
                            } else {
                                this.speciesDB[newSpecie.genes] = [newSpecie];
                            }
                        }
                    });
                }
            });    
        } else {
            combinationGroups.forEach(combination => {
                Array.from(this.samples).forEach(sample => {
                    let result = this.breeding.breedingSimulationWithBaseSample(combination, sample)
                    if (!this.samples.has(result.newGens) && result.newGens != "") {
                        let newSpecie = new Species(combination, result.newGens, 100, this.getSampleGeneration(combination, result.base), this.settings.genesWeight, result.base);
                        if (newSpecie.genes in this.speciesDB) {
                            this.speciesDB[newSpecie.genes].push(newSpecie);
                        } else {
                            this.speciesDB[newSpecie.genes] = [newSpecie];
                        }  
                    }
                })
            });
        }
  
    }
  
    getNextGenSamples(topBestSamplesToAdd: number = 10) {
        // const nSamplesToAdd = topBestSamplesToAdd
        // let newSamples = Object.keys(this.speciesDB)
        
        // let samplesAdded = 0;
        // newSamples.some(sample => {
        //     if (samplesAdded >= nSamplesToAdd) {
        //         return true;
        //     }
  
        //     if (!this.samples.has(sample)) {
        //         this.samples.add(sample);
        //         samplesAdded++;
        //     }
  
        //     return false;
        // });


        let gArray: number[] = new Array(6).fill(0);
        let yArray: number[] = new Array(6).fill(0);

        this.samples.forEach(sample => {
            for (let i = 0; i < 6; i++) {
                if (sample[i] == "G") {
                    gArray[i]++
                } else if(sample[i] == "Y") {
                    yArray[i]++;
                }
            }
        })

        console.log(`gArray: ${gArray}  yArray: ${yArray}`)

        console.log(this.samples)

        let maxTries = 15;
        let gAdded = 0;
        while (gAdded <= 5 && maxTries) {
            let min = gArray.indexOf(Math.min(...gArray));
            // console.log(min)
            if ( min < 2) {
                // console.log("min detected")
                // if there are 0 or just 1 g Its not possible to obtain new samples
                gArray[min] += 9999;
            } else {
                const filter = getCustomRegexExpresion("G", min);
                if (this._addNewNextGenSample(filter)) {
                    gArray[min]++;
                    gAdded++;
                } else {
                    // If it wasn't possible to add a new sample, stop trying for this one
                    gArray[min] += 9999;
                }
            }

            // console.log("gArray")
            // console.log(gArray)

            maxTries--;
            // console.log(`added: ${added} maxTries: ${maxTries}`)
        }

        maxTries = 15;
        let yAdded = 0;
        while (yAdded <= 5 && maxTries) {
            let min = yArray.indexOf(Math.min(...yArray));
            // console.log(min)
            if ( min < 2) {
                // console.log("min detected")
                // if there are 0 or just 1 g Its not possible to obtain new samples
                yArray[min] += 9999;
            } else {
                const filter = getCustomRegexExpresion("Y", min);
                if (this._addNewNextGenSample(filter)) {
                    yArray[min]++;
                    yAdded++;
                } else {
                    // If it wasn't possible to add a new sample, stop trying for this one
                    yArray[min] += 9999;
                }
            }

            // console.log("yArray")
            // console.log(yArray)

            maxTries--;

            // console.log(`added: ${added} maxTries: ${maxTries}`)
        }

        console.log(`gArray: ${gArray}  yArray: ${yArray}`)
        console.log(`samples added: ${gAdded + yAdded}`)
    }

    _addNewNextGenSample(regex: string) {
        const allSamples = Object.keys(this.speciesDB);
        let added = false

        allSamples.some(sample => {
            if (sample.search(regex) != -1) {
                if(!this.samples.has(sample)) {
                    this.samples.add(sample);
                    added = true
                    return true;
                }
            }

            return false
        });

        return added;
    }
  
    reorganizeSpeciesDB() {
        for (let species in this.speciesDB) {
            this.speciesDB[species] = this.sortSpecies(this.speciesDB[species]).slice(0,10)
        }
  
        // Sorting the object keys https://stackoverflow.com/questions/9658690/is-there-a-way-to-sort-order-keys-in-javascript-objects
        this.speciesDB = Object.keys(this.speciesDB).sort((a, b) => {
            let specieA = this.speciesDB[a][0];
            let specieB = this.speciesDB[b][0];
            return this.customSort(specieA, specieB)
  
        }).reduce((obj, key) => ({
            ...obj, [key]: this.speciesDB[key]
        }), {})
    }
  
    enoughGoodSamples(minNumberOfGoodSamples: number ,minScore: number): boolean {
        let samples = Object.keys(this.speciesDB);
        if (samples.length <= minNumberOfGoodSamples) {
            return false;
        }
        console.log(`${minNumberOfGoodSamples}th sample score: ${this.speciesDB[samples[minNumberOfGoodSamples]][0].value}`);
        return this.speciesDB[samples[minNumberOfGoodSamples]][0].value >= minScore;
    }
  
    sortSpecies(species: Species[]): Species[] {
        if (species.length < 2) {
            return species;
        }
  
        species.sort(this.customSort.bind(this));
  
        return species;
    }
  
    customSort(a: Species,b: Species): number {
        return b.value - a.value || b.probability - a.probability || a.generation - b.generation || this.compareParentsGensAndProbs(a, b) || a.parents.length - b.parents.length
        // return b.value - a.value || b.probability - a.probability || a.generation - b.generation || a.parents.length - b.parents.length || this.compareParentsGensAndProbs(a, b) 
    }
  
    compareParentsGensAndProbs(a: Species, b: Species): number {
        let aParentGenValue: number = 0;
        let aParentProbValue: number = 0;
        let bParentGenValue: number = 0;
        let bParentProbValue: number = 0;
  
        // A parents
        for (let parent of a.parents) {
            aParentGenValue += this.speciesDB[parent][0].generation;
            aParentProbValue += this.speciesDB[parent][0].probability;
        }

        // A baseSample if exist
        if (a.baseSample != "ANY") {
            aParentGenValue += this.speciesDB[a.baseSample][0].generation;
            aParentProbValue += this.speciesDB[a.baseSample][0].probability;
        }
  
        // B parents
        for (let parent of b.parents) {
            bParentGenValue += this.speciesDB[parent][0].generation;
            bParentProbValue += this.speciesDB[parent][0].probability;
        }

        // B baseSample if exist
        if (b.baseSample != "ANY") {
            bParentGenValue += this.speciesDB[b.baseSample][0].generation;
            bParentProbValue += this.speciesDB[b.baseSample][0].probability;
        }
  
        aParentProbValue /= a.parents.length;
        bParentProbValue /= b.parents.length;
  
        return bParentProbValue - aParentProbValue || aParentGenValue - bParentGenValue;
    }

    getSampleGeneration(parents: string[], baseSample: string): number {
        let maxGen = baseSample != "ANY" ? this.speciesDB[baseSample][0].generation : 0;
        for (let parent of parents) {
            if (this.speciesDB[parent][0].generation > maxGen) {
                maxGen = this.speciesDB[parent][0].generation;
            }
        }
        return maxGen + 1;
    }
    
};
  
  class Breeding {
    maxBadGenes: number;
  
    constructor(maxBadGenes: number = 1) {
        this.maxBadGenes = maxBadGenes;
    }
  
    breedingSimulation(samples: string[]): string[] {
        let newSeeds: string[] = [];
        let childGenes: Array<Record<string, number>> = [
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
        ];
  
        for (let sample of samples) {
            for (let i = 0; i < 6; i++) {
                childGenes[i][sample[i]] += genesCrossBreedingValues[sample[i]];
            }
        }
        
        let badGenes = 0;
        let posibleGenetics: string[][] = [];
        childGenes.some((gene) => {
            if (badGenes > this.maxBadGenes) {
                // "break" out of the some function
                return true;   
            }
            let priorityGenes: string[] = [];
            let maxValue: number = 0;
  
            for (let g in gene) {
                if (gene[g] > maxValue) {
                    maxValue = gene[g];
                    priorityGenes = [];
                    priorityGenes.push(g);
                } else if (gene[g] == maxValue) {
                    priorityGenes.push(g);
                }
            }
  
            if (priorityGenes.includes("X") || priorityGenes.includes("W")) {
                badGenes++
            }
            posibleGenetics.push(priorityGenes);
            return false;
        });
  
        if(badGenes <= this.maxBadGenes) {
            const aux: string[][] = cartesian(...posibleGenetics);
            aux.forEach(genes => newSeeds.push(genes.join("")));
        }
        return newSeeds;
    }

    breedingSimulationWithBaseSample(samples: string[], baseSample: string): {base: string, newGens: string} {
        let newSeed: string = '';
        let posibleChildGenes: Array<Record<string, number>> = [
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
            {"G": 0, "Y": 0, "H": 0, "X": 0, "W": 0},
        ];
    
        for (let sample of samples) {
            for (let i = 0; i < 6; i++) {
                posibleChildGenes[i][sample[i]] += genesCrossBreedingValues[sample[i]];
            }
        }
    
        let badGenes = 0;
        let baseSampleRequired = false;
        posibleChildGenes.some((gene, idx) => {
            if (badGenes > this.maxBadGenes) {
                // "break" out of the some function
                return true;   
            }
    
            let maxValue: number = genesCrossBreedingValues[baseSample[idx]];
            let newGene: string = '';
            for (let g in gene) {
                if (gene[g] > maxValue) {
                    maxValue = gene[g];
                    newGene = g;
                }
            }
    
            if (!newGene.length) {
                baseSampleRequired = true;
                newGene = baseSample[idx];
            }
    
            if (newGene == "X" || newGene =="W"){
                badGenes++;
            }
    
            newSeed += newGene;
            return false;
        });
    
        if (badGenes > this.maxBadGenes) {
            newSeed = '';
        }
        return { base: baseSampleRequired ? baseSample : "ANY", newGens: newSeed }
    }
};