/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "gH1F");
/******/ })
/************************************************************************/
/******/ ({

/***/ "Afm0":
/*!****************************!*\
  !*** ./src/app/helpers.ts ***!
  \****************************/
/*! exports provided: cartesian, getCustomRegexExpresion, randomGeneticsGenerator, getCombinations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesian", function() { return cartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomRegexExpresion", function() { return getCustomRegexExpresion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomGeneticsGenerator", function() { return randomGeneticsGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCombinations", function() { return getCombinations; });
// https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
const cartesian = (...a) => a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
function getCustomRegexExpresion(letter, position) {
    let regex = '';
    for (let i = 0; i < 6; i++) {
        if (i == position) {
            regex += letter;
        }
        else {
            regex += ".";
        }
    }
    return regex;
}
function randomGeneticsGenerator(size) {
    const genes = "GYHXW";
    let genetics = [];
    for (let i = 0; i < size; i++) {
        let gene = "";
        while (gene.length < 6) {
            gene += genes[Math.floor(Math.random() * genes.length)];
        }
        genetics.push(gene);
    }
    return genetics;
}
function getCombinations(values, size) {
    switch (size) {
        case 2: {
            return combination2(values);
        }
        case 3: {
            return combination3(values);
        }
        case 4: {
            return combination4(values);
        }
        case 5: {
            return combination5(values);
        }
        case 6: {
            return combination6(values);
        }
        case 7: {
            return combination7(values);
        }
        case 8: {
            return combination8(values);
        }
    }
    ;
    return [];
}
function combination2(values) {
    let result = [];
    for (let i = 0; i < values.length - 1; i++) {
        for (let j = i + 1; j < values.length; j++) {
            let combination = [];
            combination.push(values[i]);
            combination.push(values[j]);
            result.push(combination);
        }
    }
    return result;
}
function combination3(values) {
    let result = [];
    for (let i = 0; i < values.length - 2; i++) {
        for (let j = i + 1; j < values.length - 1; j++) {
            for (let k = j + 1; k < values.length; k++) {
                let combination = [];
                combination.push(values[i]);
                combination.push(values[j]);
                combination.push(values[k]);
                result.push(combination);
            }
        }
    }
    return result;
}
function combination4(values) {
    let result = [];
    for (let i = 0; i < values.length - 3; i++) {
        for (let j = i + 1; j < values.length - 2; j++) {
            for (let k = j + 1; k < values.length - 1; k++) {
                for (let l = k + 1; l < values.length; l++) {
                    let combination = [];
                    combination.push(values[i]);
                    combination.push(values[j]);
                    combination.push(values[k]);
                    combination.push(values[l]);
                    result.push(combination);
                }
            }
        }
    }
    return result;
}
function combination5(values) {
    let result = [];
    for (let i = 0; i < values.length - 4; i++) {
        for (let j = i + 1; j < values.length - 3; j++) {
            for (let k = j + 1; k < values.length - 2; k++) {
                for (let l = k + 1; l < values.length - 1; l++) {
                    for (let m = l + 1; m < values.length; m++) {
                        let combination = [];
                        combination.push(values[i]);
                        combination.push(values[j]);
                        combination.push(values[k]);
                        combination.push(values[l]);
                        combination.push(values[m]);
                        result.push(combination);
                    }
                }
            }
        }
    }
    return result;
}
function combination6(values) {
    let result = [];
    for (let i = 0; i < values.length - 5; i++) {
        for (let j = i + 1; j < values.length - 4; j++) {
            for (let k = j + 1; k < values.length - 3; k++) {
                for (let l = k + 1; l < values.length - 2; l++) {
                    for (let m = l + 1; m < values.length - 1; m++) {
                        for (let n = m + 1; n < values.length; n++) {
                            let combination = [];
                            combination.push(values[i]);
                            combination.push(values[j]);
                            combination.push(values[k]);
                            combination.push(values[l]);
                            combination.push(values[m]);
                            combination.push(values[n]);
                            result.push(combination);
                        }
                    }
                }
            }
        }
    }
    return result;
}
function combination7(values) {
    let result = [];
    for (let i = 0; i < values.length - 6; i++) {
        for (let j = i + 1; j < values.length - 5; j++) {
            for (let k = j + 1; k < values.length - 4; k++) {
                for (let l = k + 1; l < values.length - 3; l++) {
                    for (let m = l + 1; m < values.length - 2; m++) {
                        for (let n = m + 1; n < values.length - 1; n++) {
                            for (let o = n + 1; o < values.length; o++) {
                                let combination = [];
                                combination.push(values[i]);
                                combination.push(values[j]);
                                combination.push(values[k]);
                                combination.push(values[l]);
                                combination.push(values[m]);
                                combination.push(values[n]);
                                combination.push(values[o]);
                                result.push(combination);
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
}
function combination8(values) {
    let result = [];
    for (let i = 0; i < values.length - 7; i++) {
        for (let j = i + 1; j < values.length - 6; j++) {
            for (let k = j + 1; k < values.length - 5; k++) {
                for (let l = k + 1; l < values.length - 4; l++) {
                    for (let m = l + 1; m < values.length - 3; m++) {
                        for (let n = m + 1; n < values.length - 2; n++) {
                            for (let o = n + 1; o < values.length - 1; o++) {
                                for (let p = o + 1; p < values.length; p++) {
                                    let combination = [];
                                    combination.push(values[i]);
                                    combination.push(values[j]);
                                    combination.push(values[k]);
                                    combination.push(values[l]);
                                    combination.push(values[m]);
                                    combination.push(values[n]);
                                    combination.push(values[o]);
                                    combination.push(values[p]);
                                    result.push(combination);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
}


/***/ }),

