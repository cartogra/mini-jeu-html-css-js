const genererNombreAleatoire=()=> {
    //generer un nombre entre 1 et 100
    const nombreDecimal= Math.random()*100+1
    const nombre= Math.trunc (nombreDecimal)
    //retourner un nombre
    return nombre
}

let numeroTentative = 1
let nombreBas = 1
let nombreHaut = 100
const nombreATrouver= genererNombreAleatoire()

console.log (nombreATrouver)

const ajouterTextAuContainer=text=>{
const divText= document.createElement('div')
divText.textContent= text
    const container= document.getElementById ('container')
    container.insertBefore(divText,container.firstChild)
}

const proposerNombre=()=> {

    //recuperer le champs text avce le nombre
    const input= document.getElementById('input-nombre')

    //recuperer la valeur du champs
const valeur= input.value

if(valeur === ''){
    return
}
    // transformer la valeur text en nombre
const nombrePoposer= parseInt(valeur, 10)

ajouterTextAuContainer('tentavive'+ numeroTentative)

const divproposition= document.createElement ('div')
divproposition.textContent='tentavive'+ numeroTentative


const container= document.getElementById ('container')
    container.insertBefore(divproposition,container.firstChild)

    
    //comparer le nombre avec le nombre atrouver
    //le nombre est egal au nombre a trouver
    if (nombrePoposer===nombreATrouver){
        //la partie est finie
         //afficher bravo
         console.log('bravo')

         ajouterTextAuContainer('bravo👍')

        const elementCentre= document.getElementById('centre')
        elementCentre.textContent=nombrePoposer+ '👍👍'
          //finir
    }else{
        //le nombre est pas faux
         //si le nombre est plus grand
         if (nombreATrouver > nombrePoposer){
         //afficher plus grand
            console.log('le nombre est plus grand')

            
            ajouterTextAuContainer('est plus🤩')

            //si le nombre est superieur au plus bas deja trouver
            if (nombreATrouver > nombreBas){
                const elementBas= document.getElementById('bas')
                elementBas.textContent= nombrePoposer+'🗾'
                nombreBas=nombrePoposer

            }

            
         }else{
         //si le nombre est plus petit 
        //affficher plus petit
        console.log('le nombre est petit')


        ajouterTextAuContainer('est moins😏')
        if (nombreATrouver < nombreHaut){
            const elementBas= document.getElementById('haut')
            elementBas.textContent= nombrePoposer+'🗽'
            nombreHaut=nombrePoposer
        }
        
         }
        
         numeroTentative +=1
    }   
}
//recuperer le bouton
//lorsqu'il y'a un click effectuer une proposition de nombre
const button=document.getElementById('button-proposer')
button.addEventListener('click', proposerNombre)

