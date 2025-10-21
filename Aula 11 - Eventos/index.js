function CarCont(){
    document.getElementById("conteudo").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error tempora ipsum, excepturi cupiditate eius consequatur! Aspernatur illum, doloribus distinctio delectus quis quas unde maxime repellat exercitationem maiores! Culpa neque animi ut eligendi itaque sint";
}

function mouseOver(){
    document.getElementById("mouseAlt") .innerHTML="Retire o mouse";

}
function mouseOut(){
    document.getElementById("mouseAlt") .innerHTML="Passe o mouse";

}
function convTexto(){
    var nome = document.getElementById("nome");
    nome.value = nome.value.toUpperCase();
}
function validarSenha(){
    document.getElementById("senha").value;
    if(senha == "" || senha.length <= 5){
        document.getElementById("erroSenha").innerHTML = 
        "Preencha o campo senha com mínimo de 6 dígitos.";
    }
}