/***/ "F6Oa":
/*!***********************************!*\
  !*** ./src/app/genetis.models.ts ***!
  \***********************************/
/*! exports provided: defaultGenesWeight, genesCrossBreedingValues, Species, defaultSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGenesWeight", function() { return defaultGenesWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genesCrossBreedingValues", function() { return genesCrossBreedingValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Species", function() { return Species; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
const defaultGenesWeight = {
    "G": 1,
    "Y": 1,
    "H": 0.5,
    "W": -0.1,
    "X": -0.1
};
const genesCrossBreedingValues = {
    "G": 0.6,
    "Y": 0.6,
    "H": 0.6,
    "W": 1,
    "X": 1
};
class Species {
    constructor(parents, genes, probability, generation, genesWeight, baseSample) {
        this.genesWeight = genesWeight;
        this.parents = parents;
        this.genes = genes;
        this.probability = Math.round(probability * 1e2) / 1e2;
        this.value = this.speciesAnalyze(genes);
        this.generation = generation;
        this.baseSample = baseSample;
    }
    speciesAnalyze(genes) {
        let value = 0;
        [...genes].forEach(gene => {
            value += this.genesWeight[gene];
        });
        return Math.round(value * 1e2) / 1e2;
    }
}
;
const defaultSettings = {
    mode: "auto",
    auto: {
        minScoreSample: 6,
        minGoodSamples: 4
    },
    manual: {
        maxNumCombinations: 8,
        maxNumGenerations: 1
    },
    genesWeight: { ...defaultGenesWeight }
};


/***/ }),

/***/ "gH1F":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ref--7-0!./node_modules/@ngtools/webpack/src/ivy!./src/app/genetics.worker.ts ***!
  \***************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_app_genetis_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/genetis.models */ "F6Oa");
/* harmony import */ var src_app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers */ "Afm0");
/// <reference lib="webworker" />



