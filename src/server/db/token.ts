import { Query } from "./index";

const locateByToken = async (id: string | number, token: string) =>
  Query(`SELECT * FROM tokens WHERE id = ${id} and token = '${token}'`);
const insertToken = async (userid: number) =>
  Query(`INSERT INTO tokens (userid) VALUES (${userid})`);
const updateToken = async (id: number, token: string) =>
  Query(`UPDATE tokens SET token ='${token}' WHERE id = ${id}`);

export default {
  updateToken,
  insertToken,
  locateByToken,
};