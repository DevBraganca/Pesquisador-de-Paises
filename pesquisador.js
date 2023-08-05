document.getElementById('card').style.setProperty('display', 'none' , 'important')

function Procurar(){
    document.getElementById('card').style.setProperty('display', 'block' , 'important')
    var pais = document.getElementById('pais').value
    var finalURL = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(finalURL)
    
    fetch(finalURL)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
           console.log(data[0])
           var bandeira = document.getElementById('bandeira')
           var nome = document.getElementById('nome')
           var cont = document.getElementById('cont')
           var capital = document.getElementById('capital')
           var pop = document.getElementById('pop')

           nome.innerHTML = pais
           bandeira.src = data[0].flags.svg
           cont.innerHTML = data[0].continents[0]
           capital.innerHTML = data[0].capital
           pop.innerHTML = data[0].population
      })
}