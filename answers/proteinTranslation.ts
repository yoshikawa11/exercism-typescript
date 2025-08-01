const aminoAcids: { [key: string]: string } = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

export const translate = (rna: string): string[] => {
  const result: string[] = [];
  const codons = rna.match(/.{1,3}/g) ?? [];

  for (const codon of codons) {
    const acid = aminoAcids[codon];
    if (!acid) throw new Error("Invalid codon");
    if (acid === "STOP") break;
    result.push(acid);
  }
  return result;
};
