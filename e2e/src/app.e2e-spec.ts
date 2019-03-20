import { browser, element, by} from 'protractor';
import {Key} from 'selenium-webdriver';
import {expectToExist} from '../util/index';



describe('Fetch Content', () => {
  it('Loads Asian countries from https://restcountries.eu/rest/v2/all ', async () => {
      expect(await element.all(by.css('.mat-expansion-panel')).count()).toBe(51);
  });
  beforeAll(() => browser.get(''));

  function getPageElts() {
      const navElts = element.all(by.css('app-root'));

      return {
          navElts,

          appHomeHref: navElts.get(1),
          appHome: element(by.css('app-root app-home-layout mat-toolbar')),

          appHeroesHref: navElts.get(1),
          appCountry: element(by.css('app-root app-heroes')),
          allCountry: element.all(by.css('app-root app-country-list > mat-expansion-panel')),


          countryDetail: element(by.css('app-root app-country-list >')),

          searchBox: element(by.css('#search-box')),
          searchResults: element.all(by.css('.search-result mat-expansion-panel'))
      };
  }


  describe('Set Favorites', () => {
      const getInput = () => element(by.css('#normal-slide-toggle input'));
      const getNormalToggle = () => element(by.css('#normal-slide-toggle'));



      it('Mark item as Favorite ', async () => {
          await expectToExist('mat-slide-toggle');
          browser.sleep(4000);
      });

      it('Highlight favorited item', async () => {
          const inputEl = getInput();

          expect(await inputEl.getAttribute('checked'))
              .toBeFalsy('Expect slide-toggle to be unchecked');

          await getNormalToggle().click();

          expect(await inputEl.getAttribute('checked'))
              .toBeTruthy('Expect slide-toggle to be checked');
          browser.sleep(4000);
      });


      describe('Make view of the data that lists the items and some major facts per item.', () => {


          it('Show drill down of data in an element', async () => {
              const panelHeader = element.all(by.css('.mat-expansion-panel-header')).get(1);
              const panelDescription = element
                  .all(by.css('.mat-expansion-panel-header mat-panel-title')).get(1);



              await panelHeader.click();
              browser.sleep(2000);
              expect(await panelDescription.getText()).toContain('');
          });



          describe('Progressive country search', () => {




              it(`searches for India`, async () => {

                  getPageElts().searchBox.sendKeys('India');
                  browser.sleep(2000);

                  expect(await element.all(by.css('.mat-expansion-panel')).count()).toBe(2);
              });

              it(`Clear Search Field`, async () => {

                  getPageElts().searchBox.sendKeys(Key.chord(Key.CONTROL, 'a', Key.DELETE));


                  expect(await element.all(by.css('.mat-expansion-panel')).count()).toBe(51);
              });



              it(`searches for countries with "Z" in them`, async () => {

                  getPageElts().searchBox.sendKeys('Z');
                  browser.sleep(2000);

                  expect(await element.all(by.css('.mat-expansion-panel')).count()).toBe(5);
                  browser.sleep(2000);
              });

              it(`Clear Search Field`, async () => {

                  getPageElts().searchBox.sendKeys(Key.chord(Key.CONTROL, 'a', Key.DELETE));


                  expect(await element.all(by.css('.mat-expansion-panel')).count()).toBe(51);
              });


              describe('Switch Colour Pallete', () => {



                  it(`Changes Theme`, () => {
                      element(by.id('colour-change')).click();


                      browser.sleep(4000);
                    });


                  it(`Changes Theme Back To Original Theme`, () => {
                        element(by.id('colour-change')).click();


                        browser.sleep(4000);
                  });

                });

              });




          });




      });


  });




