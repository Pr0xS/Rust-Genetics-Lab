// https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript

export const cartesian = (...a: any) => a.reduce((a: any, b: any) => a.flatMap((d: any) => b.map((e: any) => [d, e].flat())));

export function getCustomRegexExpresion(letter: string, position: number): string{
    let regex = ''
    for (let i = 0; i < 6; i++) {
        if (i == position) {
            regex += letter;
        } else {
            regex += ".";
        }
    }

    return regex;
}

export function randomGeneticsGenerator(size: number): string[] {
    const genes: string = "GYHXW";
    let genetics: string[] = [];

    for (let i = 0; i < size; i++) {
        let gene: string = "";
        while (gene.length < 6) {
            gene += genes[Math.floor(Math.random() * genes.length)];
        } 
        genetics.push(gene)
    }

    return genetics;
}

export function getCombinations(values: string[], size: number): string[][] {

    switch (size){
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
    };
    return []
}

function combination2(values: string[]): string[][] {
    let result: string[][] = [];

    for (let i = 0; i < values.length - 1; i++) {
        for (let j = i + 1; j < values.length; j++) {
            let combination: string[] = []
            combination.push(values[i]);
            combination.push(values[j]);
            result.push(combination);
        }
    }

    return result;
}

function combination3(values: string[]): string[][] {
    let result: string[][] = [];

    for (let i = 0; i < values.length - 2; i++) {
        for (let j = i + 1; j < values.length - 1; j++) {
            for (let k = j + 1; k < values.length; k++) {
                let combination: string[] = []
                combination.push(values[i]);
                combination.push(values[j]);
                combination.push(values[k]);
                result.push(combination);
            }
        }
    }

    return result;
}

function combination4(values: string[]): string[][] {
    let result: string[][] = [];

    for (let i = 0; i < values.length - 3; i++) {
        for (let j = i + 1; j < values.length - 2; j++) {
            for (let k = j + 1; k < values.length - 1; k++) {
                for (let l = k + 1; l < values.length; l++) {
                    let combination: string[] = []
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

function combination5(values: string[]): string[][] {
    let result: string[][] = [];

    for (let i = 0; i < values.length - 4; i++) {
        for (let j = i + 1; j < values.length - 3; j++) {
            for (let k = j + 1; k < values.length - 2; k++) {
                for (let l = k + 1; l < values.length - 1; l++) {
                    for (let m = l + 1; m < values.length; m++) {
                        let combination: string[] = []
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

function combination6(values: string[]): string[][] {
    let result: string[][] = [];

    for (let i = 0; i < values.length - 5; i++) {
        for (let j = i + 1; j < values.length - 4; j++) {
            for (let k = j + 1; k < values.length - 3; k++) {
                for (let l = k + 1; l < values.length - 2; l++) {
                    for (let m = l + 1; m < values.length - 1; m++) {
                        for (let n = m + 1; n < values.length; n++) {
                            let combination: string[] = []
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

function combination7(values: string[]): string[][] {
    let result: string[][] = [];

    for (let i = 0; i < values.length - 6; i++) {
        for (let j = i + 1; j < values.length - 5; j++) {
            for (let k = j + 1; k < values.length - 4; k++) {
                for (let l = k + 1; l < values.length - 3; l++) {
                    for (let m = l + 1; m < values.length - 2; m++) {
                        for (let n = m + 1; n < values.length - 1; n++) {
                            for (let o = n + 1; o < values.length; o++) {
                                let combination: string[] = []
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

function combination8(values: string[]): string[][] {
    let result: string[][] = [];

    for (let i = 0; i < values.length - 7; i++) {
        for (let j = i + 1; j < values.length - 6; j++) {
            for (let k = j + 1; k < values.length - 5; k++) {
                for (let l = k + 1; l < values.length - 4; l++) {
                    for (let m = l + 1; m < values.length - 3; m++) {
                        for (let n = m + 1; n < values.length - 2; n++) {
                            for (let o = n + 1; o < values.length - 1; o++) {
                                for (let p = o + 1; p < values.length; p++) {
                                    let combination: string[] = []
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