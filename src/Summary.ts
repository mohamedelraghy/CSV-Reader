import { MatchData } from "./MatchDate";
import { winsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportsTarget/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {

  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new winsAnalysis(team), new HtmlReport('index'))
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
