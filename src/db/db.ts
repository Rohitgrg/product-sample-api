import mongoose from "mongoose";

// stores the status of the database connection
interface IConnectionType {
  isConnected: boolean;
}

// contains the uri to the databse
export interface IDbConfig {
  uri: string;
}

// provides utility functions to setup the database for the application
export class DatabaseUtil {
  private _connection: IConnectionType = {
    isConnected: false,
  };
  private _config: IDbConfig;

  constructor(config: IDbConfig) {
    this._config = config;
  }

  // method to initiate the database using the available db config
  public async startMongoDB() {
    if (this._connection.isConnected) {
      return;
    }

    const db = await mongoose.connect(this._config.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    this._connection.isConnected = Boolean(db.connections[0].readyState);
    if (this._connection.isConnected)
      console.log("MongoDB started at " + this._config.uri);
  }

  // getter for databse connection
  public getMongoConnection(): IConnectionType {
    return this._connection;
  }
}
