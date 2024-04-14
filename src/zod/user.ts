import zod from "zod";

export const username = zod.string().min(1);
export const password = zod
  .string()
  .min(8)
  .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/);

export const user = zod.object({
  username,
  password,
});

const schema = {
  user,
  username,
  password,
};

export default schema;