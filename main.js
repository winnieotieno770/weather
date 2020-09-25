var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
      //  var Value = data[""];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        


    })
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var place= document.getElementById('placeValue')
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var output= document.querySelector('#output');
//var rain = document.querySelector('.rain')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=03859b4aa0c57fb4320a0d7f8f966cca&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML= descValue;

        
 

    })
    
    
    if(typeof(Storage) !=='undefined'){
       
        //code goes for local storage /session storage
         button.addEventListener('click',function(){
        
               const placeLocation = placeValue.value;
             
               if(placeLocation===true){
                   localStorage.setItem(placeLocation);
                   location.reload();
                 
                }
                
   
            
           for(i=0; i<localStorage.length ;i++){
               const placeLocation = localStorage.key(0);
               output.innerHTML+=`${placeLocation}`
           }
       }
         )}                                                                              
   
   
   
   
   
            else{
        alert(' sorry not supported by browser')
     };

    

   // .then (response , alert('wrong city name')
})


