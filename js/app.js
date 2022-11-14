
const ingresos = [
 new Ingreso ('Salario',3000.00),
 new Ingreso ('Venta Software',1200)
 
];


const egresos = [
    new Egreso ('Renta Departamento', 900),
    new Egreso ('Viajes',1000)
]

let LoadAPP =()=>{
    console.log("cargando app");
    cargarCabecero();
    cargarIngresos();
    crearEgresos();
}

let totalIngresos = () =>{

    let totalIngresos = 0;

    for(let ingreso of ingresos){

        totalIngresos += ingreso.valor;
    }

    return totalIngresos;
}

let totalEgresos = () => {

    let totalEgresos = 0;

    for (let egreso of egresos){
        totalEgresos += egreso.valor;
    }

    return totalEgresos;
}



let cargarCabecero = ()=>{
    console.log("cargando cabecero");

    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgresos = totalEgresos() / totalIngresos ();

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgresos);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos()) ;


}


const formatoMoneda = (valor) =>{

  return  valor.toLocaleString('en-US',{style:'currency', currency:'USD',minimumFractionDigits:2});

}

const formatoPorcentaje = (valor)=>{

      return  valor.toLocaleString('en-US',{style:'percent' , minimumFractionDigits:2});
}



const cargarIngresos = ()=>{
     let ingresosHTML = '';

     for (let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
     }

     document.getElementById('lista-ingresos').innerHTML = ingresosHTML;


}

const crearIngresoHTML = (ingreso)=>{

    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos"> 
        <div class="elemento_valor"> + ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">

            <button class="elemento_eliminar--btn">
                <ion-icon name="trash-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>




    `

    return ingresoHTML;
}


const cargarEgresos = ()=>{

    let egresosHTML = '';

    for (egreso of egresos){
        egresosHTML+= crearEgresoHTML(egreso);
    }

    document.getElementById('lista-egresos').innerHTML = egresosHTML;

}


const crearEgresoHTML = (egreso)=>{
    let egresosHTML = `

    <div class="elemento limpiarEstilos">

    <div class="elemento_descripcion">${egreso.descripcion}</div>

    <div class="derecha limpiarEstilos">
            <div class="elemento_valor"> ${formatoMoneda(egreso.valor)} </div>
            <div class="elemento_porcentaje"> ${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
            <div class="elemento_eliminar">

                <button class="elemento_eliminar--btn">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </div>
    </div>
    
    `;

    return egresosHTML;
}