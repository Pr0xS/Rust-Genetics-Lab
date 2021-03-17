import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { GeneticsService } from 'src/app/genetics.service';
import { Species } from 'src/app/genetis.models';


@Component({
    selector: 'app-viewer-print-childs',
    templateUrl: './viewer-print-childs.component.html',
    styleUrls: ['./viewer-print-childs.component.scss']
})
export class ViewerPrintChildsComponent implements OnInit {
    @ViewChildren("test") testElement!: QueryList<ElementRef>;

    @Input() sample!: Species;
    @Output() finishedLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

    selectedSample!: string
    childToFocus: number;

    constructor(private geneticsService: GeneticsService) {
        this.childToFocus = 0;
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.finishedLoading.emit(true);
    }

    getSpecies(genes: string): Species {
        return this.geneticsService.getSpeciesInfo(genes)
    }
    
    onSelect(sample: string) {
        this.selectedSample = "";
        this.selectedSample = sample;
    }

    setChildToFocus(id: number) {
        this.childToFocus = id;
        this.focus();
    }

    focus() {
        let focusTo = this.testElement.find(element => element.nativeElement.id == this.childToFocus)
        focusTo?.nativeElement.scrollIntoView({ behavior: "smooth", inline: "center", block: "center"})
    }

}
