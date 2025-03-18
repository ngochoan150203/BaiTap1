// Dữ liệu sản phẩm
var products = [
    {
      name: 'Áo Polo Gucci',
      brand: 'gucci',
      price: 50000,
      type: 'aophong',
      delivery: 'fast'
    },
    // Thêm các sản phẩm khác vào đây
  ];
  
  // Lấy danh sách các checkbox
  var brandCheckboxes = document.querySelectorAll('input[name="brand"]');
  var priceCheckboxes = document.querySelectorAll('input[name="price"]');
  var typeCheckboxes = document.querySelectorAll('input[name="type"]');
  var deliveryCheckboxes = document.querySelectorAll('input[name="delivery"]');
  
  // Gắn sự kiện onchange cho tất cả các checkbox
  brandCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', filterProducts);
  });
  
  priceCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', filterProducts);
  });
  
  typeCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', filterProducts);
  });
  
  deliveryCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', filterProducts);
  });
  
  // Hàm xử lý việc lọc sản phẩm
  function filterProducts() {
    // Lấy giá trị của các checkbox được chọn
    var selectedBrands = Array.from(brandCheckboxes)
      .filter(function (checkbox) {
        return checkbox.checked;
      })
      .map(function (checkbox) {
        return checkbox.value;
      });
  
    var selectedPrices = Array.from(priceCheckboxes)
      .filter(function (checkbox) {
        return checkbox.checked;
      })
      .map(function (checkbox) {
        return checkbox.value;
      });
  
    var selectedTypes = Array.from(typeCheckboxes)
      .filter(function (checkbox) {
        return checkbox.checked;
      })
      .map(function (checkbox) {
        return checkbox.value;
      });
  
    var selectedDelivery = Array.from(deliveryCheckboxes)
      .filter(function (checkbox) {
        return checkbox.checked;
      })
      .map(function (checkbox) {
        return checkbox.value;
      });
  
    // Lọc sản phẩm dựa trên các giá trị đã chọn
    var filteredProducts = products.filter(function (product) {
      return (
        (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
        (selectedPrices.length === 0 || selectedPrices.includes(product.price.toString())) &&
        (selectedTypes.length === 0 || selectedTypes.includes(product.type)) &&
        (selectedDelivery.length === 0 || selectedDelivery.includes(product.delivery))
      );
    });
  
    // Hiển thị sản phẩm sau khi lọc
    displayProducts(filteredProducts);
  }
  
  // Hàm hiển thị sản phẩm sau khi lọc
  function displayProducts(filteredProducts) {
    var productList = document.getElementById('productList');
    productList.innerHTML = ''; // Xóa danh sách sản phẩm hiện tại
  
    filteredProducts.forEach(function (product) {
      // Tạo HTML cho sản phẩm dựa trên dữ liệu sản phẩm
      var productHTML = `
        <div class="product__item">
          <div class="product__item-thumb">
            <a href="" class="product__item-image d-block">
              <img src="${product.image}" alt="">
              <button class="product__item-quickview text-uppercase">
                Xem nhanh
              </button>
            </a>
          </div>
          <p class="product__item-category text-uppercase">${product.category}</p>
          <p class="product__item-name"><a href="">${product.name}</a></p>
          <span class="price">
            <del>
              <span>${product.originalPrice}</span>
            </del>
            <ins>
              <span>${product.discountedPrice}</span>
            </ins>
          </span>
        </div>
      `;
      productList.innerHTML += productHTML;
    });
  }
  
  
  // Khởi đầu, hiển thị toàn bộ sản phẩm
  displayProducts(products);