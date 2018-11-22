const character = function ShowOneCharacterFromXIVApi(number) {
    fetch(`https://xivapi.com/character/${number}?key=ffc445846de84567a6a1fe73`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach(function(hiddenElement) {
            hiddenElement.classList.remove('hidden');
        })
        var data = data.Character;
        var mounts = data.Mounts;
        var minions = data.Minions;
        document.querySelector('#name').innerHTML = data.Name;
        document.querySelector('#nameday span').innerHTML = data.Nameday;
        document.querySelector('#title span').innerHTML = data.Title;
        document.querySelector('#server span').innerHTML = data.Server;
        document.querySelector('#race span').innerHTML = data.Race;
        document.querySelector('img').src = data.Portrait;



        mounts.forEach(function(mount) {
            fetch(`https://xivapi.com/mount/${mount}?key=ffc445846de84567a6a1fe73`)
            .then(function(response) {
                return response.json();
            })
            .then(function(mount) {
                let img = document.createElement('img');
                document.querySelector('#mounts').appendChild(img);
                img.setAttribute('src', `https://xivapi.com${mount.Icon}`);
                img.setAttribute("class", "icon");
            })
        })

        minions.forEach(function(minion) {
            fetch(`https://xivapi.com/Companion/${minion}?key=ffc445846de84567a6a1fe73`)
            .then(function(response) {
                return response.json();
            })
            .then(function(minion) {
                let img = document.createElement('img');
                document.querySelector('#minions').appendChild(img);
                img.setAttribute('src', `https://xivapi.com${minion.Icon}`);
                img.setAttribute("class", "icon");
            })
        })
    })
}


document.querySelector("#button").addEventListener("click", function() {
    $number = document.querySelector('#input').value;
    character($number);
});

document.querySelector(".stats_tab").addEventListener("click", function(el) {
    document.querySelector("#stats").classList.remove('hidden_tab');
    document.querySelector("#minions").classList.add('hidden_tab');
    document.querySelector("#mounts").classList.add('hidden_tab');
});

document.querySelector(".minions_tab").addEventListener("click", function(el) {
    document.querySelector("#minions").classList.remove('hidden_tab');
    document.querySelector("#stats").classList.add('hidden_tab');
    document.querySelector("#mounts").classList.add('hidden_tab');
});

document.querySelector(".mounts_tab").addEventListener("click", function(el) {
    document.querySelector("#mounts").classList.remove('hidden_tab');
    document.querySelector("#minions").classList.add('hidden_tab');
    document.querySelector("#stats").classList.add('hidden_tab');
});