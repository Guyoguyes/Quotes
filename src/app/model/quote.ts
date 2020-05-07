export class Quote {
  showDescription: boolean;
  upvote: number;
  downVote: number;
  constructor(public submitterName: string, public author: string, public quote: string, public postedDate: Date) {
    this.showDescription = false;
    this.upvote = 0;
    this.downVote = 0;
  }
}
