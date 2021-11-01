


var form = document.getElementById("myForm")


form.addEventListener('submit', function(e) {
    e.preventDefault()

    var search = document.getElementById("search").value

    var origName = search.split(' ').join('')

    fetch("https://api.github.com/users/" + origName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)
            document.getElementById("result").innerHTML = `
            <a target="_blank" href="https://www.github.com/${origName}"> <img src="${data.avatar_url}"/> </a>
            `
        })


})