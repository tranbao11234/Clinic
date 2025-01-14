import { CreateUserPayload } from "../types/user.type";
import db from "../models";

export const createUserService = async (payload: CreateUserPayload) => {
  return await db.User.create(payload);
};

export const getUsersService = async () => {
  return await db.User.findAll({ raw: true });
};
