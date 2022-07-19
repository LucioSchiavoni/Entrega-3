class Usuario{
    constructor(nombre, email, constraseña, capital, porcentaje, apalancamiento){
        this.nombre = nombre
        this.email = email
        this.constraseña = constraseña
        this.capital = capital
        this.apalancamiento = apalancamiento
        this.porcentaje = porcentaje
    }
    operacion(){
        let operacion = parseFloat((this.porcentaje*this.apalancamiento)*this.capital)/100
        alert(`Su ganancia es de ${operacion} USD`)
    }
    
}
    
    
    
    const usuarios = []
    
    const form = document.getElementById("idForm")
    
    form.addEventListener("submit", (event) => {
    event.preventDefault()
    let nombre = document.getElementById("idNombre").value
    let email= document.getElementById("idEmail").value
    let constraseña = document.getElementById("idContraseña").value
    let capital =  document.getElementById("idCapital").value
    let porcentaje = document.getElementById("idPorcentaje").value
    let apalancamiento = document.getElementById("idApalancamiento").value
    
    const usuario = new Usuario(nombre, email, constraseña, capital,porcentaje, apalancamiento)
    usuarios.push(usuario)
    console.log(usuarios)
    
    usuario.operacion();
    
    })
    
    
    

