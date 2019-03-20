import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/_services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  panelOpenState = false;
  public countries = [];

  constructor(private _countryService: CountryService) { }

  ngOnInit() {
    this._countryService.getCountry()
      .subscribe(data => this.countries = data);
  }

}
