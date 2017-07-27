function performGetTimeline(){
  var resultElement = document.getElementById('getTimeline');
  resultElement.innerHTML = '';
  
  axios.get('http://localhost:3000/api/timeline')
  .then(function (response){
    resultElement.innerHTML = 
  })
}
