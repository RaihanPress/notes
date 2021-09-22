(function () {
    $ = el => document.querySelector(el)
    $$ = el => document.querySelectorAll(el)
    var xhr = new XMLHttpRequest()
    xhr.open('GET', '/list.json', true)
    xhr.onload = function () {
        o = JSON.parse(this.responseText)
        $('.items').innerHTML = ""

        var search = location.search.substr(1)
        if (o[search]) {
            document.title = search + " Notes - Faizan Ahmad"
            $('#title').innerHTML = search + " Notes"
            $('#c').innerHTML = "Downloads - "+o[search].length
            $('.items').innerHTML = ""
            var d = o[search];
            if(d.length > 0){
                for (let i = 0; i < d.length; i++) {
                    var item = document.createElement('div')
                    item.classList = "item";
                    item.innerHTML = `<span class="name">${d[i]}.pdf</span>
                <button title="Download" class="btn">Download</button>`
                    $('.items').appendChild(item)
                    $$('.item')[i].querySelector('button').addEventListener('click',function(){
                        load(d[i])
                    })
                }
            }else{
                $('.items').innerHTML = "<h1 style='padding:15px'>No Items</h1>"
            }
        } else {
            $('body').innerHTML = '<h1>Sorry! Invalid URL or File Not Found</h1><a href="../" style="margin-top:5px"><button class="btn">All Notes Here</button></a>'
        }
    }
    xhr.send();
    function load(f){
        var a = document.createElement('a')
        a.href = "../files/"+f+".pdf";
        a.download = f;
        a.click()
    }
})()