const supertest = require("supertest");
const app = require("../app");
const models = require("../models");
const request = supertest(app);

function soma(a, b) {
  return a + b;
}

describe("GET /", () => {
  beforeAll(async () => {
    await request.post("/").send({
      title: "Algum teste",
      description: "Alguma descricao",
      isDone: false,
    });
  });
  afterAll(async () => {
    await models.sequelize.close();
  });
  it("should return status 200", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.body.error).toBeUndefined();
  });
  it("should return ToDos", async () => {
    const response = await request.get("/");
    expect(response.body.length).toBeGreaterThan(0);
  });
});
