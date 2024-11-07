fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    let card = `<div class="row row-cols-1 row-cols-md3 g-4">`

    for (let producto of data){
        card += `
          <div class="col-4 px-5">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" alt="Producto" src="producto.image">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Precio: </strong>${producto.price}</li>
                                <li class="list-group-item"><strong>Descripcion: </strong>${producto.description}</li>
                                <li class="list-group-item"><strong>Categoria: </strong> ${producto.category}</li>
                                
                            </ul>
                            <p></p>
                        </div>
                    </div>
                </div>
        `
    }
    card += `</div>`
    document.getElementById("cardList").innerHTML=card
})