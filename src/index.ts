import express, { Express } from "express";
import { Configuration } from "./config/configuration";
import { DatabaseUtil, IDbConfig } from "./db/db";
import { ApplicationRouter } from "./router/router";
import { authenticate } from "./middleware/auth";
import { errorHandler } from "./plugins/errorHandler";

class Server {
  public static async startServer() {
    const application: Express = express();

    Configuration.initConguration();

    // db run
    const dbConfig: IDbConfig = {
      uri: Configuration.MONGO_URI,
    };

    // depenency injection
    const database: DatabaseUtil = new DatabaseUtil(dbConfig);
    await database.startMongoDB();

    application.use(express.json());
    application.use(authenticate);
    application.use("/api", new ApplicationRouter().getRouter());
    application.use(errorHandler);

    application.listen(Configuration.PORT, () =>
      console.log(`Running on port ${Configuration.PORT}`)
    );
  }
}

Server.startServer();
