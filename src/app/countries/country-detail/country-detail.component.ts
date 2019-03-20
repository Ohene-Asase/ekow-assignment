import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/_services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  
  public countries = [];

  constructor(private _countryService: CountryService) { }

  ngOnInit() {
    this._countryService.getCountry()
      .subscribe(data => this.countries = data);
  }

}
