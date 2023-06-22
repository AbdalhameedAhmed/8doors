describe('normal user', () => {
  it('login', () => {
    cy.visit('/')
    cy.contains("login / Signup").click()
    cy.get("[name='username']").focus().type("Youssef@yaho")
    cy.get("[name='password']").type("123456")
    cy.get("button").contains("Login").click()
    cy.get("[name='username']").focus().clear().type("Youssef@yahoo")
    cy.get("button").contains("Login").click()


  })
})