export class Anagram {
  private readonly subject: string;
  private readonly normalizedSubject: string;

  constructor(subject: string) {
    this.subject = subject;
    this.normalizedSubject = Anagram.sortLetters(subject);
  }

  matches(...candidates: string[]): string[] {
    return candidates.filter((candidate) => {
      const normalizedCandidate = Anagram.sortLetters(candidate);
      // 自分自身は除外（大文字小文字問わず）
      if (candidate.toLowerCase() === this.subject.toLowerCase()) {
        return false;
      }
      return normalizedCandidate === this.normalizedSubject;
    });
  }

  private static sortLetters(word: string): string {
    return word
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }
}
