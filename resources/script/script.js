let users = ["Pedro","Ana","Joana","Diego","Davi Messias","Cristiano","Pedro Renan","Pedro Rocha","Poliana"];

let searchUser = prompt("Digite o nome do usuario que deseja buscar: ");

// Lembrando que, meu usuario adm não pode mandar em branco a busca. Chamamos isso de tratativa de erros. 

if(searchUser === ""){
    console.log("Não pode enviar em branco");
}
else{
    // Retorna o usuário que for encontrado 
    let user = users.filter(user =>
        user.toLowerCase().includes(searchUser.toLowerCase().trim())
    );
    // Devemos tratar também caso a busca não retorne nenhum resultado 

    if(user === undefined){
        I// Usuário não encontrado 
        console.log("User not found");
        users.push(searchUser);
        console.log(users)
        
    }
    else{
        console.log("Usuário encontrado: ".concat(user));
        // buscar índice do usuário 
        let index = users.indexOf(user);
        // alterar o elemento 
       // users[index] = "novo valor"; 

        users.forEach(user => {
            //read
        console.log(element)
        users[index] = "novo valor";
        console.log(users)
       });
    
    //sers.splice(3,1)
     //console.log(users)    


    }
}