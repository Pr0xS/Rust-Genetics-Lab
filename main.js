(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/qIH":
/*!********************************************************************************************************!*\
  !*** ./src/app/genetics/breeding-details/breeding-process-viewer/breeding-process-viewer.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BreedingProcessViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreedingProcessViewerComponent", function() { return BreedingProcessViewerComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_genetics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/genetics.service */ "Nctn");
/* harmony import */ var src_app_genetis_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/genetis.models */ "F6Oa");
/* harmony import */ var _seed_details_seed_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../seed-details/seed-details.component */ "bt81");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _viewer_print_childs_viewer_print_childs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewer-print-childs/viewer-print-childs.component */ "Jj+a");








const _c0 = ["mainSample"];
function BreedingProcessViewerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 6);
} }
function BreedingProcessViewerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-viewer-print-childs", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sample", ctx_r2.sample);
} }
class BreedingProcessViewerComponent {
    constructor(geneticsService, sample) {
        this.geneticsService = geneticsService;
        this.sample = sample;
    }
    ngOnInit() {
    }
    getSpecies(genes) {
        return this.geneticsService.getSpeciesInfo(genes);
    }
    focusMainSample() {
        this.mainSample.nativeElement.scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
        console.log("doing something");
    }
}
BreedingProcessViewerComponent.ɵfac = function BreedingProcessViewerComponent_Factory(t) { return new (t || BreedingProcessViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_genetics_service__WEBPACK_IMPORTED_MODULE_2__["GeneticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
BreedingProcessViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreedingProcessViewerComponent, selectors: [["app-breeding-process-viewer"]], viewQuery: function BreedingProcessViewerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mainSample = _t.first);
    } }, decls: 7, vars: 3, consts: [[1, "mainSample", 3, "click"], ["mainSample", ""], [1, "sample"], [3, "sample"], ["class", "arrow", 4, "ngIf"], ["class", "childSamples", 4, "ngIf"], [1, "arrow"], [1, "childSamples"]], template: function BreedingProcessViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BreedingProcessViewerComponent_Template_div_click_1_listener() { return ctx.focusMainSample(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-seed-details", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BreedingProcessViewerComponent_div_5_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BreedingProcessViewerComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sample", ctx.sample);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sample.parents.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sample.parents.length);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _seed_details_seed_details_component__WEBPACK_IMPORTED_MODULE_4__["SeedDetailsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _viewer_print_childs_viewer_print_childs_component__WEBPACK_IMPORTED_MODULE_6__["ViewerPrintChildsComponent"]], styles: [".mainSample[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  margin-bottom: 15px;\n}\n\n.sample[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.mainSample[_ngcontent-%COMP%]     .seed mat-card {\n  box-shadow: 0px 0px 5pt 3pt goldenrod;\n  margin-bottom: 5px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  max-height: 90vh;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  overflow: auto;\n  opacity: 100%;\n  width: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  opacity: 0%;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #424242;\n  border-radius: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #686868;\n}\n\n@keyframes arrowAnimation {\n  0% {\n    transform: translate(0) rotate(45deg);\n    border-color: olive;\n  }\n  25% {\n    transform: translate(0, 0.3em) rotate(45deg);\n    border-color: #a5352b;\n  }\n  50% {\n    transform: translate(0) rotate(45deg);\n    border-color: olive;\n  }\n  100% {\n    transform: translate(0) rotate(45deg);\n    border-color: olive;\n  }\n}\n\n.arrow[_ngcontent-%COMP%] {\n  border: solid olive;\n  border-width: 0 5px 5px 0;\n  display: inline-block;\n  padding: 5px;\n  margin-bottom: 0.1em;\n  margin-left: 147px;\n  transform: rotate(45deg);\n  animation-name: arrowAnimation;\n  animation-duration: 4s;\n  animation-delay: 0.5s;\n  animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2JyZWVkaW5nLXByb2Nlc3Mtdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBLFVBQUE7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQSxVQUFBOztBQUNBO0VBQ0ksV0FBQTtBQUNKOztBQUlBLFdBQUE7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUEsb0JBQUE7O0FBQ0E7RUFDSSxtQkFBQTtBQURKOztBQUtBO0VBQ0k7SUFBSSxxQ0FBQTtJQUF1QyxtQkFBQTtFQUE3QztFQUNFO0lBQUssNENBQUE7SUFBOEMscUJBQUE7RUFHckQ7RUFGRTtJQUFLLHFDQUFBO0lBQXVDLG1CQUFBO0VBTTlDO0VBTEU7SUFBTSxxQ0FBQTtJQUF1QyxtQkFBQTtFQVMvQztBQUNGOztBQVBBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUdBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0FBT0oiLCJmaWxlIjoiYnJlZWRpbmctcHJvY2Vzcy12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblNhbXBsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc2FtcGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5tYWluU2FtcGxlIDo6bmctZGVlcCAuc2VlZCBtYXQtY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHQgM3B0IGdvbGRlbnJvZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG59XG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvcGFjaXR5OiAxMDAlO1xuICAgIHdpZHRoOiAxMHB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgb3BhY2l0eTogMCU7XG4gICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5OyBcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICM0MjQyNDI7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNjg2ODY4OyBcbn1cblxuXG5Aa2V5ZnJhbWVzIGFycm93QW5pbWF0aW9uIHtcbiAgICAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgcm90YXRlKDQ1ZGVnKTsgYm9yZGVyLWNvbG9yOiBvbGl2ZTt9XG4gICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwLjNlbSkgcm90YXRlKDQ1ZGVnKTsgYm9yZGVyLWNvbG9yOiAjYTUzNTJiO31cbiAgICA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKDApIHJvdGF0ZSg0NWRlZyk7IGJvcmRlci1jb2xvcjogb2xpdmU7fVxuICAgIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKDApIHJvdGF0ZSg0NWRlZyk7IGJvcmRlci1jb2xvcjogb2xpdmU7fVxufVxuXG4uYXJyb3cge1xuICAgIGJvcmRlcjogc29saWQgb2xpdmU7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC4xZW07XG4gICAgbWFyZ2luLWxlZnQ6IDE0N3B4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAvLyB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFycm93QW5pbWF0aW9uO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pr0xs/Programming/Projects/Rust-Genetics/rust-genetics/src/main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 52, vars: 0, consts: [[1, "main"], [1, "about"], ["href", "https://www.reddit.com/user/Diffrnt", "target", "_blank"], ["href", "https://www.youtube.com/channel/UCbUhGPYHIaL6R8XCXzN9lRA", "target", "_blank"], ["href", "https://angular.io/", "target", "_blank"], ["href", "https://material.angular.io/", "target", "_blank"], ["href", ""], ["href", "https://github.com/Pr0xS", "target", "_blank"], ["routerLink", "/donate"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hello there!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "I'm Pr0xS and I have made this app mainly because I'm too lazy to do the crossbreeding manually.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I've been using other Apps that do the same thing, but those only take into account the first generation, and I wanted something that find the optimal solution with the current available samples even if that mean to have multiple generations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "And that is the reason this app exists.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I've been doing this app while learning how to do it, so there are a lot of room for improvement and also I expect it to have some bugs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "This app was inspired by the one made by the user ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "u/Diffrnt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " and the guide on how crossbreeding works on Rust by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tamura77");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The technologies that I have been used are:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " (Front-End framework)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " (for themeing)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Github (for hosting the code)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Github Pages (for hosting the app)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "If you have any suggetion you can contact me on:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Discord: Pr0xS#5813");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Reddit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "u/Pr0xS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Github: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Pr0xS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "If you want to contribuite to the project, you can do it throught improving the code on github or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "donating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".main[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\n.about[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\na[_ngcontent-%COMP%]:link {\n  color: #cd412b;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:visited {\n  color: #cd412b;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUVKIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmFib3V0IHsgICBcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG5hOmxpbmsge1xuICAgIGNvbG9yOiAjY2Q0MTJiO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogI2NkNDEyYjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C+48":
/*!**********************************************************************************************!*\
  !*** ./src/app/genetics/breeding-details/loading-simulation/loading-simulation.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LoadingSimulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSimulationComponent", function() { return LoadingSimulationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingSimulationComponent {
    constructor() { }
    ngOnInit() { }
}
LoadingSimulationComponent.ɵfac = function LoadingSimulationComponent_Factory(t) { return new (t || LoadingSimulationComponent)(); };
LoadingSimulationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSimulationComponent, selectors: [["app-loading-simulation"]], decls: 2, vars: 0, consts: [[1, "loading"], ["src", "./assets/images/crossbreeding.gif", "alt", "Crossbreeding in process"]], template: function LoadingSimulationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loading[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvYWRpbmctc2ltdWxhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJsb2FkaW5nLXNpbXVsYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XG4gICAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"] });


/***/ }),

/***/ "CdOr":
/*!*************************************************************************************************************!*\
  !*** ./src/app/genetics/breeding-details/seed-details/beautifull-genetics/beautifull-genetics.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BeautifullGeneticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeautifullGeneticsComponent", function() { return BeautifullGeneticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function BeautifullGeneticsComponent_span_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BeautifullGeneticsComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BeautifullGeneticsComponent_span_0_div_3_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gen_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("good", gen_r1 == "G" || gen_r1 == "Y" || gen_r1 == "H")("bad", gen_r1 == "W" || gen_r1 == "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gen_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 != ctx_r0.genetics.split("").length - 1);
} }
class BeautifullGeneticsComponent {
    constructor() {
        this.genes = [];
    }
    ngOnInit() {
        this.genes = this.splitGenes(this.genetics);
    }
    splitGenes(genes) {
        return genes.split('');
    }
}
BeautifullGeneticsComponent.ɵfac = function BeautifullGeneticsComponent_Factory(t) { return new (t || BeautifullGeneticsComponent)(); };
BeautifullGeneticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BeautifullGeneticsComponent, selectors: [["app-beautifull-genetics"]], inputs: { genetics: "genetics" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "circle"], ["class", "separator", 4, "ngIf"], [1, "separator"]], template: function BeautifullGeneticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BeautifullGeneticsComponent_span_0_Template, 4, 6, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genetics.split(""));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".separator[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 2px;\n  opacity: 50%;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.circle[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  line-height: 26px;\n  border-radius: 50%;\n  display: inline-block;\n  text-align: center center;\n}\n\n.good[_ngcontent-%COMP%] {\n  background-color: olivedrab;\n}\n\n.bad[_ngcontent-%COMP%] {\n  background-color: #a5352b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2JlYXV0aWZ1bGwtZ2VuZXRpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUlBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSwyQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSiIsImZpbGUiOiJiZWF1dGlmdWxsLWdlbmV0aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcGFyYXRvciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICBvcGFjaXR5OiA1MCU7XG5cbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5jaXJjbGUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5nb29kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvbGl2ZWRyYWI7XG59XG5cbi5iYWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNTM1MmI7XG59Il19 */"] });


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

/***/ "Jj+a":
/*!************************************************************************************************************************!*\
  !*** ./src/app/genetics/breeding-details/breeding-process-viewer/viewer-print-childs/viewer-print-childs.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ViewerPrintChildsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerPrintChildsComponent", function() { return ViewerPrintChildsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_genetics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/genetics.service */ "Nctn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _seed_details_seed_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../seed-details/seed-details.component */ "bt81");





const _c0 = ["test"];
function ViewerPrintChildsComponent_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
function ViewerPrintChildsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Base Sample");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewerPrintChildsComponent_div_3_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r6.onSelect(ctx_r6.sample.baseSample); return ctx_r6.setChildToFocus(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-seed-details", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewerPrintChildsComponent_div_3_div_7_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.sample.baseSample === ctx_r0.selectedSample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sample", ctx_r0.getSpecies(ctx_r0.sample.baseSample));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sample.baseSample === ctx_r0.selectedSample && ctx_r0.getSpecies(ctx_r0.sample.baseSample).parents.length);
} }
function ViewerPrintChildsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} }
function ViewerPrintChildsComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
function ViewerPrintChildsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewerPrintChildsComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const parent_r8 = ctx.$implicit; const i_r9 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r12.onSelect(parent_r8); return ctx_r12.setChildToFocus(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-seed-details", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewerPrintChildsComponent_div_9_div_3_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parent_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", parent_r8 === ctx_r2.selectedSample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sample", ctx_r2.getSpecies(parent_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", parent_r8 === ctx_r2.selectedSample && ctx_r2.getSpecies(ctx_r2.selectedSample).parents.length);
} }
function ViewerPrintChildsComponent_app_viewer_print_childs_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-viewer-print-childs", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finishedLoading", function ViewerPrintChildsComponent_app_viewer_print_childs_12_Template_app_viewer_print_childs_finishedLoading_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sample", ctx_r3.getSpecies(ctx_r3.selectedSample));
} }
class ViewerPrintChildsComponent {
    constructor(geneticsService) {
        this.geneticsService = geneticsService;
        this.finishedLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.childToFocus = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.finishedLoading.emit(true);
    }
    getSpecies(genes) {
        return this.geneticsService.getSpeciesInfo(genes);
    }
    onSelect(sample) {
        this.selectedSample = "";
        this.selectedSample = sample;
        console.log(sample);
    }
    setChildToFocus(id) {
        this.childToFocus = id;
        console.log("setChildToFocus");
        this.focus();
    }
    focus() {
        console.log("focus");
        let focusTo = this.testElement.find(element => element.nativeElement.id == this.childToFocus);
        console.log(focusTo);
        focusTo === null || focusTo === void 0 ? void 0 : focusTo.nativeElement.scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
    }
}
ViewerPrintChildsComponent.ɵfac = function ViewerPrintChildsComponent_Factory(t) { return new (t || ViewerPrintChildsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_genetics_service__WEBPACK_IMPORTED_MODULE_1__["GeneticsService"])); };
ViewerPrintChildsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewerPrintChildsComponent, selectors: [["app-viewer-print-childs"]], viewQuery: function ViewerPrintChildsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.testElement = _t);
    } }, inputs: { sample: "sample" }, outputs: { finishedLoading: "finishedLoading" }, decls: 13, vars: 4, consts: [[1, "hDivider"], [1, "parentsList"], [1, "leftMargin"], ["class", "baseSample", 4, "ngIf"], ["class", "vDivider", 4, "ngIf"], [1, "parentsSamples"], [1, "sectionTitle"], [1, "sectionContent"], ["class", "item", 3, "selected", "id", "click", 4, "ngFor", "ngForOf"], [1, "rightMargin"], [3, "sample", "finishedLoading", 4, "ngIf"], [1, "baseSample"], ["id", "-1", 1, "item", 3, "click"], ["test", ""], [3, "sample"], ["class", "arrow", 4, "ngIf"], [1, "arrow"], [1, "vDivider"], [1, "item", 3, "id", "click"], [3, "sample", "finishedLoading"]], template: function ViewerPrintChildsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewerPrintChildsComponent_div_3_Template, 8, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewerPrintChildsComponent_div_4_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Parents Samples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewerPrintChildsComponent_div_9_Template, 4, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewerPrintChildsComponent_app_viewer_print_childs_12_Template, 1, 1, "app-viewer-print-childs", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sample.baseSample != "ANY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sample.baseSample != "ANY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sample.parents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedSample && ctx.getSpecies(ctx.selectedSample).parents.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _seed_details_seed_details_component__WEBPACK_IMPORTED_MODULE_3__["SeedDetailsComponent"], ViewerPrintChildsComponent], styles: [".parentsList[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  white-space: nowrap;\n  padding-right: 5px;\n  display: flex;\n}\n\n.leftMargin[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.rightMargin[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n\n.sectionTitle[_ngcontent-%COMP%] {\n  opacity: 60%;\n  margin-left: 100px;\n}\n\n.sectionContent[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\n.hDivider[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  opacity: 15%;\n}\n\n.vDivider[_ngcontent-%COMP%] {\n  opacity: 10%;\n  border-left: 2px solid white;\n  margin: 20px 10px 5px 0px;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.item.selected[_ngcontent-%COMP%]     .seed mat-card {\n  box-shadow: 0px 0px 3pt 2pt olive;\n  left: 0.3em;\n  bottom: 0.3em;\n}\n\n@keyframes arrowAnimation {\n  0% {\n    transform: translate(0) rotate(45deg);\n    border-color: olive;\n  }\n  25% {\n    transform: translate(0, 0.3em) rotate(45deg);\n    border-color: #a5352b;\n  }\n  50% {\n    transform: translate(0) rotate(45deg);\n    border-color: olive;\n  }\n  100% {\n    transform: translate(0) rotate(45deg);\n    border-color: olive;\n  }\n}\n\n.arrow[_ngcontent-%COMP%] {\n  border: solid olive;\n  border-width: 0 5px 5px 0;\n  display: inline-block;\n  padding: 5px;\n  margin-bottom: 0.1em;\n  margin-left: 147px;\n  transform: rotate(45deg);\n  animation-name: arrowAnimation;\n  animation-duration: 4s;\n  animation-delay: 0.5s;\n  animation-iteration-count: infinite;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  overflow: auto;\n  opacity: 100%;\n  height: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  opacity: 0%;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #424242;\n  border-radius: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #686868;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3ZpZXdlci1wcmludC1jaGlsZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0FBQUo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQURKOztBQU1BO0VBQ0ksb0JBQUE7QUFISjs7QUFNQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFPQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFTQTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFOSjs7QUFTQTtFQUNJO0lBQUkscUNBQUE7SUFBdUMsbUJBQUE7RUFKN0M7RUFLRTtJQUFLLDRDQUFBO0lBQThDLHFCQUFBO0VBRHJEO0VBRUU7SUFBSyxxQ0FBQTtJQUF1QyxtQkFBQTtFQUU5QztFQURFO0lBQU0scUNBQUE7SUFBdUMsbUJBQUE7RUFLL0M7QUFDRjs7QUFIQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtBQUdKOztBQUNBLFVBQUE7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQSxVQUFBOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUdBLFdBQUE7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0Esb0JBQUE7O0FBQ0E7RUFDSSxtQkFBQTtBQUFKIiwiZmlsZSI6InZpZXdlci1wcmludC1jaGlsZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50c0xpc3Qge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGVmdE1hcmdpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5yaWdodE1hcmdpbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc2VjdGlvblRpdGxlIHtcbiAgICBvcGFjaXR5OiA2MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIC8vIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNlY3Rpb25Db250ZW50IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmhEaXZpZGVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG9wYWNpdHk6IDE1JTtcbn1cblxuLnZEaXZpZGVyIHtcbiAgICBvcGFjaXR5OiAxMCU7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBtYXJnaW46IDIwcHggMTBweCA1cHggMHB4O1xufVxuXG5cbi5pdGVtIHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIC8vIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIC8vIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4uaXRlbS5zZWxlY3RlZCA6Om5nLWRlZXAgLnNlZWQgbWF0LWNhcmR7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHQgMnB0IG9saXZlO1xuICAgIGxlZnQ6IC4zZW07XG4gICAgYm90dG9tOiAuM2VtO1xufVxuXG5Aa2V5ZnJhbWVzIGFycm93QW5pbWF0aW9uIHtcbiAgICAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgcm90YXRlKDQ1ZGVnKTsgYm9yZGVyLWNvbG9yOiBvbGl2ZTt9XG4gICAgMjUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwLjNlbSkgcm90YXRlKDQ1ZGVnKTsgYm9yZGVyLWNvbG9yOiAjYTUzNTJiO31cbiAgICA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKDApIHJvdGF0ZSg0NWRlZyk7IGJvcmRlci1jb2xvcjogb2xpdmU7fVxuICAgIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKDApIHJvdGF0ZSg0NWRlZyk7IGJvcmRlci1jb2xvcjogb2xpdmU7fVxufVxuXG4uYXJyb3cge1xuICAgIGJvcmRlcjogc29saWQgb2xpdmU7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC4xZW07XG4gICAgbWFyZ2luLWxlZnQ6IDE0N3B4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAvLyB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFycm93QW5pbWF0aW9uO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvcGFjaXR5OiAxMDAlO1xuICAgIGhlaWdodDogMTBweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIG9wYWNpdHk6IDAlO1xuICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTsgXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDI0MjQyOyBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzY4Njg2ODsgXG59Il19 */"] });


