function desconto(){
    var preco = document.getElementById("preco").value 
    var desconto = preco/5
    var novopreco = preco - desconto

    document.getElementById("r").innerHTML = ("O novo preço do produto sera: " , novopreco)
}
