import mongoose from "mongoose";

interface IConnectionType {
  isConnected: boolean;
}

export interface IDbConfig {
  uri: string;
}

export class DatabaseUtil {
  private _connection: IConnectionType = {
    isConnected: false,
  };
  private _config: IDbConfig;

  constructor(config: IDbConfig) {
    this._config = config;
  }

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

  public getMongoConnection(): IConnectionType {
    return this._connection;
  }
}
