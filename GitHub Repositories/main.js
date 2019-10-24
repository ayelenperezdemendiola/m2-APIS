'use strict';

const orgValue = document.querySelector('.filter--field');
const button = document.querySelector ('.filter--btn');
const orgContainer = document.querySelector ('.org--container');
let orgName = '';
const title = document.querySelector('.org--name');
const list = document.querySelector ('.org--repos');

const getRepos = () => {
    const orgName = orgValue.value;
    const ENDPOINT = `https://api.github.com/orgs/${orgName}`;
    return (
        fetch (ENDPOINT)
        .then (response => response.json())
        .then(info => {
            const reposUrl = info.repos_url
            return (
                fetch(reposUrl)
            );
        })
        .then(reposResp => reposResp.json ())
        .then (infoRepos => {
            console.log (infoRepos, list)
            title.innerHTML = orgName;
            for (let i = 0; i < infoRepos.length; i ++){
            list.innerHTML += 
                `<li class="repos--item">
                    <a href=${infoRepos[i].html_url} class="link">    
                        ${infoRepos[i].name}
                        </a>
                </li>`
            }
        })
    );
}

button.addEventListener('click', getRepos);

// Para ello vamos a hacer lo siguiente:

// Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad repos_url) y hacer una nueva petición a esa URL.
// En el último then pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad name de cada objeto repositorio).