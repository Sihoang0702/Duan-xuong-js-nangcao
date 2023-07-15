const ProductShopListComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Product 1",
        image:
          "https://pos.nvncdn.net/4be5a3-2552/ps/20150123_zsV1hYA4Fy6ww9yB6qGwRQAe.jpg",
        price: 100,
        quantity: 10,
        size: "L",
        description: "description 1",
      },
      {
        id: 2,
        name: "Product 2",
        image:
          "https://pos.nvncdn.net/4be5a3-2552/ps/20150123_zsV1hYA4Fy6ww9yB6qGwRQAe.jpg",
        price: 200,
        quantity: 10,
        size: "L",
        description: "description 1",
      },
      {
        id: 3,
        name: "Product 3",
        image:
          "https://pos.nvncdn.net/4be5a3-2552/ps/20150123_zsV1hYA4Fy6ww9yB6qGwRQAe.jpg",
        price: 300,
        quantity: 10,
        size: "L",
        description: "description 1",
      },
      {
        id: 4,
        name: "Product 4",
        image:
          "https://pos.nvncdn.net/4be5a3-2552/ps/20150123_zsV1hYA4Fy6ww9yB6qGwRQAe.jpg",
        price: 100,
        quantity: 10,
        size: "L",
        description: "description 1",
      },
    ]);
  }, []);

  return products.map((pro) => {
    return (
      <div class="col-lg-3 col-xs-6 col-sm-6 col-md-3 items">
        <div class="productImg">
          <a
            class="pr1170651 itemHoverImg"
            href="/giay-da-nam-p1170651.html"
            data-id="1170651"
          >
            <img
              class="lazyload default-img"
              data-sizes="auto"
              src="https://web.nvnstatic.net/img/lazyLoading.gif?v=2"
              alt="Giày da nam"
              data-src={pro.image}
            />
          </a>
          <div class="grid-tools">
            <a
              data-id="1170651"
              class="quick-view hidden-xs hidden-sm tp_button"
            >
              Xem nhanh
            </a>
          </div>
        </div>
        <div class="blockNewDts">
          <h2>
            <a
              class="prdName tp_product_name"
              href="/giay-da-nam-p1170651.html"
              title="Giày da nam"
            >
              {pro.name}
            </a>
          </h2>
          <div class="blockCartPrd">
            <div class="price">
              <span class="currentPrice tp_product_price">
                {pro.price} VNĐ{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default ProductShopListComponent;
