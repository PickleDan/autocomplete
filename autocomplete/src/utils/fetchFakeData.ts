import { faker } from "@faker-js/faker";
import { User } from "./type";

export const users = Array(100)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: faker.person.fullName(),
  }));

export const fetchUsers = async (search: string): Promise<User[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        users.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );

      // case to check failed behaviour
      // rej('Error occurred')
    }, 1000);
  });
};
