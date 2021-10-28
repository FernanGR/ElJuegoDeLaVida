/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')


describe('Funcionalidad ', ()=>{

    let tiempo = 1500;
    before(() => {
        cy.visit('http://localhost:4200/');
        cy.title().should('eq','ElJuegoDeLaVida')
        cy.wait(tiempo)
       
    })
    
    it('click boton crear x 2', ()=>{    //click btn crear tabla
        cy.get('#btnNew').should('be.visible').click({force:true})
        cy.wait(tiempo)
        cy.get('#btnNew').should('be.visible').click({force:true})
        cy.wait(tiempo)
    })


    
    it('prueba botones otra tabla', ()=>{ //chequeo condicion 23/3 muerte-one step
        cy.log("Pruebo pulsar dos veces oneStep")        
        cy.get(':nth-child(4) > app-tabla > #container > #buttons > .btnOneStep').should('be.visible').click({force:true})     // click boton onestep
        cy.wait(tiempo)
        cy.get(':nth-child(4) > app-tabla > #container > #buttons > .btnOneStep').should('be.visible').click({force:true})     // click boton onestep
        cy.wait(tiempo)

        cy.get(':nth-child(4) > app-tabla > #container > #buttons > .btnDead').should('be.visible').click({force:true})     // click boton muerte
        cy.wait(tiempo)
        cy.get(':nth-child(4) > app-tabla > #container > #table > :nth-child(7) > :nth-child(8)').click({force:true}) // puslo 3 celdas
        cy.get(':nth-child(4) > app-tabla > #container > #table > :nth-child(8) > :nth-child(8)').click({force:true}) // puslo 3 celdas
        cy.get(':nth-child(4) > app-tabla > #container > #table > :nth-child(9) > :nth-child(8)').click({force:true}) // puslo 3 celdas
        
        
        cy.get(':nth-child(4) > app-tabla > #container > #buttons > .btnPlay').should('be.visible').click({force:true}) //click play
        cy.wait(5000)
        cy.get(':nth-child(4) > app-tabla > #container > #buttons > .btnStop').should('be.visible').click({force:true}) //click stop
        cy.wait(tiempo)
        cy.get(':nth-child(4) > app-tabla > #container > #buttons > .btnCeldas').should('be.visible').click({force:true}) //click celdas
        cy.wait(tiempo)
        for(let i = 0; i<5; i++){
            cy.get(':nth-child(4) > app-tabla > #container > #buttons > .btnOneStep').should('be.visible').click({force:true})  //5 veces oneStep para ver funcionamiento
            cy.wait(tiempo)
        }

    })



})