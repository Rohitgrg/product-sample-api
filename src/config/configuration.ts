import dotenv from "dotenv";

export class Configuration {
  public static PORT: number;
  public static MONGO_URI: string;
  public static SECRET: string;

  public static initConguration() {
    dotenv.config();
    Configuration.PORT = parseInt(process.env.PORT) || 5000;
    Configuration.MONGO_URI = process.env.MONGO_URI;
    Configuration.SECRET = process.env.SECRET;
  }
}