/***/ }),

/***/ "LjdP":
/*!********************************************!*\
  !*** ./src/app/donate/donate.component.ts ***!
  \********************************************/
/*! exports provided: DonateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateComponent", function() { return DonateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class DonateComponent {
    constructor() {
        this.bitcoinAddress = "1L2LzBsMZxqPXj95xJspFJf29vKy6u1YVb";
    }
    ngOnInit() {
    }
}
DonateComponent.ɵfac = function DonateComponent_Factory(t) { return new (t || DonateComponent)(); };
DonateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonateComponent, selectors: [["app-donate"]], decls: 29, vars: 2, consts: [[1, "donateContainer"], [1, "donate"], [1, "paypal"], ["action", "https://www.paypal.com/donate", "method", "post", "target", "_blank"], ["form", ""], ["type", "hidden", "name", "business", "value", "C29ENRASFSEDC"], ["type", "hidden", "name", "item_name", "value", "For keep improving the app, and if needed get a better hosting"], ["type", "hidden", "name", "currency_code", "value", "EUR"], ["type", "image", "src", "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif", "name", "submit", "title", "PayPal - The safer, easier way to pay online!", "alt", "Donate with PayPal button", 3, "click"], ["alt", "", "src", "https://www.paypal.com/en_US/i/scr/pixel.gif", "width", "1", "height", "1"], [1, "bitcoin"], ["src", "./assets/images/bitcoin.png", "alt", "bitcoin logo", "height", "50px"], [1, "address"], ["mat-icon-button", "", "color", "warn", "aria-label", "Copy Bitcoin Address to clipboard", "matTooltip", "Copy Bitcoin Address to clipboard", 3, "cdkCopyToClipboard"]], template: function DonateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Donating is always optional and only if you found the App interesing and useful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All donationgs will help me improving the app in the future");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "You can do it using Paypal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonateComponent_Template_input_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r0.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "And since cyptocurrencies are popular you can also support the app with them!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "content_paste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bitcoinAddress, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", ctx.bitcoinAddress);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["CdkCopyToClipboard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".donateContainer[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n}\n\n.donate[_ngcontent-%COMP%] {\n  display: grid;\n  max-width: 800px;\n}\n\n.paypal[_ngcontent-%COMP%] {\n  align-self: center;\n  justify-self: center;\n}\n\n.bitcoin[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.address[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  padding-right: 30px;\n  font-size: 25px;\n  color: goldenrod;\n}\n\na[_ngcontent-%COMP%]:link {\n  color: #cd412b;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:visited {\n  color: #cd412b;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RvbmF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFFSiIsImZpbGUiOiJkb25hdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9uYXRlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5kb25hdGUgeyAgIFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLnBheXBhbCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYml0Y29pbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkcmVzcyB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XG59XG5cbmE6bGluayB7XG4gICAgY29sb3I6ICNjZDQxMmI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOnZpc2l0ZWQge1xuICAgIGNvbG9yOiAjY2Q0MTJiO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"] });


/***/ }),

