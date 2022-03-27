const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacaogc = '';

        if (valorIMC < 18.5){
            classificacaogc = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacaogc = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacaogc = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacaogc = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacaogc = 'com obesidade grau II';
        }else {
            classificacaogc = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacaogc}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', gc);

function imc () {
    const nome = document.getElementById('imcgc').value;
    const idadegc = document.getElementById('idadegc').value;
    const altura = document.getElementById('sexo').value;
    const resultado = document.getElementById('resultadogc');

    if (imcgc !== '' && idadegc !== '' && sexo == fem) {

        const valorgc (1,20 * imcgc) + (0,23 * idadegc) – (10,8 * 0) – 5.4
    }else if (imcgc !== '' && idadegc !== '' && sexo == masc)
        const valorgc (1,20 * imcgc) + (0,23 * idadegc) – (10,8 * 0) – 5.4

        let classificacaogc = '';

        if (idadegc >= 20 && <= 29 && valorgc < 10,7 && sexo == fem){
            classificacaogc = 'Muito magra.';
        }else if (idadegc >= 20 && <= 29 && valorgc <= 10,8 || <= 17 && sexo == fem){
                classificacaogc = 'Magra.';

                }else if (idadegc >= 20 && <= 29 && valorgc <= 17,1 || <= 20,5 && sexo == fem){
                    classificacaogc = 'muito bom.';

            }else if (idadegc >= 20 && <= 29 && valorgc <= 20,6 || <= 23,8 && sexo == fem){
                classificacaogc = 'saudável.';

        }else if (idadegc >= 20 && <= 29 && valorgc <= 23,9 || <= 27,6 && sexo == fem){
            classificacaogc = 'sobrepeso.';

    }else if (idadegc >= 20 && <= 29 && valorgc <= 27,7 || <= 35,5 && sexo == fem){
        classificacaogc = 'gordo.';

}else if (idadegc >= 20 && <= 29 && valorgc >= 35,6 && sexo == fem){
    classificacaogc = 'Muito gorda.';

    if (idadegc >= 30 && <= 39 && valorgc < 13,3 && sexo == fem){
        classificacaogc = 'Muito magra.';
    }else if (idadegc >= 30 && <= 39 && valorgc <= 13,4 || <= 18 && sexo == fem){
            classificacaogc = 'Magra.';

            }else if (idadegc >= 30 && <= 39 && valorgc <= 18,1 || <= 21,8 && sexo == fem){
                classificacaogc = 'muito bom.';

        }else if (idadegc >= 30 && <= 39 && valorgc <= 21,9 || <= 24,8 && sexo == fem){
            classificacaogc = 'saudável.';

    }else if (idadegc >= 30 && <= 39 && valorgc <= 24,9 || <= 30 && sexo == fem){
        classificacaogc = 'sobrepeso.';

}else if (idadegc >= 30 && <= 39 && valorgc <= 30,1 || <= 35,8 && sexo == fem){
    classificacaogc = 'gordo.';

}else if (idadegc >= 30 && <= 39 && valorgc >= 35,9 && sexo == fem){
classificacaogc = 'Muito gorda.';

if (idadegc >= 40 && <= 49 && valorgc < 16,1 && sexo == fem){
    classificacaogc = 'Muito magra.';
}else if (idadegc >= 16,2 && <= 29 && valorgc <= 21,4 || <= 17 && sexo == fem){
        classificacaogc = 'Magra.';

        }else if (idadegc >= 40 && <= 49 && valorgc <= 25,1 || <= 20,5 && sexo == fem){
            classificacaogc = 'muito bom.';

    }else if (idadegc >= 40 && <= 29 && valorgc <= 25,2 || <= 28,3 && sexo == fem){
        classificacaogc = 'saudável.';

}else if (idadegc >= 40 && <= 29 && valorgc <= 28,4 || <= 32,1 && sexo == fem){
    classificacaogc = 'sobrepeso.';

}else if (idadegc >= 40 && <= 29 && valorgc <= 32,2 || <= 37,7 && sexo == fem){
classificacaogc = 'gordo.';

}else if (idadegc >= 40 && <= 29 && valorgc >= 37,8 && sexo == fem){
classificacaogc = 'Muito gorda.';

if (idadegc >= 50 && <= 59 && valorgc < 18,8 && sexo == fem){
    classificacaogc = 'Muito magra.';
}else if (idadegc >= 20 && <= 29 && valorgc <= 18,9 || <= 25,1 && sexo == fem){
        classificacaogc = 'Magra.';

        }else if (idadegc >= 50 && <= 59 && valorgc <= 25,2 || <= 28,6 && sexo == fem){
            classificacaogc = 'muito bom.';

    }else if (idadegc >= 50 && <= 59 && valorgc <= 28,7 || <= 32,5 && sexo == fem){
        classificacaogc = 'saudável.';

}else if (idadegc >= 50 && <= 59 && valorgc <= 32,6 || <= 35,6 && sexo == fem){
    classificacaogc = 'sobrepeso.';

}else if (idadegc >= 50 && <= 59 && valorgc <= 35,7 || <= 39,6 && sexo == fem){
classificacaogc = 'gordo.';

}else if (idadegc >= 50 && <= 59 && valorgc >= 39,7 && sexo == fem){
classificacaogc = 'Muito gorda.';

if (idadegc >= 60 && valorgc < 19,1 && sexo == fem){
    classificacaogc = 'Muito magra.';
}else if (idadegc >= 60 && <= 19,2 && valorgc <= 25 || <= 17 && sexo == fem){
        classificacaogc = 'Magra.';

        }else if (idadegc >= 60 && valorgc <= 25,1 || <= 29,5 && sexo == fem){
            classificacaogc = 'muito bom.';

    }else if (idadegc >= 60 && valorgc <= 29,6 || <= 32,8 && sexo == fem){
        classificacaogc = 'saudável.';

}else if (idadegc >= 60 && valorgc <= 32,9 || <= 36,7 && sexo == fem){
    classificacaogc = 'sobrepeso.';

}else if (idadegc >= 60 && valorgc <= 36,8 || <= 40,5 && sexo == fem){
classificacaogc = 'gordo.';

}else if (idadegc >= 60 && valorgc >= 40,5 && sexo == fem){
classificacaogc = 'Muito gorda.';

if (idadegc >= 20 && <= 29 && valorgc < 5,2 && sexo == masc){
    classificacaogc = 'Muito magra.';
}else if (idadegc >= 20 && <= 29 && valorgc <= 5,3 || <= 9,3 && sexo == masc){
        classificacaogc = 'Magro.';

        }else if (idadegc >= 20 && <= 29 && valorgc <= 9,4 || <= 14,01 && sexo == masc){
            classificacaogc = 'muito bom.';

    }else if (idadegc >= 20 && <= 29 && valorgc <= 14,02 || <= 17,5 && sexo == masc){
        classificacaogc = 'saudável.';

}else if (idadegc >= 20 && <= 29 && valorgc <= 17,6 || <= 22,4 && sexo == masc){
    classificacaogc = 'sobrepeso.';

}else if (idadegc >= 20 && <= 29 && valorgc <= 22,5 || <= 29,2 && sexo == masc){
classificacaogc = 'gordo.';

}else if (idadegc >= 20 && <= 29 && valorgc >= 29,3 && sexo == masc){
classificacaogc = 'muito gordo.';

if (idadegc >= 30 && <= 39 && valorgc < 9,2 && sexo == masc){
classificacaogc = 'Muito magro.';
}else if (idadegc >= 30 && <= 39 && valorgc <= 9,3 || <= 14 && sexo == masc){
    classificacaogc = 'Magro.';

    }else if (idadegc >= 30 && <= 39 && valorgc <= 14,1 || <= 17,5 && sexo == masc){
        classificacaogc = 'muito bom.';

}else if (idadegc >= 30 && <= 39 && valorgc <= 17,6 || <= 20,6 && sexo == masc){
    classificacaogc = 'saudável.';

}else if (idadegc >= 30 && <= 39 && valorgc <= 20,7 || <= 24,2 && sexo == masc){
classificacaogc = 'sobrepeso.';

}else if (idadegc >= 30 && <= 39 && valorgc <= 24,3 || <= 30 && sexo == masc){
classificacaogc = 'gordo.';

}else if (idadegc >= 30 && <= 39 && valorgc >= 30,1 && sexo == masc){
classificacaogc = 'muito gordo.';


if (idadegc >= 40 && <= 49 && valorgc < 11,5 && sexo == masc){
classificacaogc = 'Muito magro.';
}else if (idadegc >= 40 && <= 49 && valorgc <= 11,6 || <= 16,3 && sexo == masc){
classificacaogc = 'Magro.';

}else if (idadegc >= 40 && <= 49 && valorgc <= 16,4 || <= 19,6 && sexo == masc){
    classificacaogc = 'muito bom.';

}else if (idadegc >= 40 && <= 49 && valorgc <= 19,7 || <= 22,5 && sexo == masc){
classificacaogc = 'saudável.';

}else if (idadegc >= 40 && <= 49 && valorgc <= 22,6 || <= 26,2 && sexo == masc){
classificacaogc = 'sobrepeso.';

}else if (idadegc >= 40 && <= 49 && valorgc <= 26,3 || <= 31,4 && sexo == masc){
classificacaogc = 'gordo.';

}else if (idadegc >= 40 && <= 49 && valorgc >= 31,5 && sexo == masc){
classificacaogc = 'muito gordo.';


if (idadegc >= 50 && <= 59 && valorgc < 12,9 && sexo == masc){
classificacaogc = 'Muito magro.';
}else if (idadegc >= 20 && <= 29 && valorgc <= 13 || <= 18,1 && sexo == masc){
classificacaogc = 'Magro.';

}else if (idadegc >= 50 && <= 59 && valorgc <= 18,2 || <= 21,2 && sexo == masc){
    classificacaogc = 'muito bom.';

}else if (idadegc >= 50 && <= 59 && valorgc <= 21,3 || <= 24,2 && sexo == masc){
classificacaogc = 'saudável.';

}else if (idadegc >= 50 && <= 59 && valorgc <= 24,3 || <= 27,6 && sexo == masc){
classificacaogc = 'sobrepeso.';

}else if (idadegc >= 50 && <= 59 && valorgc <= 27,7 || <= 32,4 && sexo == masc){
classificacaogc = 'gordo.';

}else if (idadegc >= 50 && <= 59 && valorgc >= 32,5 && sexo == masc){
classificacaogc = 'muito gordo.';



if (idadegc >= 60 && valorgc < 13 && sexo == fem){
classificacaogc = 'Muito magro.';
}else if (idadegc >= 60 && <= 19,2 && valorgc <= 13,1 || <= 18,5 && sexo == masc){
classificacaogc = 'Magro.';

}else if (idadegc >= 60 && valorgc <= 18,6 || <= 22 && sexo == masc){
    classificacaogc = 'muito bom.';

}else if (idadegc >= 60 && valorgc <= 22,1 || <= 25 && sexo == masc){
classificacaogc = 'saudável.';

}else if (idadegc >= 60 && valorgc <= 25,1 || <= 28,4 && sexo == masc){
classificacaogc = 'sobrepeso.';

}else if (idadegc >= 60 && valorgc <= 28,5 || <= 33,5 && sexo == masc){
classificacaogc = 'gordo.';

}else if (idadegc >= 60 && valorgc >= 33,6 && sexo == masc){
classificacaogc = 'muito gordo.';






















        resultado.textContent = `Sua gordura corporal é ${valorgc} e você está ${classificacaogc}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);