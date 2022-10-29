document.querySelector("#btn").addEventListener("click", () => {
    let location = document.querySelector("#city").value;
    var info = '';

    const getData = async () => {
        const data = await fetch(`https://viacep.com.br/ws/${location}/json/`)
        .then(res => res.json())
        .then(res => {return res})

        console.log(data)
        info = data
        showData()
    }

    if(location){
        getData()
    } else {
        alert("Campo inválido ou vazio!")
    }

    const showData = () => {
        document.querySelector(".location").style.display = "flex"
        document.querySelector("#logradouro").innerHTML = info.logradouro
        document.querySelector("#bairro").innerHTML =  info.bairro
        document.querySelector("#cidade").innerHTML = `${info.localidade}, ${info.uf}`
    }


})