/***/ "Nctn":
/*!*************************************!*\
  !*** ./src/app/genetics.service.ts ***!
  \*************************************/
/*! exports provided: GeneticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneticsService", function() { return GeneticsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _genetis_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genetis.models */ "F6Oa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class GeneticsService {
    constructor() {
        this.runningSimulation_Subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.speciesDB_Subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.speciesDB = {};
        this.settings = JSON.parse(JSON.stringify(_genetis_models__WEBPACK_IMPORTED_MODULE_1__["defaultSettings"]));
    }
    getSpeciesInfo(genes) {
        return this.speciesDB[genes][0];
    }
    startSimulation(samples, settings) {
        const geneticsWorker = new Worker(__webpack__worker__0, undefined);
        this.runningSimulation_Subject.next(true);
        this.speciesDB_Subject.next({});
        geneticsWorker.onmessage = ({ data }) => {
            this.speciesDB = data;
            this.updateChanges();
            this.runningSimulation_Subject.next(false);
        };
        geneticsWorker.postMessage({ settings: settings, samples: samples });
    }
    updateChanges() {
        this.speciesDB_Subject.next(this.speciesDB);
        console.log(this.speciesDB);
    }
    getNewSamples() {
        return this.speciesDB_Subject.asObservable();
    }
}
GeneticsService.ɵfac = function GeneticsService_Factory(t) { return new (t || GeneticsService)(); };
GeneticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GeneticsService, factory: GeneticsService.ɵfac, providedIn: 'root' });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=0!./genetics.worker */ "UqRk")))

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'rust-genetics';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "appContainer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".appContainer[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBDb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOjY0cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"] });


/***/ }),

