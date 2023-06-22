const verUsername = "newuser6"
const verPassword = "123456"
const verPhone = "01060666666"



describe('phone verification', () => {
  it('verify your phone', () => {
    cy.visit('/');
    cy.contains('login / Signup').click();
      cy.get("[name='username']").focus().type(verUsername);
      cy.get("[name='password']").type(verPassword);
      cy.get('button').contains('Login').click();
      cy.get("[name='otp1']").type(verPhone[7]);
      cy.get("[name='otp2']").type(verPhone[8]);
      cy.get("[name='otp3']").type(verPhone[9]);
      cy.get("[name='otp4']").type(verPhone[10]);
      cy.get('button').contains('Continue').click();
  });
});
