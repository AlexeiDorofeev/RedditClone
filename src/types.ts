import { Response } from "express";
import { Redis } from "ioredis";

export type MyContext = {
  req: any; //Request & { session: Express.Session };
  redis: Redis;
  res: Response;
};
