// https://typehero.dev/challenge/day-6

type SantasList<
  BadList extends ReadonlyArray<unknown>,
  GoodList extends ReadonlyArray<unknown>,
> = [...BadList, ...GoodList];
