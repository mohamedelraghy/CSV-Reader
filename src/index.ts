import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { winsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportsTarget/ConsoleReport";

// * create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

// * create an instance of MatchReader & pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new winsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
