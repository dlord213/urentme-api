import { hash as bcryptHash } from "bcrypt";

export const hash = (plain: string) => bcryptHash(plain, 10);

export const pick = <T>(arr: T[] | readonly T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

export const range = (n: number) => Array.from({ length: n }, (_, i) => i);

export const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
};
