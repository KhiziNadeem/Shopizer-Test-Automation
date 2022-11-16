var supertest = require("supertest");
const request = supertest("http://localhost:8080/");

var id = 1;

describe("Category Tests", () => {
  it("Get category by Id", async () => {
    const response = await request.get(`api/v1/category/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(id);
    console.log(
      `Category of element with id ${id} is `,
      response.body.description.name
    );
  });
});

describe("Product Tests", () => {
  it("Get Product List", async () => {
    const response = await request.get("api/v1/products");
    expect(response.status).toBe(200);
    console.log("Number of products are ", response.body.number);
    console.log(response.body);
  });

  it("Get Product Price with Id", async () => {
    const res = await request.get(`api/v1/products/${id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(id);
    console.log(`Price of Product with id ${id} is `, res.body.price);
  });
});
