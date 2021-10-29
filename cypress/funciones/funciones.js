export function clonTable() {

    let tabla0 = []
    cy.get('#table').should('be.visible').children().each((fila)=>{
        
        let colums = fila.children();
        let filaTab = [];
        for(let i = 0; i<colums.length;i++){
            // console.log(colums[i])
            let datos = colums[i].getAttribute("ng-reflect-datos");
            // console.log(datos)
            filaTab.push(parseInt(datos));
        }
        tabla0.push(filaTab);

    })
    return tabla0;

}

export function comparaTable(tabla1, tabla2){
    let filas = tabla1.length;
    let columnas = filas.length;
    let iguales;
    for(let i = 0; i<filas;i++){
        for(let j = 0; j<columnas; j++){
            iguales = (tabla1[i][j] === tabla2[i][j]);
        }
    }
    return iguales;
}

