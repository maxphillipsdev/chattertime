describe("Test Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Has a title", () => {
    cy.get("h1").contains("Welcome to Chatterti.me");
  });
});

const exports = {};
export default exports;
