import express from "express";

export default class Server {
    protected app = express();

    public async start() {
        this.app.all("*", (request, response, next) => {
            response.json({ Hello: "World" });
        });
        return await this.app.listen(3000);
    }
}
