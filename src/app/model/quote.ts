export class Quote {
  showDescription: boolean;
  upVote: number;
  downVote: number;
  constructor(public submitterName: string, public author: string, public quote: string, public postedDate: Date) {
    this.showDescription = false;
    this.upVote = 0;
    this.downVote = 0;
  }
}
