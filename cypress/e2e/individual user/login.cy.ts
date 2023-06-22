const logUsername="newuser6"
const logPhoneNumber="01060666666"
const logPassword = "123456"

describe('Login', () => {
  it('Enter username and password', () => {
    cy.visit('/');
    cy.contains('login / Signup').click();
    cy.get("[name='username']").focus().type(logUsername);
    cy.get("[name='password']").type('123456');
    cy.get('button').contains('Login').click();
  });
});
