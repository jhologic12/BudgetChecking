
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