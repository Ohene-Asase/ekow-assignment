import { PipeTransform, Pipe } from '@angular/core';
import { ICountry } from '../countries/country';

@Pipe({
    name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {
    transform(countries: ICountry[], searchTerm: string): ICountry[] {
        if (!countries || !searchTerm) {
            return countries;
        }
        return countries.filter(country =>
            country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
