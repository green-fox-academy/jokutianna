'use strict';

export {}

const fs = require('fs');

function averageTemp(filename: string): void {
  let fileContent : string = '';

  try {
    fileContent = fs.readFileSync(filename, 'utf-8');
  
  } catch (error) {
    console.log(`File does not exist`);
  } 
  //console.log(fileContent);
  //Eddig beolvastam, kiírtam 

  let splitContent: string[] = fileContent.split('\r\n'); //newline break
  //console.log(splitContent);

  //Eltört sorokat széttöri külön elemekre ami megy után a mátrixba
  let yearlySplit: string[][] = [];

  for (let i: number = 1; i < splitContent.length -1; i++) { //Miért -1? Hogy az utolsó sort ne nézze
    let yearlyLine: string[] = splitContent[i].split(' '); //minden sor fel van törve a szüneteknél is
    yearlySplit.push(yearlyLine);
  }

  console.log(yearlySplit);

  //Ország, évek, hőmérséklet változókban
  let hottestYearFrance: string = yearlySplit[0][3];
  let hottestFrance: number = Number(yearlySplit[0][0]);
  let coldestYearFrance: string = yearlySplit[0][3];
  let coldestFrance: number = Number(yearlySplit[0][0]);

  let hottestYearSweden: string = yearlySplit[0][3];
  let hottestSweden: number = Number(yearlySplit[0][1]);
  let coldestYearSweden: string = yearlySplit[0][3];
  let coldestSweden: number = Number(yearlySplit[0][1]);

  let hottestYearGermany: string = yearlySplit[0][3];
  let hottestGermany: number = Number(yearlySplit[0][2]);
  let coldestYearGermany: string = yearlySplit[0][3];
  let coldestGermany: number = Number(yearlySplit[0][2]);

  //for loop
  for (let i: number = 1; i < yearlySplit.length; i++) {

    // Soronkenti(evek) homerseklet
    let franceTemp: number = Number(yearlySplit[i][0]);
    let swedenTemp: number = Number(yearlySplit[i][1]);
    let germanyTemp: number = Number(yearlySplit[i][2]);
    let year: string = yearlySplit[i][3];

    if (franceTemp > hottestFrance) {
      hottestFrance = franceTemp;
      hottestYearFrance = year;
  
    } else if (franceTemp < coldestFrance) {
      coldestFrance = franceTemp;
      coldestYearFrance = year;
    }

    if (swedenTemp > hottestSweden) {
      hottestSweden = swedenTemp;
      hottestYearSweden = year;
    } else if (swedenTemp < coldestSweden) {
      coldestSweden = swedenTemp;
      coldestYearSweden = year;
    }

    if (germanyTemp > hottestGermany) {
      hottestGermany = germanyTemp;
      hottestYearGermany = year;
    } else if (germanyTemp < coldestGermany) {
      coldestGermany = germanyTemp;
      coldestYearGermany = year;
    }
  }
  //Végső print:
  console.log(`France => ${coldestYearFrance}, ${hottestYearFrance}`);
  console.log(`Sweden => ${coldestYearSweden}, ${hottestYearSweden}`);
  console.log(`Germany => ${coldestYearGermany}, ${hottestYearGermany}`);
}

averageTemp('result.txt');