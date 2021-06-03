import dotenv from "dotenv";

// Class containing all the configuration settings that will be used by the application
export class Configuration {
  public static PORT: number;
  public static MONGO_URI: string;
  public static SECRET: string;

  // function initializing config varaibles from environment
  public static initConguration() {
    dotenv.config();
    Configuration.PORT = parseInt(process.env.PORT) || 5000;
    Configuration.MONGO_URI = process.env.MONGO_URI;
    Configuration.SECRET = process.env.SECRET;
  }
}
