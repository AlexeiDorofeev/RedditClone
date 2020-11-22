import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Response } from "express";
import { Redis } from "ioredis";

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: any; //Request & { session: Express.Session };
  redis: Redis;
  res: Response;
};
