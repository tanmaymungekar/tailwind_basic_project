export const validEmail = new RegExp(
  "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$/"
);
export const validPassword = new RegExp(
  "^[@#](?=.{7,13}$)(?=w{7,13})(?=[^aeiou_]{7,13})(?=.*[A-Z])(?=.*d)"
);
