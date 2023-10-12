import app from "./app.js";
import { CONNECT_DB } from "./db.js";

const port = 3000;
CONNECT_DB();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
