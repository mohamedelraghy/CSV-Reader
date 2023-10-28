import { CsvFileReader } from "./CsvFileReader";

const csvFileReader = new CsvFileReader("football.csv");

csvFileReader.read();
const matches = csvFileReader.data;

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWin = 0;

for (const match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
    manUnitedWin++;
  else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    manUnitedWin++;
}

console.log(`Man United Wins ${manUnitedWin} games`);
