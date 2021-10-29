/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
import { Table } from '../../models/tabla';
import { clonTable, comparaTable } from '../../funciones/funciones'
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
        let tablaFinal;
        let tabla1 = []
        cy.get('#inputReglas').should('be.visible').then((el)=>{
            condicion = el.val();
            // console.log(el.val());

            //tabla inicial //
            let tabla0 = []
            cy.wait(tiempo);
            tabla0 = clonTable();
            // console.log(tabla0);
            let tabla = new Table(tabla0);
            
            setTimeout(() => {
                // console.log(tabla)
                tabla.oneStepServ(condicion).then(() =>{
                    // console.log("ttt");
                    // console.log(tabla);
                    tablaFinal = tabla;
                    // cy.wait(3000)
                    cy.wait(tiempo)
                    tabla1 = clonTable();
                    console.log("tabla1 CAMBIADA")
                    console.log(tabla1)
                    // if(comparaTable(tabla1,tablaFinal.tab)
                    console.log("tablafinal")
                    console.log(tablaFinal)
                    console.log(comparaTable(tabla1,tablaFinal.tab))
                })
            });
            cy.get('.btnOneStep').should('be.visible').click({force:true})
            
            cy.get('argumento').should('be.visible').click({force:true})
            cy.wait(tiempo)
            cy.get('argumento').should('be.visible').type('texto')
            cy.wait(tiempo)
        })
        // console.log(comparaTable(tabla1,tablaFinal.tab))
        

    })
})

 