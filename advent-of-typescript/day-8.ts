// https://typehero.dev/challenge/day-7

type RemoveNaughtyChildren<T> = Omit<T, `${"naughty_"}${string}`>;
