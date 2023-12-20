Cypress.Commands.add('login', (email, password) => {
    //cy.wait(10000) - wait estático
    cy.visit('/#')
    cy.get('#email').should('be.visible').type(email)
    cy.get('#senha').type(password, { log: false })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('registro', (nome, email, password) => {
    cy.visit('/#')
    cy.get('#bs-example-navbar-collapse-1 > ul > li:nth-child(2) > a').click() 
    cy.get('#email').should('be.visible').type(email)
    cy.get('#nome').should('be.visible').type(nome)
    cy.get('#senha').type(password, { log: false })
    cy.contains('input', 'Cadastrar').click()
})