
const regUsername = 'newuser3';
const email = 'anyEmail3@gmail';
const phoneNumber = '01060663333';

describe('register', () => {
  it('register', () => {
    cy.visit('/');
    cy.contains('login / Signup').click();
    cy.get("[href='/register']").click();
    cy.get("[name='username']").type(regUsername);
    cy.get("[name='email']").type(email);
    cy.get("[name='phoneNumber']").type(phoneNumber);
    cy.get("[name='password']").type('123456');
    cy.get("[name='confirm']").type('123456');
    cy.get("button").contains("Submit").click()
    cy.get("[name='otp1']").type(phoneNumber[7])
    cy.get("[name='otp2']").type(phoneNumber[8])
    cy.get("[name='otp3']").type(phoneNumber[9])
    cy.get("[name='otp4']").type(phoneNumber[10])
    cy.get("button").contains("Continue").click()
  });
});
