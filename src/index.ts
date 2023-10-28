import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResultEnum";

const csvFileReader = new MatchReader("football.csv");

csvFileReader.read();
const matches = csvFileReader.data;

let manUnitedWin = 0;

for (const match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
    manUnitedWin++;
  else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    manUnitedWin++;
}

console.log(`Man United Wins ${manUnitedWin} games`);
