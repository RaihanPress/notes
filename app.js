(function(){
    $ = el=> document.querySelector(el)
    var xhr = new XMLHttpRequest()
    xhr.open('GET','/list.json',true)
    xhr.onload = function(){
        o = Object.entries(JSON.parse(this.responseText))
        $('.items').innerHTML = ""
        for(let i = 0; i < o.length; i++){
            var item = document.createElement('div')
            item.classList = "item";
            item.innerHTML = `<a class="img" href="./books/?${o[i][0]}"><img src="./img.jpeg" alt="Book Image"></a>
        <a href="./books/?${o[i][0]}" class="title">${o[i][0]}</a>
        <p>${o[i][1].length} Download${o[i][1].length == 1 ? '' : 's'}</p>`
            $('.items').appendChild(item)
        }
    }
    xhr.send()
})()