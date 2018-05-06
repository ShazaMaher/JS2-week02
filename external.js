
const btn = document.querySelector('button');
btn.addEventListener('click',function(){
    console.log("clicked Me !");
    fetchHYFReps();
});

/*function httpGetAsync(theUrl, callback){
    const xmlHttp = new XMLHttpRequest();
     xmlHttp.onreadystatechange = function(){
         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
     }
     xmlHttp.open("GET", theUrl, true);
     xmlHttp.send(null);
}*/

function fetchJSONData(url, callbackFn){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',function(){
        console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}


function fetchHYFReps(){
    const ul = document.querySelector('#reposList');
    ul.innerHTML = '';
    fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos',function(repoList){
        
     for(const repo of repoList){
         const li = document.createElement('li');
         ul.appendChild(li);    
         li.innerHTML ='<a target="_blank" href="${repo.url}">${repo.name}</a>';
     }
});
}

