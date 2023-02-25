// import { sayHelloName } from './api/service.product.js'

const products = []

class Product {
  id;
  title;
  description;
  price;
  discountAmount;
  lastUpdate;
  categoryId;
}

// sayHelloName('patrick')

// const tenis1 = new Product
// tenis1.id = 1
// tenis1.title = 'Tenis Nike AirMax SC'
// tenis1.description = 'Apresentando um design casual, o look de herança do atletismo e, claro, amortecimento Air visível, o Nike Air Max SC é o melhor complemento para qualquer outfit.'
// tenis1.price = 599.99
// tenis1.discountAmount = 99.99
// tenis1.categoryId = 1
// tenis1.lastUpdate = "2023-01-20T12:53:22.0300"
// tenis1.imageUrl = "https://static.netshoes.com.br/produtos/tenis-nike-air-max-sc-masculino/06/2IC-8152-006/2IC-8152-006_zoom1.jpg?ts=1649627435&ims=544x"

// const camiseta1 = new Product
// camiseta1.id = 2
// camiseta1.title = 'Camiseta Vans Classic'
// camiseta1.description = 'A camiseta masculina Vans é ideal para quem procura roupas para diversas ocasiões e ainda quer sempre demonstrar sua personalidade autêntica nas composições.'
// camiseta1.price = 129.99
// camiseta1.discountAmount = 29.99
// camiseta1.categoryId = 2
// camiseta1.lastUpdate = "2023-01-23T11:03:39.0300"
// camiseta1.imageUrl = "https://static.netshoes.com.br/produtos/camiseta-vans-classic/10/900-0240-010/900-0240-010_zoom1.jpg?ts=1669885096&ims=544x"

// products.push(tenis1)
// products.push(camiseta1)

// console.log(tenis1)

const productListElement = document.querySelector('#products');

// 'render' porque ele renderiza no dom
function renderProducts(productsList) {
  let html = ''
  const productItems = parseProductsToHtml(productsList)

  productItems.forEach(function (productItem) {
    html += productItem
  });
  
  productListElement.innerHTML = html
}

// 'parse' porque ele "passa" / converte para html
function parseProductsToHtml(productsList) {
  const productsHtml = productsList.map(function (product) {
    return `
    <div class="card product-item">
      <div class="product-header">
        <div class="product-image" style="background-image: url(${product.imageUrl});"></div>

      </div>
      <div class="card-body product-body">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <div>
          R$ ${product.price}
          <span>
            <small class="product-discount">R$ ${product.discountAmount}</small>
          </span>
        </div>
        <div>${product.categoryId}</div>
        <div>${product.lastUpdate}</div>

        <div class="align-end">
          <button class="btn btn-yellow">Go Shopping</button>
        </div>
      </div>
    </div>
    `;
  })

  return productsHtml
}

renderProducts(products)