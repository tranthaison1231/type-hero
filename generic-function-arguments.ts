// https://typehero.dev/challenge/generic-function-arguments

const identity = <T>(val: T) => val;

const mapArray = <T, U>(arr: T[], fn: (val: T) => U) => arr.map(fn);
