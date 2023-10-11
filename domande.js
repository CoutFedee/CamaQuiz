var container = document.getElementById('container');
const Valori = {
  Assamita: 'Assamita',
  Brujah: 'Brujah',
  Gangrel: 'Gangrel',
  Giovanni: 'Giovanni',
  Lasombra: 'Lasombra',
  Malkavian: 'Malkavian',
  Nosferatu: 'Nosferatu',
  Ravnos: 'Ravnos',
  Setita: 'Setita',
  Toreador: 'Toreador',
  Tremere: 'Tremere',
  Tzimisce: 'Tzimisce',
  Ventrue: 'Ventrue',
};
const domande = [
  {
    domanda: "1Come ti descriveresti?",
    risposte: [
        {testo: "a. Sono quello furbo/intelligente", valore: Valori.Brujah},
        {testo: "b. Sono quello furbo/intelligente", valore: Valori.Assamita},
        {testo: "c. Sono quello furbo/intelligente", valore: Valori.Gangrel}, 
        {testo: "d. Sono quello furbo/intelligente", valore: Valori.Malkavian}
    ],
  },
  {
    domanda: "2Come ti descriveresti?",
    risposte: [
        {testo: "a. Sono quello furbo/intelligente", valore: Valori.Brujah},
        {testo: "b. Sono quello furbo/intelligente", valore: Valori.Assamita},
        {testo: "c. Sono quello furbo/intelligente", valore: Valori.Gangrel}, 
        {testo: "d. Sono quello furbo/intelligente", valore: Valori.Malkavian}
    ],
  },
  {
    domanda: "3Come ti descriveresti?",
    risposte: [
        {testo: "a. Sono quello furbo/intelligente", valore: Valori.Brujah},
        {testo: "b. Sono quello furbo/intelligente", valore: Valori.Assamita},
        {testo: "c. Sono quello furbo/intelligente", valore: Valori.Gangrel}, 
        {testo: "d. Sono quello furbo/intelligente", valore: Valori.Malkavian}
    ],
  },

];


domande.forEach((domanda, index)=>{
  const domandaTxt = document.createElement('p')
  domandaTxt.className= "question-txt"
  domandaTxt.textContent=domanda.domanda
  container.appendChild(domandaTxt)

  domanda.risposte.forEach((risposta, rispostaIndex)=>{
    const rispostaContainer = document.createElement('div')
    rispostaContainer.className = "ans-container"
    const rispostaInput = document.createElement('input')
    rispostaInput.type = 'radio'
    rispostaInput.id = `q-${index}-${rispostaIndex}`
    rispostaInput.name = index
    rispostaInput.value = risposta.valore
    const rispostaLabel = document.createElement('label')
    rispostaLabel.textContent = risposta.testo
    rispostaLabel.htmlFor = `q-${index}-${rispostaIndex}`
    rispostaContainer.appendChild(rispostaInput)
    rispostaContainer.appendChild(rispostaLabel)
    domandaTxt.appendChild(rispostaContainer)
  })
})
const inputBtn = document.createElement("input")
inputBtn.type = 'submit'
inputBtn.value= 'Invia'
container.appendChild(inputBtn)

function onQuizSubmit(){
  container.addEventListener('submit', (e)=>{
    e.preventDefault();
    const answers = document.querySelectorAll('input[type="radio"]:checked')
    const results = Array.from(answers).map((radio)=>{
      return radio.value
    })
    console.log(results)
    const sortedRes = results.reduce((count, currElem)=>{
      if(count[currElem]){
        count[currElem]++
      }else{
        count[currElem]=1
      }
      return count
    },{})
    let max = 0
    let clan = ""
    for(value in sortedRes){
      if(sortedRes[value]>max){
        max = sortedRes[value]
        clan = value
      }
    }
    const resTxt = document.createElement('p')
    resTxt.textContent = `Sei un ${clan} stronzo`
    container.appendChild(resTxt)
  })  
}







