import { delay } from '@reduxjs/toolkit/dist/utils';

const infoUsername = 'newuser13';
const infoPassword = 'asdfgh';
const gender = 'Female';
const firstName = 'test';
const lastName = 'test1';
const dateOfBirth = '2020-07-22';
const address = 'anyaddress';
const nationalId = '30104012301234';

describe('Complete user Informations', () => {
  it('user Info', () => {
    cy.visit('/');
    cy.contains('login / Signup').click();
    cy.get("[name='username']").focus().type(infoUsername);
    cy.get("[name='password']").type(infoPassword);
    cy.get('button').contains('Login').click();
    cy.getCookie('token').should('have.property', 'value');
    cy.get('a').contains('You have to complete your profile data').click();

    cy.get("[name='firstName']").clear().type(firstName);
    cy.get("[name='lastName']").clear().type(lastName);
    cy.get(`span`).contains(gender).click();
    cy.get("[name='dateOfBirth']").clear().type(dateOfBirth);

    
    cy.get("[name='countryId']").click();
    cy.get('li').contains('Egypt').click();
    
    cy.wait(500);
    
    cy.get("[name='stateId']").click();
    cy.get('li').contains('Cairo').click();
    
    cy.wait(500);
    
    cy.get("[name='cityId']").click();
    cy.get('li').contains('Azbakeya').click();
    
    cy.get("[name='address']").clear().type(address);
    
    cy.get("[name='bloodGroupId']").click();
    cy.get('li').contains('O+').click();
    
    cy.get("[name='nationalId']").clear().type(nationalId);
    cy.get('button').contains('Save Changes').click();
    // Azbakeya
  });
});
