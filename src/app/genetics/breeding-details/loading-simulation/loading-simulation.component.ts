import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StatusComponent } from './status/status.component';

@Component({
    selector: 'app-loading-simulation',
    templateUrl: './loading-simulation.component.html',
    styleUrls: ['./loading-simulation.component.scss']
})
export class LoadingSimulationComponent implements OnInit, OnDestroy{
    
    constructor(private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.openSnackBar()
    }

    ngOnDestroy() {
        this._snackBar.dismiss()
    }

    openSnackBar() {
        this._snackBar.openFromComponent(StatusComponent, {
            horizontalPosition: "end",
            verticalPosition: "bottom"
        });
    }

}
