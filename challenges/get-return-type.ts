// https://typehero.dev/challenge/get-return-type/solutions/1433

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer U
  ? U
  : never;
