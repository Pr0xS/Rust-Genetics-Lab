import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-beautifull-genetics',
    templateUrl: './beautifull-genetics.component.html',
    styleUrls: ['./beautifull-genetics.component.scss']
})
export class BeautifullGeneticsComponent implements OnInit {
    @Input() genetics!: string;
    genes: string[];

    constructor() {
        this.genes = [];
    }

    ngOnInit(): void {
        this.genes = this.splitGenes(this.genetics);
    }

    splitGenes(genes: string): string[] {
        return genes.split('');
    }

}
