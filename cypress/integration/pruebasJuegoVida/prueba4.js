/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
import { Table } from '../../models/tabla';
import { clonTable } from '../../funciones/funciones'
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

    it('Prueba condiciones', ()=>{
        let condicion = "";
        cy.get('#inputReglas').should('be.visible').then((el)=>{
            condicion = el.val();
            // console.log(el.val());
            //tabla inicial //
            let tabla0 = []
            
            cy.wait(tiempo);
            tabla0 = clonTable();
            // console.log(tabla0);
            let tabla = new Table(tabla0);
            tabla.tab = tabla.oneStepServ(condicion);
            // console.log(tabla);
            
        })
        
        cy.wait(3000)
        // cy.get('.btnOneStep').should('be.visible').click({force:true})
        // cy.wait(tiempo)


    })
})