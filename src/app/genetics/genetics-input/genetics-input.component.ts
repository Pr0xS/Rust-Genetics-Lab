import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OptionsComponent } from './options/options.component';
import { GeneticsService } from 'src/app/genetics.service';
import { Settings, defaultSettings } from 'src/app/genetis.models';

@Component({
    selector: 'app-genetics-input',
    templateUrl: './genetics-input.component.html',
    styleUrls: ['./genetics-input.component.scss']
})
export class GeneticsInputComponent implements OnInit {
    // samples = ["WGGWGW", "XWYYHX", "HHGXYW", "YGYWHH", "YYHHGG"]
    samples = ["WYYWHW", "WYHHHY", "GGYWYX", "XHHHHG", "WYHXWW", "WHYWYX", "WYXXGY", "HGYXGW", "WGYWGH", "XYYYGY", "XGGXHW", "GHYXYX", "XXHXYW", "XHYWWH", "GXHXYX", "XYHWYW", "XHHWGH", "XHYWYW", "XYHYYW", "XHHWGY", "XGXXYX", "WYHXGH", "GWYXHH", "XGYWXX", "HYYWHH", "XXWYHW", "WGYWHX", "GWHXHH", "WHYXHW", "XYGXGX", "WHGWGG", "XYGXGW", "WYGXHH", "XHYWHW", "WYGXGX", "XYYWYH", "WHWXXW", "WXHGGW", "WYYYGW", "WXGWGW"];
    // samples = ["YYYWYX", "GGHGHY", "HHGGGY"];
    // samples = ["WYYWHW", "WYHHHY", "GGYWYX", "XHHHHG", "GWYXHH", "XGYWXX", "HYYWHH", "XXWYHW", "WGYWHX", "GWHXHH", "WHYXHW", "XYGXGX", "WHGWGG", "XYGXGW", "WYGXHH", "XHYWHW", "WYGXGX", "XYYWYH", "WHWXXW", "WXHGGW", "WYYYGW", "WXGWGW"]

    settings: Settings;

    constructor(private geneticsService: GeneticsService, public dialog: MatDialog) {
        //https://stackoverflow.com/questions/61421873/object-copy-using-spread-operator-actually-shallow-or-deep
        this.settings = JSON.parse(JSON.stringify(defaultSettings));
    }

    samplesToTextArea(data: string[]) {
        return data.join("\n");
    };

    toArray(value: string): void {
        // let test = value.split(/[\r\n]+/)
        let test = value.split(/[\r\n]+| |,|-/)
        test.forEach((genes, idx) => {
            test[idx] = genes.toUpperCase();
        })
        this.samples = test;
    }

    simulation() {
        this.geneticsService.startSimulation(this.samples, this.settings);
    }

    onOpenOptions() {
        const optionsRef = this.dialog.open(OptionsComponent, {data: this.settings});

        optionsRef.afterClosed().subscribe(settings => {
            if (settings != undefined) {
                this.settings = settings;
            }
        });
    }

    ngOnInit(): void {
        // this.simulation()
    }

}