/***/ "UqRk":
/*!***************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./src/app/genetics.worker.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0.worker.js"

/***/ }),

/***/ "WZpc":
/*!************************************************!*\
  !*** ./src/app/genetics/genetics.component.ts ***!
  \************************************************/
/*! exports provided: GeneticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneticsComponent", function() { return GeneticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _genetics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../genetics.service */ "Nctn");
/* harmony import */ var _genetics_input_genetics_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genetics-input/genetics-input.component */ "e9Pf");
/* harmony import */ var _breeding_details_breeding_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breeding-details/breeding-details.component */ "wSTH");




class GeneticsComponent {
    constructor(geneticsService) {
        this.geneticsService = geneticsService;
        this.runningSimulation = false;
    }
    ngOnInit() {
        this.runningSimulationSubscription = this.geneticsService.runningSimulation_Subject.subscribe(runningSimulation => {
            this.runningSimulation = runningSimulation;
        });
    }
    ngOnDestroy() {
        this.runningSimulationSubscription.unsubscribe();
    }
}
GeneticsComponent.ɵfac = function GeneticsComponent_Factory(t) { return new (t || GeneticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_genetics_service__WEBPACK_IMPORTED_MODULE_1__["GeneticsService"])); };
GeneticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneticsComponent, selectors: [["app-genetics"]], decls: 3, vars: 0, consts: [[1, "geneticsAppContainer"]], template: function GeneticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-genetics-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-breeding-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_genetics_input_genetics_input_component__WEBPACK_IMPORTED_MODULE_2__["GeneticsInputComponent"], _breeding_details_breeding_details_component__WEBPACK_IMPORTED_MODULE_3__["BreedingDetailsComponent"]], styles: [".geneticsAppContainer[_ngcontent-%COMP%] {\n  height: calc(100% - 40px);\n  margin: 20px 30px;\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dlbmV0aWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBUEoiLCJmaWxlIjoiZ2VuZXRpY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubWFpbkNvbnRhaW5lciB7XG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbi8vICAgICBtYXJnaW46IDIwcHggMzBweDtcbi8vICAgICBkaXNwbGF5OiBncmlkO1xuLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sIDMwMHB4KSAxZnI7XG4vLyB9XG5cbi5nZW5ldGljc0FwcENvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICBtYXJnaW46IDIwcHggMzBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _genetics_genetics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genetics/genetics.component */ "WZpc");
/* harmony import */ var _genetics_genetics_input_genetics_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genetics/genetics-input/genetics-input.component */ "e9Pf");
/* harmony import */ var _genetics_breeding_details_seed_details_beautifull_genetics_beautifull_genetics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./genetics/breeding-details/seed-details/beautifull-genetics/beautifull-genetics.component */ "CdOr");
/* harmony import */ var _genetics_breeding_details_breeding_process_viewer_breeding_process_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./genetics/breeding-details/breeding-process-viewer/breeding-process-viewer.component */ "/qIH");
/* harmony import */ var _genetics_breeding_details_breeding_process_viewer_viewer_print_childs_viewer_print_childs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./genetics/breeding-details/breeding-process-viewer/viewer-print-childs/viewer-print-childs.component */ "Jj+a");
/* harmony import */ var _genetics_genetics_input_options_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./genetics/genetics-input/options/options.component */ "vLah");
/* harmony import */ var _genetics_breeding_details_loading_simulation_loading_simulation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./genetics/breeding-details/loading-simulation/loading-simulation.component */ "C+48");
/* harmony import */ var _genetics_breeding_details_breeding_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./genetics/breeding-details/breeding-details.component */ "wSTH");
/* harmony import */ var _genetics_breeding_details_seed_details_seed_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./genetics/breeding-details/seed-details/seed-details.component */ "bt81");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./donate/donate.component */ "LjdP");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _genetics_genetics_component__WEBPACK_IMPORTED_MODULE_5__["GeneticsComponent"],
        _genetics_genetics_input_genetics_input_component__WEBPACK_IMPORTED_MODULE_6__["GeneticsInputComponent"],
        _genetics_breeding_details_breeding_details_component__WEBPACK_IMPORTED_MODULE_12__["BreedingDetailsComponent"],
        _genetics_breeding_details_seed_details_seed_details_component__WEBPACK_IMPORTED_MODULE_13__["SeedDetailsComponent"],
        _genetics_breeding_details_seed_details_beautifull_genetics_beautifull_genetics_component__WEBPACK_IMPORTED_MODULE_7__["BeautifullGeneticsComponent"],
        _genetics_breeding_details_breeding_process_viewer_breeding_process_viewer_component__WEBPACK_IMPORTED_MODULE_8__["BreedingProcessViewerComponent"],
        _genetics_breeding_details_breeding_process_viewer_viewer_print_childs_viewer_print_childs_component__WEBPACK_IMPORTED_MODULE_9__["ViewerPrintChildsComponent"],
        _genetics_genetics_input_options_options_component__WEBPACK_IMPORTED_MODULE_10__["OptionsComponent"],
        _genetics_breeding_details_loading_simulation_loading_simulation_component__WEBPACK_IMPORTED_MODULE_11__["LoadingSimulationComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
        _donate_donate_component__WEBPACK_IMPORTED_MODULE_16__["DonateComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"]] }); })();


/***/ }),

