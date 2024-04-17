var idade = 24;
if (idade < 18) {
  console.log(`Nao vota`)
}else{
    if( idade <18 ){
        console.log('Voto opcional')
    }else{
        if (idade <=65){
            console.log('Tem que votar');
        }
    else{
        if(idade >=65){
            console.log('voto opcional');
        }
    }
    }
}


var age = 5
if (age <=18){
    console.log(`You are underage`);
}else if(age >=18 && age <= 65 ){
    console.log(`You are a adult`);
}else if(age >= 66 ){
    console.log(`Vou are eldery `);
}