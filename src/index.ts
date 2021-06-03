import express, { Express } from "express";
import { Configuration } from "./config/configuration";
import { DatabaseUtil, IDbConfig } from "./db/db";
import { ApplicationRouter } from "./router/router";
import { authenticate } from "./middleware/auth";
import { errorHandler } from "./plugins/errorHandler";
import md from "markdown-it";
import fs from "fs";
import path from "path";
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
    application.get("/", (req, res) => {
      const markdownRender = md();
      const filePath = path.join(__dirname, "../README.md");
      const data = fs.readFileSync(filePath, "utf8");
      const result = markdownRender.render(data);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(result);
      res.end();
    });
    application.use(authenticate);
    application.use("/api", new ApplicationRouter().getRouter());
    application.use(errorHandler);

    application.listen(Configuration.PORT, () =>
      console.log(`Running on port ${Configuration.PORT}`)
    );
  }
}

Server.startServer();
