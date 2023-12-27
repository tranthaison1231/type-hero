// https://typehero.dev/challenge/day-7

type AppendGood<T> = {
  [P in keyof T as P extends string ? `good_${P}` : never]: T[P];
};
