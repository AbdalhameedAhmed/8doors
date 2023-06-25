const username = 'newuser13';
const password = 'asdfgh';
const newphone = '01060662028';

describe('change Phone Number', () => {
  it('change phone number', () => {
    cy.visit('/');
    cy.contains('login / Signup').click();
    cy.get("[name='username']").focus().type(username);
    cy.get("[name='password']").type(password);
    cy.get('button').contains('Login').click();
    cy.getCookie('token').should('have.property', 'value');
    cy.get('a').contains('You have to complete your profile data').click();
    cy.get("[name='mobile'] + span").click();
    cy.get("[name='newPhoneNum']").type(newphone);
    cy.get("[name='password']").type(password);
    cy.get('button').contains('Save Changes').click();
    cy.wait(600);
    cy.get("[name='otp1']").type(newphone[7]);
    cy.get("[name='otp2']").type(newphone[8]);
    cy.get("[name='otp3']").type(newphone[9]);
    cy.get("[name='otp4']").type(newphone[10]);
    cy.get('button').contains('Continue').click();

    cy.get('button').contains('Logout').click();

    cy.get("[name='username']").focus().type(username);
    cy.get("[name='password']").type(password);
    cy.get('button').contains('Login').click();
    cy.getCookie('token').should('have.property', 'value');
    cy.get('a').contains('You have to complete your profile data').click();
  });
});
