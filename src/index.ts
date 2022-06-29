import { createServer } from "./server";

const port = 3000;

const app = createServer();
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on the port ${port}`);    
})