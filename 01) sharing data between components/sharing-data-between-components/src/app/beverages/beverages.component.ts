import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

  @Input() beverage = "tea";

  constructor() { }

  ngOnInit(): void {
  }

}