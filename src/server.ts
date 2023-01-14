import app from "./app";
import AppDataSource from "./data-source";
import { Message } from "./utils/messages.utils";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log(Message.dataSourceInit);
    })
    .catch((err) => {
      console.log(Message.errorDataSourceInit, err);
    });

  app.listen(3000, () => {
    console.log(Message.serverStarted);
  });
})();
