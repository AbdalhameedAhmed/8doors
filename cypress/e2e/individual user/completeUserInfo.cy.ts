import { delay } from "@reduxjs/toolkit/dist/utils";

const infoUsername = 'newuser3';
const infoPhoneNumber = '01060666666';
const infoPassword = '123456';

const firstName = 'test';
const lastName = 'test1';
const dateOfBirth = '2020-07-22';

describe('Complete user Informations', () => {
  it('user Info', () => {
    cy.visit('/');
    cy.contains('login / Signup').click();
    cy.get("[name='username']").focus().type(infoUsername);
    cy.get("[name='password']").type(infoPassword);
    cy.get('button').contains('Login').click();
    cy.get('a').contains('You have to complete your profile data').click();

    cy.get("[name='firstName']").clear().type(firstName);
    cy.get("[name='lastName']").clear().type(lastName);
    cy.get("[name='dateOfBirth']").clear().type(dateOfBirth);

    cy.get("[name='bloodGroupId']").click();
    cy.get('li').contains('O+').click();

    cy.get("[name='countryId']").click();
    cy.get('li').contains('Egypt',{timeout:3000}).click();

    
    cy.get("[name='stateId']",{timeout:3000}).click();

    // cy.get('li').contains('Cairo').click();
  });
});
