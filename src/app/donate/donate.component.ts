import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  bitcoinAddress = "1L2LzBsMZxqPXj95xJspFJf29vKy6u1YVb"
  
  constructor() { }

  ngOnInit(): void {
  }

}
