export class Range {
  static range(totalPages: number): number[] {
    return Array.from({length: totalPages}, (_, index) => index);
  }
}
