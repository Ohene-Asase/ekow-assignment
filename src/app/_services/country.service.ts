import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry } from '../countries/country';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

// tslint:disable-next-line: max-line-length
  private readonly _url: string = 'https://restcountries.eu/rest/v2/region/asia?fields=name;capital;region;subregion;population;latlng;demonym;area;timezones;languages;flag;currencies';

  constructor(private http: HttpClient) { }

  getCountry(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this._url);
  }
}
