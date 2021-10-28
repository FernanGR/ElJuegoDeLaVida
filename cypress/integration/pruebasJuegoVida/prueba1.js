/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import { filter } from 'bluebird';
import 'cypress-file-upload';
import { find, first, last } from 'lodash';
require('@4tw/cypress-drag-drop')


describe('Pruebas Juego de la vida', ()=>{

    let tiempo = 1500;
    before(() => {  //checkeo inicial del titulo de la página
        cy.visit('http://localhost:4200/');
        cy.title().should('eq','ElJuegoDeLaVida') //equivalente al title
        cy.wait(tiempo)
        console.log("El juego de la vida/titulo")
    })
    it('texto boton crear', ()=>{ //chequea texto de los botones es correcto (a la vez de que existen tales botones)
        cy.get('#btnNew').should('be.visible').should("have.text","Crear Nueva Tabla")
        cy.wait(tiempo)
    })

    it('texto boton eliminar', ()=>{ //chequeo texto del boton eliminar
        cy.get('#btnDelete').should('be.visible').should("have.text","Eliminar Tabla")
        cy.wait(tiempo)
    })

    it('click boton crear', ()=>{   
        cy.get('#btnNew').should('be.visible').click({force:true})
        cy.wait(tiempo)
    })
    
    it('checkeo input condiciones', ()=>{ //checkea el input, limpia contenido y escribe otro
        cy.get('#inputReglas').should('be.visible').clear().type('23/36') 
        cy.wait(tiempo)
    })

    // Testeo de botones si solo hubiera una clase.
    it('texto boton OneStep', ()=>{ //chequeo texto del boton One Step
        cy.get('.btnOneStep').should('be.visible').should("have.text","One Step")
        cy.wait(tiempo)
    })

    
    it('texto boton Play', ()=>{ //chequeo texto del boton play
        cy.get('.btnPlay').should('be.visible').should("have.text","Play")
        cy.wait(tiempo)
    })

    
    it('texto boton Stop', ()=>{ //chequeo texto del boton stop
        cy.get('.btnStop').should('be.visible').should("have.text","Stop")
        cy.wait(tiempo)
    })

    
    it('texto boton Muerte', ()=>{ //chequeo texto del boton muerte
        cy.get('.btnDead').should('be.visible').should("have.text","Muerte")
        cy.wait(tiempo)
    })

    
    it('texto boton Celdas', ()=>{ //chequeo texto del boton celdas
        cy.get('.btnCeldas').should('be.visible').should("have.text","Celdas")
        cy.wait(tiempo)
    })
 
})