import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResultEnum";

// * create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

// * create an instance of MatchReader & pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWin = 0;

for (const match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
    manUnitedWin++;
  else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    manUnitedWin++;
}

console.log(`Man United Wins ${manUnitedWin} games`);
