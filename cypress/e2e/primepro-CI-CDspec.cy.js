describe('RelatórioDeGastos', () => {
  beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app/#')
    cy.get('#data-table tbody tr').should('have.length', 0) 
  });
  afterEach(() => {
    cy.get('#data-table tbody tr').should('have.length', 2)
    
  });

  it('Cadastrando entradas', () => {
    cy.get('#transaction > .button').click()
    cy.get('#description').type('Salario')
    cy.get('#amount').type('500')
    cy.get('#date').type('2020-04-29')
    cy.get('button').click()
    cy.get('#transaction > .button').click()
    cy.get('#description').type('Mesada')
    cy.get('#amount').type('5000')
    cy.get('#date').type('2020-04-30')
    cy.get('button').click()

  })
  it('Cadastrando Saídas', () => {
    
    cy.get('#transaction > .button').click()
    cy.get('#description').type('Conta')
    cy.get('#amount').type('-96')
    cy.get('#date').type('2020-05-01')
    cy.get('button').click()
    cy.get('#transaction > .button').click()
    cy.get('#description').type('Despesa')
    cy.get('#amount').type('-2000')
    cy.get('#date').type('2020-05-06')
    cy.get('button').click()
    
  });
})