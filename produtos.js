const produtos = document.querySelector(".produtos")
for(let i = 0; i < 50 ; i++)
{
    produtos.innerHTML += `
            <div class="produto_card">
               <img src="https://picsum.photos/600/400?random=${(Math.random() * 1000)}" alt="">
                <h4>Item normal</h4>
                <p class="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus, deleniti, quos nulla culpa reprehenderit excepturi totam soluta officiis placeat quidem reiciendis expedita? At eius possimus, reiciendis atque quam qui.</p>
                <p>${(Math.random()*10000).toLocaleString("pt-BR",{style:"currency", currency:"BRL"})}</p>
                <button>Comprar?</button>
            </div>
        `
}
const unsplash = createApi({
  accessKey: 'YOUR_ACCESS_KEY'
});
console.log(unsplash.photos.getPhoto("pFqrYbhIAXs"))