addEventListener('message', ({ data }) => {
    let speciesDB;
    const genetics = new Genetics(data.settings);
    genetics.startNewAnalisys(data.samples);
    speciesDB = genetics.getSpeciesDB();
    postMessage({ speciesDB: speciesDB });
});
class Genetics {
    constructor(settings) {
        this.samples = new Set();
        this.breeding = new Breeding();
        this.speciesDB = {};
        this.settings = settings;
    }
    getSpeciesDB() {
        return this.speciesDB;
    }
    startNewAnalisys(samples) {
        this.resetData();
        this.samples = new Set(samples);
        if (this.settings.mode == "auto") {
            this.startAutoAnalisys(this.settings.auto.minGoodSamples, this.settings.auto.minScoreSample);
        }
        else if (this.settings.mode == "manual") {
            this.startManualAnalisys(this.settings.manual.maxNumCombinations, this.settings.manual.maxNumGenerations);
        }
    }
    startAutoAnalisys(numGoodSamples, minSampleValue) {
        this.startParentsAnalysis();
        // Combinations of 4 and 5. Generation 1, 2 and 3
        for (let nGen = 1; nGen <= 4; nGen++) {
            if (nGen > 1) {
                this.getNextGenSamples();
            }
            for (let nCombinations = 2; nCombinations <= 5; nCombinations++) {
                this.startSamplesAnalysis(nCombinations);
                this.reorganizeSpeciesDB();
                postMessage({ status: { nCombinations: nCombinations, nGen: nGen } });
                if (this.enoughGoodSamples(numGoodSamples, minSampleValue)) {
                    return;
                }
            }
        }
    }
    startManualAnalisys(maxCombinations, maxGeneration) {
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
            let newSample = new src_app_genetis_models__WEBPACK_IMPORTED_MODULE_0__["Species"]([], sample, 100, 0, this.settings.genesWeight, "ANY");
            this.speciesDB[newSample.genes] = [newSample];
        });
    }
    startSamplesAnalysis(nCombinations) {
        let combinationGroups = Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_1__["getCombinations"])(Array.from(this.samples), nCombinations);
        if (nCombinations > 3) {
            combinationGroups.forEach(combination => {
                let newSpecies;
                newSpecies = this.breeding.breedingSimulation(combination);
                if (newSpecies.length) {
                    const probability = 100 / newSpecies.length;
                    newSpecies.forEach(species => {
                        if (!this.samples.has(species)) {
                            let newSpecie = new src_app_genetis_models__WEBPACK_IMPORTED_MODULE_0__["Species"](combination, species, probability, this.getSampleGeneration(combination, "ANY"), this.settings.genesWeight, "ANY");
                            if (newSpecie.genes in this.speciesDB) {
                                this.speciesDB[newSpecie.genes].push(newSpecie);
                            }
                            else {
                                this.speciesDB[newSpecie.genes] = [newSpecie];
                            }
                        }
                    });
                }
            });
        }
        else {
            combinationGroups.forEach(combination => {
                Array.from(this.samples).forEach(sample => {
                    let result = this.breeding.breedingSimulationWithBaseSample(combination, sample);
                    if (!this.samples.has(result.newGens) && result.newGens != "") {
                        let newSpecie = new src_app_genetis_models__WEBPACK_IMPORTED_MODULE_0__["Species"](combination, result.newGens, 100, this.getSampleGeneration(combination, result.base), this.settings.genesWeight, result.base);
                        if (newSpecie.genes in this.speciesDB) {
                            this.speciesDB[newSpecie.genes].push(newSpecie);
                        }
                        else {
                            this.speciesDB[newSpecie.genes] = [newSpecie];
                        }
                    }
                });
            });
        }
    }
    getNextGenSamples(topBestSamplesToAdd = 10) {
        let gArray = new Array(6).fill(0);
        let yArray = new Array(6).fill(0);
        this.samples.forEach(sample => {
            for (let i = 0; i < 6; i++) {
                if (sample[i] == "G") {
                    gArray[i]++;
                }
                else if (sample[i] == "Y") {
                    yArray[i]++;
                }
            }
        });
        let maxTries = 15;
        let gAdded = 0;
        while (gAdded <= 5 && maxTries) {
            let min = gArray.indexOf(Math.min(...gArray));
            if (min < 2) {
                // if there are 0 or just 1 g Its not possible to obtain new samples
                gArray[min] += 9999;
            }
            else {
                const filter = Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_1__["getCustomRegexExpresion"])("G", min);
                if (this._addNewNextGenSample(filter)) {
                    gArray[min]++;
                    gAdded++;
                }
                else {
                    // If it wasn't possible to add a new sample, stop trying for this one
                    gArray[min] += 9999;
                }
            }
            maxTries--;
        }
        maxTries = 15;
        let yAdded = 0;
        while (yAdded <= 5 && maxTries) {
            let min = yArray.indexOf(Math.min(...yArray));
            if (min < 2) {
                // if there are 0 or just 1 g Its not possible to obtain new samples
                yArray[min] += 9999;
            }
            else {
                const filter = Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_1__["getCustomRegexExpresion"])("Y", min);
                if (this._addNewNextGenSample(filter)) {
                    yArray[min]++;
                    yAdded++;
                }
                else {
                    // If it wasn't possible to add a new sample, stop trying for this one
                    yArray[min] += 9999;
                }
            }
            maxTries--;
        }
    }
    _addNewNextGenSample(regex) {
        const allSamples = Object.keys(this.speciesDB);
        let added = false;
        allSamples.some(sample => {
            if (sample.search(regex) != -1) {
                if (!this.samples.has(sample)) {
                    this.samples.add(sample);
                    added = true;
                    return true;
                }
            }
            return false;
        });
        return added;
    }
    reorganizeSpeciesDB() {
        for (let species in this.speciesDB) {
            this.speciesDB[species] = this.sortSpecies(this.speciesDB[species]).slice(0, 10);
        }
        // Sorting the object keys https://stackoverflow.com/questions/9658690/is-there-a-way-to-sort-order-keys-in-javascript-objects
        this.speciesDB = Object.keys(this.speciesDB).sort((a, b) => {
            let specieA = this.speciesDB[a][0];
            let specieB = this.speciesDB[b][0];
            return this.customSort(specieA, specieB);
        }).reduce((obj, key) => ({
            ...obj, [key]: this.speciesDB[key]
        }), {});
    }
    enoughGoodSamples(minNumberOfGoodSamples, minScore) {
        let samples = Object.keys(this.speciesDB);
        if (samples.length <= minNumberOfGoodSamples) {
            return false;
        }
        return this.speciesDB[samples[minNumberOfGoodSamples]][0].value >= minScore;
    }
    sortSpecies(species) {
        if (species.length < 2) {
            return species;
        }
        species.sort(this.customSort.bind(this));
        return species;
    }
    customSort(a, b) {
        return b.value - a.value || b.probability - a.probability || a.generation - b.generation || this.compareParentsGensAndProbs(a, b) || a.parents.length - b.parents.length;
        // return b.value - a.value || b.probability - a.probability || a.generation - b.generation || a.parents.length - b.parents.length || this.compareParentsGensAndProbs(a, b) 
    }
    compareParentsGensAndProbs(a, b) {
        let aParentGenValue = 0;
        let aParentProbValue = 0;
        let bParentGenValue = 0;
        let bParentProbValue = 0;
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
    getSampleGeneration(parents, baseSample) {
        let maxGen = baseSample != "ANY" ? this.speciesDB[baseSample][0].generation : 0;
        for (let parent of parents) {
            if (this.speciesDB[parent][0].generation > maxGen) {
                maxGen = this.speciesDB[parent][0].generation;
            }
        }
        return maxGen + 1;
    }
}
;
class Breeding {
    constructor(maxBadGenes = 1) {
        this.maxBadGenes = maxBadGenes;
    }
    breedingSimulation(samples) {
        let newSeeds = [];
        let childGenes = [
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
        ];
        for (let sample of samples) {
            for (let i = 0; i < 6; i++) {
                childGenes[i][sample[i]] += src_app_genetis_models__WEBPACK_IMPORTED_MODULE_0__["genesCrossBreedingValues"][sample[i]];
            }
        }
        let badGenes = 0;
        let posibleGenetics = [];
        childGenes.some((gene) => {
            if (badGenes > this.maxBadGenes) {
                // "break" out of the some function
                return true;
            }
            let priorityGenes = [];
            let maxValue = 0;
            for (let g in gene) {
                if (gene[g] > maxValue) {
                    maxValue = gene[g];
                    priorityGenes = [];
                    priorityGenes.push(g);
                }
                else if (gene[g] == maxValue) {
                    priorityGenes.push(g);
                }
            }
            if (priorityGenes.includes("X") || priorityGenes.includes("W")) {
                badGenes++;
            }
            posibleGenetics.push(priorityGenes);
            return false;
        });
        if (badGenes <= this.maxBadGenes) {
            const aux = Object(src_app_helpers__WEBPACK_IMPORTED_MODULE_1__["cartesian"])(...posibleGenetics);
            aux.forEach(genes => newSeeds.push(genes.join("")));
        }
        return newSeeds;
    }
    breedingSimulationWithBaseSample(samples, baseSample) {
        let newSeed = '';
        let posibleChildGenes = [
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
            { "G": 0, "Y": 0, "H": 0, "X": 0, "W": 0 },
        ];
        for (let sample of samples) {
            for (let i = 0; i < 6; i++) {
                posibleChildGenes[i][sample[i]] += src_app_genetis_models__WEBPACK_IMPORTED_MODULE_0__["genesCrossBreedingValues"][sample[i]];
            }
        }
        let badGenes = 0;
        let baseSampleRequired = false;
        posibleChildGenes.some((gene, idx) => {
            if (badGenes > this.maxBadGenes) {
                // "break" out of the some function
                return true;
            }
            let maxValue = src_app_genetis_models__WEBPACK_IMPORTED_MODULE_0__["genesCrossBreedingValues"][baseSample[idx]];
            let newGene = '';
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
            if (newGene == "X" || newGene == "W") {
                badGenes++;
            }
            newSeed += newGene;
            return false;
        });
        if (badGenes > this.maxBadGenes) {
            newSeed = '';
        }
        return { base: baseSampleRequired ? baseSample : "ANY", newGens: newSeed };
    }
}
;


/***/ })

/******/ });
//# sourceMappingURL=0.worker.js.map