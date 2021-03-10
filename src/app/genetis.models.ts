export const defaultGenesWeight: Record<string, number> = {
    "G": 1,
    "Y": 1,
    "H": 0.5,
    "W": -0.1,
    "X": -0.1
}

export const genesCrossBreedingValues: Record<string, number> = {
    "G": 0.6,
    "Y": 0.6,
    "H": 0.6,
    "W": 1,
    "X": 1
}

export class Species {
    genesWeight: Record<string, number>
    
    parents: string[];
    genes: string;
    probability: number;
    value: number;
    generation: number;
    baseSample: string;

    constructor(parents: string[], genes: string, probability: number, generation: number, genesWeight:Record<string, number>, baseSample: string) {
        this.genesWeight = genesWeight

        this.parents = parents;
        this.genes = genes;
        this.probability = Math.round(probability * 1e2) / 1e2;
        this.value = this.speciesAnalyze(genes);
        this.generation = generation;
        this.baseSample = baseSample

    }

    speciesAnalyze(genes: string): number {
        let value = 0;
        [...genes].forEach(gene => {
            value += this.genesWeight[gene];
        });
        return Math.round(value * 1e2) / 1e2
    }
};

export interface Settings {
    mode: "auto" | "manual";
    auto: {
        minScoreSample: number;
        minGoodSamples: number;
    };
    manual: {
        maxNumCombinations: number;
        maxNumGenerations: number;
    }

    genesWeight: Record<string, number>
}

export const defaultSettings: Settings = {
        mode: "auto",
        auto: {
            minScoreSample: 6,
            minGoodSamples: 4
        },
        manual: {
            maxNumCombinations: 8,
            maxNumGenerations: 1
        },
        genesWeight: {...defaultGenesWeight}
}