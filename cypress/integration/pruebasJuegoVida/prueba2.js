/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import { filter } from 'bluebird';
import 'cypress-file-upload';
import { find, first, last } from 'lodash';
require('@4tw/cypress-drag-drop')


describe('Funcionalidad ', ()=>{

    let tiempo = 1500;
    before(() => {
        cy.visit('http://localhost:4200/');
        cy.title().should('eq','ElJuegoDeLaVida')
        cy.wait(tiempo)
       
    })
    
    it('click boton crear', ()=>{    //click btn crear tabla
        cy.get('#btnNew').should('be.visible').click({force:true})
        cy.wait(tiempo)
    })

    it('play stop enables', ()=>{ //chequeo botones play y stop habilitados

        cy.get('#btnStop').should("have.attr","disabled","disabled") //checkeo btn stop disabled
        cy.wait(tiempo)
        cy.get('#btnPlay').should('be.visible').click({force:true})
        cy.get('#btnPlay').should("have.attr","disabled","disabled") // btn play disabled
        cy.wait(3000)
    
        cy.get('#btnStop').should('be.visible').click({force:true})
        cy.wait(tiempo)
        cy.get('#btnStop').should("have.attr","disabled","disabled") // btn stop disabled de nuevo
        cy.wait(tiempo)

    })
    
    it('prueba condicion 23/3', ()=>{ //chequeo condicion 23/3 muerte-one step
        
        cy.get('#btnDead').should('be.visible').click({force:true})     // click boton muerte
        cy.wait(tiempo)
        cy.get(':nth-child(5) > :nth-child(7)').should('be.visible').click({force:true}) // puslo 3 celdas
        cy.get(':nth-child(5) > :nth-child(8)').should('be.visible').click({force:true})
        cy.get(':nth-child(5) > :nth-child(9)').should('be.visible').click({force:true})
        
        cy.get('#btnPlay').should('be.visible').click({force:true}) //click play
        cy.wait(5000)
        cy.get('#btnStop').should('be.visible').click({force:true}) //click stop
        cy.wait(tiempo)
        for(let i = 0; i<5; i++){
            cy.get('#btnOneStep').should('be.visible').click({force:true})  //5 veces oneStep para ver funcionamiento
            cy.wait(tiempo)
        }

    })



})