// https://typehero.dev/challenge/day-9

type Reverse<WORD extends string> =
  WORD extends `${infer FirstLetter}${infer RestWord}`
    ? `${Reverse<RestWord>}${FirstLetter}`
    : "";
