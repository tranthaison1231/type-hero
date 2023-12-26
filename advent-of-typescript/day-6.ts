// https://typehero.dev/challenge/day-6

type FilterChildrenBy<Status, T> = Status extends T ? never : Status;