/***/ "bt81":
/*!**********************************************************************************!*\
  !*** ./src/app/genetics/breeding-details/seed-details/seed-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SeedDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedDetailsComponent", function() { return SeedDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_genetics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/genetics.service */ "Nctn");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _beautifull_genetics_beautifull_genetics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beautifull-genetics/beautifull-genetics.component */ "CdOr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SeedDetailsComponent_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-beautifull-genetics", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("genetics", ctx_r3.baseSampleData.genes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.baseSampleData.probability, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gen: ", ctx_r3.baseSampleData.generation, "");
} }
function SeedDetailsComponent_div_15_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ANY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SeedDetailsComponent_div_15_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-beautifull-genetics", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parent_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("genetics", parent_r7.genes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", parent_r7.probability, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gen: ", parent_r7.generation, "");
} }
function SeedDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Base Sample");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SeedDetailsComponent_div_15_div_4_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SeedDetailsComponent_div_15_ng_template_5_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Parents Samples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SeedDetailsComponent_div_15_div_11_Template, 7, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.baseSampleData != undefined)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.parentsData);
} }
function SeedDetailsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Its an initial Sample ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SeedDetailsComponent {
    constructor(geneticsService) {
        this.geneticsService = geneticsService;
        this.parentsData = [];
    }
    ngOnInit() {
        for (let parent of this.sample.parents) {
            this.parentsData.push(this.geneticsService.getSpeciesInfo(parent));
        }
        if (this.sample.baseSample != "ANY") {
            this.baseSampleData = this.geneticsService.getSpeciesInfo(this.sample.baseSample);
        }
        else {
            this.baseSampleData = undefined;
        }
    }
}
SeedDetailsComponent.ɵfac = function SeedDetailsComponent_Factory(t) { return new (t || SeedDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_genetics_service__WEBPACK_IMPORTED_MODULE_1__["GeneticsService"])); };
SeedDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeedDetailsComponent, selectors: [["app-seed-details"]], inputs: { sample: "sample" }, decls: 18, vars: 6, consts: [[1, "seed"], [1, "customHeader"], [3, "genetics"], [1, "customSubtitle"], [1, "customDivider"], [1, "customContent"], [4, "ngIf", "ngIfElse"], ["initialSample", ""], [1, "baseSample"], [1, "contentSectionTitle"], ["class", "parentData", 4, "ngIf", "ngIfElse"], ["anySample", ""], [1, "customDivider2"], [1, "parentSamplesGeneral"], ["class", "parentData", 4, "ngFor", "ngForOf"], [1, "parentData"], [1, "parentDetails"], [1, "parentDetailsItem"], [1, "any"], [1, "initialSample"]], template: function SeedDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-beautifull-genetics", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SeedDetailsComponent_div_15_Template, 12, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SeedDetailsComponent_ng_template_16_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("genetics", ctx.sample.genes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", ctx.sample.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Chance: ", ctx.sample.probability, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gen: ", ctx.sample.generation, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parentsData.length)("ngIfElse", _r1);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _beautifull_genetics_beautifull_genetics_component__WEBPACK_IMPORTED_MODULE_3__["BeautifullGeneticsComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".seed[_ngcontent-%COMP%]:hover   mat-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 3pt 2pt white;\n  left: 0.2em;\n  bottom: 0.2em;\n}\n\n.customSubtitle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 40% 30%;\n  justify-items: center;\n}\n\n.parentData[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 75% 25%;\n  align-items: center;\n  margin: 10px 0px;\n}\n\n.parentDetails[_ngcontent-%COMP%] {\n  font-size: 8pt;\n  opacity: 50%;\n}\n\n.parentDetailsItem[_ngcontent-%COMP%] {\n  margin: -8px 0;\n}\n\n  .customHeader .mat-card-header-text {\n  width: 100%;\n  margin: 0px;\n}\n\n.customHeader[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.customContent[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.customDivider[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  margin-bottom: 5px;\n  border-top: 1px solid white;\n  opacity: 50%;\n}\n\n.customDivider2[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-top: 1px solid white;\n  opacity: 50%;\n}\n\n.seed[_ngcontent-%COMP%] {\n  width: 300px;\n  padding-top: 10px;\n  padding-right: 10px;\n}\n\n.initialSample[_ngcontent-%COMP%] {\n  opacity: 50%;\n}\n\n.contentSectionTitle[_ngcontent-%COMP%] {\n  opacity: 50%;\n  font-size: 14px;\n}\n\n.any[_ngcontent-%COMP%] {\n  opacity: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlZWQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESiIsImZpbGUiOiJzZWVkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VlZDpob3ZlciBtYXQtY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHQgMnB0IHdoaXRlO1xuICAgIGxlZnQ6IC4yZW07XG4gICAgYm90dG9tOiAuMmVtO1xufVxuXG4uY3VzdG9tU3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNDAlIDMwJTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYXJlbnREYXRhIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzUlIDI1JTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5wYXJlbnREZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDhwdDtcbiAgICBvcGFjaXR5OiA1MCU7XG59XG5cbi5wYXJlbnREZXRhaWxzSXRlbSB7XG4gICAgbWFyZ2luOiAtOHB4IDA7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tSGVhZGVyIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5jdXN0b21IZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmN1c3RvbUNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmN1c3RvbURpdmlkZXIge1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG9wYWNpdHk6IDUwJTtcblxufVxuXG4uY3VzdG9tRGl2aWRlcjIge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gICAgb3BhY2l0eTogNTAlO1xuXG59XG5cbi5zZWVkIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmluaXRpYWxTYW1wbGUge1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cblxuLmNvbnRlbnRTZWN0aW9uVGl0bGUge1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hbnkge1xuICAgIG9wYWNpdHk6IDcwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "e9Pf":
/*!*********************************************************************!*\
  !*** ./src/app/genetics/genetics-input/genetics-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: GeneticsInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneticsInputComponent", function() { return GeneticsInputComponent; });
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options/options.component */ "vLah");
/* harmony import */ var src_app_genetis_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/genetis.models */ "F6Oa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_genetics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/genetics.service */ "Nctn");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class GeneticsInputComponent {
    constructor(geneticsService, dialog) {
        this.geneticsService = geneticsService;
        this.dialog = dialog;
        // samples = ["WGGWGW", "XWYYHX", "HHGXYW", "YGYWHH", "YYHHGG"]
        this.samples = ["WYYWHW", "WYHHHY", "GGYWYX", "XHHHHG", "WYHXWW", "WHYWYX", "WYXXGY", "HGYXGW", "WGYWGH", "XYYYGY", "XGGXHW", "GHYXYX", "XXHXYW", "XHYWWH", "GXHXYX", "XYHWYW", "XHHWGH", "XHYWYW", "XYHYYW", "XHHWGY", "XGXXYX", "WYHXGH", "GWYXHH", "XGYWXX", "HYYWHH", "XXWYHW", "WGYWHX", "GWHXHH", "WHYXHW", "XYGXGX", "WHGWGG", "XYGXGW", "WYGXHH", "XHYWHW", "WYGXGX", "XYYWYH", "WHWXXW", "WXHGGW", "WYYYGW", "WXGWGW"];
        //https://stackoverflow.com/questions/61421873/object-copy-using-spread-operator-actually-shallow-or-deep
        this.settings = JSON.parse(JSON.stringify(src_app_genetis_models__WEBPACK_IMPORTED_MODULE_1__["defaultSettings"]));
    }
    samplesToTextArea(data) {
        return data.join("\n");
    }
    ;
    toArray(value) {
        // let test = value.split(/[\r\n]+/)
        let test = value.split(/[\r\n]+| |,|-/);
        test.forEach((genes, idx) => {
            test[idx] = genes.toUpperCase();
        });
        this.samples = test;
    }
    simulation() {
        this.geneticsService.startSimulation(this.samples, this.settings);
    }
    onOpenOptions() {
        const optionsRef = this.dialog.open(_options_options_component__WEBPACK_IMPORTED_MODULE_0__["OptionsComponent"], { data: this.settings });
        optionsRef.afterClosed().subscribe(settings => {
            if (settings != undefined) {
                this.settings = settings;
            }
        });
    }
    ngOnInit() {
        // this.simulation()
    }
}
GeneticsInputComponent.ɵfac = function GeneticsInputComponent_Factory(t) { return new (t || GeneticsInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_genetics_service__WEBPACK_IMPORTED_MODULE_3__["GeneticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
GeneticsInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GeneticsInputComponent, selectors: [["app-genetics-input"]], decls: 12, vars: 1, consts: [[1, "inputContainer"], [1, "title"], [1, "customMatForm"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "10", "cdkAutosizeMaxRows", "30", "ngModel", "", 1, "customTextArea", 3, "ngModel", "ngModelChange"], [1, "buttons"], ["mat-raised-button", "", "color", "primary", 1, "mybuttons", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "mybuttons", 3, "click"]], template: function GeneticsInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "My Samples");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function GeneticsInputComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.toArray($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeneticsInputComponent_Template_button_click_8_listener() { return ctx.simulation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Simulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeneticsInputComponent_Template_button_click_10_listener() { return ctx.onOpenOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.samplesToTextArea(ctx.samples));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: [".inputContainer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr auto;\n}\n\n.title[_ngcontent-%COMP%] {\n  opacity: 60%;\n}\n\n.customMatForm[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.customTextArea[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: monospace;\n  resize: both;\n  width: 100%;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 67% 33%;\n}\n\n.mybuttons[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dlbmV0aWNzLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJnZW5ldGljcy1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xufVxuXG4udGl0bGUge1xuICAgIG9wYWNpdHk6IDYwJTtcbn1cblxuLmN1c3RvbU1hdEZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tVGV4dEFyZWEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIHJlc2l6ZTogYm90aDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2NyUgMzMlO1xufVxuXG4ubXlidXR0b25zIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 12, vars: 0, consts: [[1, "mat-elevation-z6", "navbar"], ["routerLink", "", 1, "brand"], ["src", "./assets/images/rust.svg", "alt", "Rust Logo", "width", "112", "height", "28", 1, "logo"], [1, "name"], [1, "spacer"], [1, "button"], ["routerLink", "/about", "mat-raised-button", ""], ["routerLink", "/donate", "mat-raised-button", "", "color", "accent"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Genetics lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Donate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 6;\n}\n\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.brand[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.brand[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.name[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  font-size: 30px;\n  opacity: 50%;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.button[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogNjtcbn1cblxuLmJyYW5kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5icmFuZDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnJhbmQ6Zm9jdXMge1xuICAgIG91dGxpbmU6bm9uZTtcbn1cblxuLm5hbWUge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgb3BhY2l0eTogNTAlO1xufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMCA1cHg7XG59Il19 */"] });


/***/ }),

/***/ "vLah":
/*!**********************************************************************!*\
  !*** ./src/app/genetics/genetics-input/options/options.component.ts ***!
  \**********************************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_genetis_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/genetis.models */ "F6Oa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function OptionsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Min score of sample");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OptionsComponent_div_9_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.settings.auto.minScoreSample = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Min number of good samples");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OptionsComponent_div_9_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.settings.auto.minGoodSamples = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.settings.auto.minScoreSample);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.settings.auto.minGoodSamples);
} }
function OptionsComponent_div_10_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r7, " ");
} }
function OptionsComponent_div_10_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r8, " ");
} }
function OptionsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Max number of samples per crossbreeding");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function OptionsComponent_div_10_Template_mat_select_valueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.settings.manual.maxNumCombinations = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, OptionsComponent_div_10_mat_option_6_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Max number of generations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function OptionsComponent_div_10_Template_mat_select_valueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.settings.manual.maxNumGenerations = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, OptionsComponent_div_10_mat_option_11_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.settings.manual.maxNumCombinations);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.maxNumCombinationsOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.settings.manual.maxNumGenerations);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.maxNumGenerationsOptions);
} }
class OptionsComponent {
    constructor(dialogRef, newSettings) {
        this.dialogRef = dialogRef;
        this.newSettings = newSettings;
        this.maxNumCombinationsOptions = [2, 3, 4, 5, 6, 7, 8];
        this.maxNumGenerationsOptions = [1, 2, 3, 4, 5];
        this.sliderMinValue = -0.5;
        this.sliderMaxValue = 1;
        this.sliderStepValue = 0.1;
        this.settings = JSON.parse(JSON.stringify(this.newSettings));
    }
    ngOnInit() {
    }
    onReset() {
        this.settings = JSON.parse(JSON.stringify(src_app_genetis_models__WEBPACK_IMPORTED_MODULE_1__["defaultSettings"]));
    }
    onCancel() {
        this.dialogRef.close();
    }
}
OptionsComponent.ɵfac = function OptionsComponent_Factory(t) { return new (t || OptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
OptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OptionsComponent, selectors: [["app-options"]], decls: 47, vars: 29, consts: [["mat-dialog-content", ""], [1, "main"], [1, "mode"], ["aria-label", "Select a Simulation Mode", 1, "modeSelector", 3, "ngModel", "ngModelChange"], ["value", "auto", "matTooltip", "Automatic mode will do a less intesive search and stop when find some good samples", "matTooltipShowDelay", "1000", 1, "modeSelection"], ["value", "manual", "matTooltip", "Manual mode will perform the simulation specified bellow", "matTooltipShowDelay", "1000", 1, "modeSelection"], ["class", "automatic", 4, "ngIf"], ["class", "manual", 4, "ngIf"], [1, "generalSettings"], [1, "genesWeightGroup"], [1, "genesWeigh"], [1, "circle", "good"], [1, "genesSlider", 3, "ngModel", "max", "min", "step", "ngModelChange", "input"], [1, "circle", "bad"], ["mat-dialog-actions", "", 1, "buttons"], ["mat-raised-button", "", 3, "click"], [1, "spacer"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "mat-dialog-close"], [1, "automatic"], ["color", "accent"], ["type", "number", "step", "0.1", "matInput", "", "matTooltip", "The minimun score needed for a sample to be considered a good sample", "matTooltipShowDelay", "1000", 3, "ngModel", "ngModelChange"], ["type", "number", "matInput", "", "matTooltip", "The minimun number of good samples before stoping the simulation", "matTooltipShowDelay", "1000", 3, "ngModel", "ngModelChange"], [1, "manual"], ["matTooltip", "The maximum number of samples per crossbreeding to take into account", "matTooltipShowDelay", "1000", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matTooltip", "The maximun number of generations to simulate", "matTooltipShowDelay", "1000", 3, "value", "valueChange"], [3, "value"]], template: function OptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Simulation Mode settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-radio-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OptionsComponent_Template_mat_radio_group_ngModelChange_4_listener($event) { return ctx.settings.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Automatic Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Manual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OptionsComponent_div_9_Template, 10, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OptionsComponent_div_10_Template, 12, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " General Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OptionsComponent_Template_mat_slider_ngModelChange_17_listener($event) { return (ctx.settings.genesWeight["G"] = $event); })("input", function OptionsComponent_Template_mat_slider_input_17_listener($event) { return (ctx.settings.genesWeight["G"] = $event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OptionsComponent_Template_mat_slider_ngModelChange_22_listener($event) { return (ctx.settings.genesWeight["Y"] = $event); })("input", function OptionsComponent_Template_mat_slider_input_22_listener($event) { return (ctx.settings.genesWeight["Y"] = $event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OptionsComponent_Template_mat_slider_ngModelChange_27_listener($event) { return (ctx.settings.genesWeight["H"] = $event); })("input", function OptionsComponent_Template_mat_slider_input_27_listener($event) { return (ctx.settings.genesWeight["H"] = $event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OptionsComponent_Template_mat_slider_ngModelChange_32_listener($event) { return (ctx.settings.genesWeight["W"] = $event); })("input", function OptionsComponent_Template_mat_slider_input_32_listener($event) { return (ctx.settings.genesWeight["W"] = $event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OptionsComponent_Template_mat_slider_ngModelChange_37_listener($event) { return (ctx.settings.genesWeight["X"] = $event); })("input", function OptionsComponent_Template_mat_slider_input_37_listener($event) { return (ctx.settings.genesWeight["X"] = $event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OptionsComponent_Template_button_click_40_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Reset to default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OptionsComponent_Template_button_click_43_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.settings.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.mode == "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.mode == "manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.settings.genesWeight["G"])("max", ctx.sliderMaxValue)("min", ctx.sliderMinValue)("step", ctx.sliderStepValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.settings.genesWeight["G"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.settings.genesWeight["Y"])("max", ctx.sliderMaxValue)("min", ctx.sliderMinValue)("step", ctx.sliderStepValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.settings.genesWeight["Y"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.settings.genesWeight["H"])("max", ctx.sliderMaxValue)("min", ctx.sliderMinValue)("step", ctx.sliderStepValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.settings.genesWeight["H"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.settings.genesWeight["W"])("max", ctx.sliderMaxValue)("min", ctx.sliderMinValue)("step", ctx.sliderStepValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.settings.genesWeight["W"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.settings.genesWeight["X"])("max", ctx.sliderMaxValue)("min", ctx.sliderMinValue)("step", ctx.sliderStepValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.settings.genesWeight["X"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", ctx.settings);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSlider"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: [".main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 300px;\n  justify-items: center;\n}\n\n.modeSelector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.modeSelection[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.genesWeightGroup[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.genesWeight[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.genesSlider[_ngcontent-%COMP%] {\n  margin: -5px 5px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  line-height: 26px;\n  border-radius: 50%;\n  display: inline-block;\n  text-align: center;\n}\n\n.good[_ngcontent-%COMP%] {\n  background-color: olivedrab;\n}\n\n.bad[_ngcontent-%COMP%] {\n  background-color: #a5352b;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL29wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1BO0VBQ0kscUJBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0FBSEo7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSwyQkFBQTtBQUpKOztBQU9BO0VBQ0kseUJBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7QUFKSiIsImZpbGUiOiJvcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAzMDBweDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RlU2VsZWN0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDE1cHggMDtcbn1cblxuLm1vZGVTZWxlY3Rpb24ge1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4vLyAuZ2VuZXJhbFNldHRpbmdzIHtcbi8vICAgICBtaW4td2lkdGg6IDMwMHB4O1xuLy8gfVxuXG4uZ2VuZXNXZWlnaHRHcm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuXG4uZ2VuZXNXZWlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmdlbmVzU2xpZGVyIHtcbiAgICBtYXJnaW46IC01cHggNXB4O1xufVxuXG5cbi5jaXJjbGUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdvb2Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9saXZlZHJhYjtcbn1cblxuLmJhZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1MzUyYjtcbn1cblxuLmJ1dHRvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donate/donate.component */ "LjdP");
/* harmony import */ var _genetics_genetics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genetics/genetics.component */ "WZpc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _genetics_genetics_component__WEBPACK_IMPORTED_MODULE_3__["GeneticsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'donate', component: _donate_donate_component__WEBPACK_IMPORTED_MODULE_2__["DonateComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]
        ], _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardModule"]] }); })();


/***/ }),

/***/ "wSTH":
/*!*************************************************************************!*\
  !*** ./src/app/genetics/breeding-details/breeding-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: BreedingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreedingDetailsComponent", function() { return BreedingDetailsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _breeding_process_viewer_breeding_process_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breeding-process-viewer/breeding-process-viewer.component */ "/qIH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_genetics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/genetics.service */ "Nctn");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _loading_simulation_loading_simulation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loading-simulation/loading-simulation.component */ "C+48");
/* harmony import */ var _seed_details_seed_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seed-details/seed-details.component */ "bt81");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function BreedingDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add some samples and press \"Simulation\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BreedingDetailsComponent_ng_template_2_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", number_r9)("disabled", number_r9 > ctx_r3.nGenesAvailables("G"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](number_r9);
} }
function BreedingDetailsComponent_ng_template_2_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", number_r10)("disabled", number_r10 > ctx_r4.nGenesAvailables("Y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](number_r10);
} }
function BreedingDetailsComponent_ng_template_2_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r11 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", number_r11)("disabled", number_r11 > ctx_r5.nGenesAvailables("H"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](number_r11);
} }
function BreedingDetailsComponent_ng_template_2_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loading-simulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BreedingDetailsComponent_ng_template_2_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BreedingDetailsComponent_ng_template_2_li_34_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const sample_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.onSelect(sample_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-seed-details", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sample_r12 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", sample_r12 === ctx_r7.selectedSample);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sample", sample_r12);
} }
function BreedingDetailsComponent_ng_template_2_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BreedingDetailsComponent_ng_template_2_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.onLoadMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Load More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BreedingDetailsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Simulation Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Genes Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BreedingDetailsComponent_ng_template_2_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.searchString = $event; })("ngModelChange", function BreedingDetailsComponent_ng_template_2_Template_input_ngModelChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.onFiltersChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Number of G's");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BreedingDetailsComponent_ng_template_2_Template_mat_select_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.nGSelected = $event; })("selectionChange", function BreedingDetailsComponent_ng_template_2_Template_mat_select_selectionChange_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.onFiltersChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, BreedingDetailsComponent_ng_template_2_mat_option_16_Template, 2, 3, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Number of Y's");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BreedingDetailsComponent_ng_template_2_Template_mat_select_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.nYSelected = $event; })("selectionChange", function BreedingDetailsComponent_ng_template_2_Template_mat_select_selectionChange_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.onFiltersChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, BreedingDetailsComponent_ng_template_2_mat_option_23_Template, 2, 3, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Number of H's");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BreedingDetailsComponent_ng_template_2_Template_mat_select_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.nHSelected = $event; })("selectionChange", function BreedingDetailsComponent_ng_template_2_Template_mat_select_selectionChange_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.onFiltersChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, BreedingDetailsComponent_ng_template_2_mat_option_30_Template, 2, 3, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, BreedingDetailsComponent_ng_template_2_div_32_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, BreedingDetailsComponent_ng_template_2_li_34_Template, 2, 3, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, BreedingDetailsComponent_ng_template_2_button_35_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.searchString);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.nGSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.nGenesOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.nYSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.nGenesOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.nHSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.nGenesOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.runningSimulation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.filteredSpecies.slice(0, ctx_r2.maxSpeciesToShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.filteredSpecies.length > ctx_r2.maxSpeciesToShow);
} }
class BreedingDetailsComponent {
    constructor(geneticsService, dialog) {
        this.geneticsService = geneticsService;
        this.dialog = dialog;
        this.availableSpecies = [];
        this.searchString = '';
        this.searchGenesControlForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.maxSpeciesToShow = 0;
        this.nGenesOptions = [1, 2, 3, 4, 5, 6];
        this.samplesDB = {};
        this.filteredSpecies = [];
        this.runningSimulation = false;
    }
    ngOnInit() {
        this.subscribeToResults();
    }
    ngOnDestroy() {
        this.newSamplesSubscription.unsubscribe();
        this.runningSimulationSubscription.unsubscribe();
    }
    subscribeToResults() {
        this.newSamplesSubscription = this.geneticsService.getNewSamples()
            .subscribe(samplesDB => {
            this.samplesDB = samplesDB;
            this.availableSpecies = [];
            Object.keys(this.samplesDB).forEach(sample => {
                this.availableSpecies.push(this.samplesDB[sample][0]);
            });
            this.filteredSpecies = this.availableSpecies;
            this.maxSpeciesToShow = 5;
            // this.onLoadMore();
        });
        this.runningSimulationSubscription = this.geneticsService.runningSimulation_Subject.subscribe(simulation => this.runningSimulation = simulation);
    }
    onSelect(sample) {
        this.selectedSample = sample;
        this.dialog.open(_breeding_process_viewer_breeding_process_viewer_component__WEBPACK_IMPORTED_MODULE_1__["BreedingProcessViewerComponent"], {
            data: sample
        });
    }
    onLoadMore(nItems = 5) {
        this.maxSpeciesToShow += nItems;
    }
    nGenesAvailables(currentLetter) {
        const g = typeof (this.nGSelected) == "undefined" || currentLetter == "G" ? 0 : this.nGSelected;
        const y = typeof (this.nYSelected) == "undefined" || currentLetter == "Y" ? 0 : this.nYSelected;
        const h = typeof (this.nHSelected) == "undefined" || currentLetter == "H" ? 0 : this.nHSelected;
        return 6 - (g + y + h);
    }
    onFiltersChange() {
        this.filteredSpecies = this._mainFilter(this.searchString);
    }
    _mainFilter(searchString) {
        // For filtering the searchString
        const filterValue = searchString.toUpperCase();
        // For filtering the num genes selector
        const g = typeof (this.nGSelected) == "undefined" ? 0 : this.nGSelected;
        const y = typeof (this.nYSelected) == "undefined" ? 0 : this.nYSelected;
        const h = typeof (this.nHSelected) == "undefined" ? 0 : this.nHSelected;
        const datRegex = `(?=(.*G.*){${g}})(?=(.*Y.*){${y}})(?=(.*H.*){${h}})`;
        // Chain of filters
        return this.availableSpecies
            .filter(specie => specie.genes.toUpperCase().startsWith(filterValue))
            .filter(specie => specie.genes.search(datRegex) != -1);
    }
}
BreedingDetailsComponent.ɵfac = function BreedingDetailsComponent_Factory(t) { return new (t || BreedingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_genetics_service__WEBPACK_IMPORTED_MODULE_3__["GeneticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
BreedingDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BreedingDetailsComponent, selectors: [["app-breeding-details"]], decls: 4, vars: 2, consts: [[1, "resultsContainer"], ["class", "noSimulation", 4, "ngIf", "ngIfElse"], ["simulation", ""], [1, "noSimulation"], [1, "simulation"], [1, "title"], [1, "filters"], [1, "filters-form"], ["color", "accent", 1, "searchBar"], ["type", "text", "matInput", "", "matTooltip", "Search for specific genes", "matTooltipShowDelay", "1000", "name", "searchString", 3, "ngModel", "ngModelChange"], ["color", "accent", 1, "nGenes"], ["name", "numG", "matTooltip", "Select Minimun number of G's to show", "matTooltipShowDelay", "1000", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["name", "numY", "matTooltip", "Select Minimun number of Y's to show", "matTooltipShowDelay", "1000", 3, "ngModel", "ngModelChange", "selectionChange"], ["name", "numH", "matTooltip", "Select Minimun number of H's to show", "matTooltipShowDelay", "1000", 3, "ngModel", "ngModelChange", "selectionChange"], [1, "content"], ["class", "loading", 4, "ngIf"], [1, "samples"], [3, "selected", "click", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "class", "loadMoreButton", 3, "click", 4, "ngIf"], [3, "value", "disabled"], [1, "loading"], [3, "click"], [3, "sample"], ["mat-stroked-button", "", 1, "loadMoreButton", 3, "click"]], template: function BreedingDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BreedingDetailsComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BreedingDetailsComponent_ng_template_2_Template, 36, 10, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.availableSpecies.length == 0 && !ctx.runningSimulation)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _loading_simulation_loading_simulation_component__WEBPACK_IMPORTED_MODULE_11__["LoadingSimulationComponent"], _seed_details_seed_details_component__WEBPACK_IMPORTED_MODULE_12__["SeedDetailsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], styles: [".resultsContainer[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  display: grid;\n  height: 100%;\n  width: calc(100% - 30);\n}\n\n.noSimulation[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n  font-size: 30px;\n  opacity: 50%;\n}\n\n.simulation[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-rows: auto auto 1fr;\n  grid-template-columns: 1fr;\n}\n\n.title[_ngcontent-%COMP%] {\n  opacity: 60%;\n}\n\n.filters[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.filters-form[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  grid-template-columns: 40% 20% 20% 20%;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n\n.loading[_ngcontent-%COMP%] {\n  align-self: center;\n  justify-self: center;\n}\n\n.samples[_ngcontent-%COMP%] {\n  width: 300px;\n  list-style-type: none;\n  margin: 0 auto;\n}\n\n.samples[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  cursor: pointer;\n  position: relative;\n}\n\n.samples[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]     .seed mat-card {\n  box-shadow: 0px 0px 3pt 2pt olive;\n  left: 0.3em;\n  bottom: 0.3em;\n}\n\n  .mat-dialog-container {\n  background-color: #303030;\n}\n\n.loadMoreButton[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JyZWVkaW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0tBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBOUtKOztBQWlMQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQTlLSjs7QUFpTEE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7QUE5S0o7O0FBaUxBO0VBQ0ksWUFBQTtBQTlLSjs7QUFpTEE7RUFDSSxXQUFBO0FBOUtKOztBQWlMQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUE5S0o7O0FBaUxBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FBOUtKOztBQWlMQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUE5S0o7O0FBaUxBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQTlLSjs7QUFpTEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTlLSjs7QUFpTEE7RUFDSSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBOUtKOztBQWlMQTtFQUNJLHlCQUFBO0FBOUtKOztBQWlMQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBOUtKIiwiZmlsZSI6ImJyZWVkaW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubWFpbkNvbnRhaW5lciB7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gfVxuXG4vLyAuZGF0YUNvbnRhaW5lciB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vIH1cblxuLy8gLm5vU2ltdWxhdGlvbiB7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbi8vICAgICBmb250LXNpemU6IDMwcHg7XG4vLyAgICAgb3BhY2l0eTogNTAlO1xuLy8gfVxuXG4vLyAudGl0dGxlIHtcbi8vICAgICBvcGFjaXR5OiA2MCU7XG4vLyB9XG5cbi8vIC5maWx0ZXItZm9ybSB7XG4vLyAgICAgZGlzcGxheTogZ3JpZDtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSAyMCUgMjAlIDIwJTtcbi8vIH1cblxuLy8gLnNhbXBsZXMge1xuLy8gICAgIHdpZHRoOiAzMDBweDtcbi8vICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XG4vLyB9XG5cbi8vIC5zYW1wbGVzIGxpIHtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyB9XG5cbi8vIC5zYW1wbGVzIGxpLnNlbGVjdGVkIDo6bmctZGVlcCAuc2VlZCBtYXQtY2FyZCB7XG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHQgMnB0IG9saXZlO1xuLy8gICAgIGxlZnQ6IC4zZW07XG4vLyAgICAgYm90dG9tOiAuM2VtO1xuLy8gfVxuXG4vLyAubG9hZE1vcmVCdXR0b24ge1xuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG4vLyA6Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuLy8gfVxuXG4vLyAvLyAuc2FtcGxlcyBsaTpob3ZlciB7XG4vLyAvLyAgICAgb3V0bGluZTogM3B4IHNvbGlkIG9saXZlO1xuLy8gLy8gICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B0IDNwdCBvbGl2ZTtcbi8vIC8vIH1cblxuXG5cblxuXG5cblxuXG4vLyAubWFpbkNvbnRhaW5lciB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbi8vIH1cblxuLy8gLm5vU2ltdWxhdGlvbiB7XG4vLyAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuLy8gICAgIGZvbnQtc2l6ZTogMzBweDtcbi8vICAgICBvcGFjaXR5OiA1MCU7XG4vLyB9XG5cbi8vIC5zaW11bGF0aW9uIHtcbi8vICAgICBkaXNwbGF5OiBncmlkO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuLy8gICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZScgJ2NvbnRlbnQnO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHNhbmR5YnJvd247XG4vLyB9XG5cbi8vIC50aXRsZSB7XG4vLyAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcbi8vICAgICBvcGFjaXR5OiA2MCU7XG4vLyB9XG5cbi8vIC5jb250ZW50IHtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG87XG4vLyAgICAgZ3JpZC1hcmVhOiBjb250ZW50O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4vLyB9XG5cbi8vIC5maWx0ZXJzIHtcbi8vICAgICBkaXNwbGF5OiBncmlkO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDIwJSAyMCUgMjAlO1xuLy8gfVxuXG4vLyAuZGF0YSB7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgIGRpc3BsYXk6IGdyaWQ7XG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcbi8vIH1cblxuLy8gLmxvYWRpbmcge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4vLyB9XG5cbi8vIC5zYW1wbGVzIHtcbi8vICAgICBncmlkLWFyZWE6ICdkYXRhJztcbi8vICAgICB3aWR0aDogMzAwcHg7XG4vLyAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gfVxuXG4vLyAuc2FtcGxlcyBsaSB7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gfVxuXG4vLyAuc2FtcGxlcyBsaS5zZWxlY3RlZCA6Om5nLWRlZXAgLnNlZWQgbWF0LWNhcmQge1xuLy8gICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B0IDJwdCBvbGl2ZTtcbi8vICAgICBsZWZ0OiAuM2VtO1xuLy8gICAgIGJvdHRvbTogLjNlbTtcbi8vIH1cblxuLy8gOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbi8vIH1cblxuLy8gLmxvYWRNb3JlQnV0dG9uIHtcbi8vICAgICBtYXJnaW46IDAgYXV0bztcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vIH1cblxuXG5cblxuLy8gLm1haW5Db250YWluZXIge1xuLy8gICAgIGRpc3BsYXk6IGdyaWQ7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RpdGxlJyAnY29udGVudCc7O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHNhbmR5YnJvd247XG4vLyB9XG5cblxuXG4vLyAudGl0bGUge1xuLy8gICAgIGdyaWQtYXJlYTogdGl0bGU7XG4vLyB9XG5cbi8vIC5jb250ZW50IHtcbi8vICAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xuLy8gfVxuXG4ucmVzdWx0c0NvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwKTtcbn1cblxuLm5vU2ltdWxhdGlvbiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgb3BhY2l0eTogNTAlO1xufVxuXG4uc2ltdWxhdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuXG4udGl0bGUge1xuICAgIG9wYWNpdHk6IDYwJTtcbn1cblxuLmZpbHRlcnMge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZmlsdGVycy1mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDIwJSAyMCUgMjAlXG59XG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cblxuLmxvYWRpbmcge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnNhbXBsZXMge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zYW1wbGVzIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zYW1wbGVzIGxpLnNlbGVjdGVkIDo6bmctZGVlcCAuc2VlZCBtYXQtY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHQgMnB0IG9saXZlO1xuICAgIGxlZnQ6IC4zZW07XG4gICAgYm90dG9tOiAuM2VtO1xufVxuXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xufVxuXG4ubG9hZE1vcmVCdXR0b24ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map