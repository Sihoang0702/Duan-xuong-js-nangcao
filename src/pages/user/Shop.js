import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductShopListComponent from "../../components/ProductShopList";

const ShopPage = () => {
  return `
  ${Header()}
  <div
      class="productCategory"
      id="PageContainer"
      url="product/category"
      cId="28593"
      path="/thoi-trang-nam-pc28593.html"
      icpp="12"
      page="1"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-xs-12 col-sm-12">
            <div class="row">
              <div class="col-lg-2 col-md-2 col-xs-12 col-sm-12">
                <div class="blockFilter filter-nav">
                  <ul class="hidden-lg hidden-md">
                    <li class="filter-expander">
                      <button class="button-reset">
                        <a class="btnCategory">
                          Bộ lọc
                          <span class="arrow">
                            <i class="fal fa-angle-down"></i>
                          </span>
                        </a>
                      </button>
                    </li>
                    <li class="filter-expander">
                      <button class="button-reset">
                        <a href="/cart">
                          Giỏ hàng
                          <i
                            aria-hidden="true"
                            class="fal fa-shopping-bag"
                            style="padding-left: 10px"
                          ></i>
                        </a>
                      </button>
                    </li>
                  </ul>
                  <div class="blockAttrList">
                    <div class="blockAttrCategory filter-price tp_product_category_filter_price">
                      <h3>
                        Khoảng giá
                        <i class="fal fa-angle-down hidden-lg hidden-md"></i>
                      </h3>
                      <ul
                        class="grid mg-left-0 no-bullets filter-variant filter-color clearfix "
                        style="overflow: unset; max-height: unset;"
                      >
                        <div class="price_slider_wrapper">
                          <span class="text-green" style="font-size: 14px">
                            Từ
                            <span id="price_form" data-size="0">
                              0đ
                            </span>
                            :
                            <span
                              id="price_to"
                              data-size="5000000"
                              data-max="5000000"
                            >
                              5,000,000đ
                            </span>
                          </span>
                          <div id="slider-range"></div>
                        </div>
                      </ul>
                    </div>
                    <div
                      class="blockAttrCategory sidebar-sort tp_product_category_filter_attribute"
                      colum="i4"
                    >
                      <h3>
                        Màu sắc
                        <i class="fal fa-angle-down hidden-lg hidden-md"></i>
                      </h3>
                      <ul class="grid mg-left-0 no-bullets filter-variant filter-color clearfix ">
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i4=272483"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272483" />
                            <span>Xanh</span>
                          </label>
                        </li>
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i4=272482"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272482" />
                            <span>Đen</span>
                          </label>
                        </li>
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i4=272480"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272480" />
                            <span>Trắng</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="blockAttrCategory sidebar-sort tp_product_category_filter_attribute"
                      colum="i5"
                    >
                      <h3>
                        Kích cỡ
                        <i class="fal fa-angle-down hidden-lg hidden-md"></i>
                      </h3>
                      <ul class="grid mg-left-0 no-bullets filter-variant filter-color clearfix ">
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i5=272465"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272465" />
                            <span>S</span>
                          </label>
                        </li>
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i5=272466"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272466" />
                            <span>M</span>
                          </label>
                        </li>
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i5=272467"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272467" />
                            <span>L</span>
                          </label>
                        </li>
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i5=272473"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272473" />
                            <span>29</span>
                          </label>
                        </li>
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i5=272474"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272474" />
                            <span>30</span>
                          </label>
                        </li>
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i5=272475"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272475" />
                            <span>31</span>
                          </label>
                        </li>
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i5=272476"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272476" />
                            <span>38</span>
                          </label>
                        </li>
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i5=272477"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272477" />
                            <span>39</span>
                          </label>
                        </li>
                        <li>
                          <label
                            data-link="/thoi-trang-nam-pc28593.html?i5=272478"
                            class="filter-vendor__item"
                          >
                            <input type="checkbox" val="272478" />
                            <span>40</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-10 col-md-10 col-xs-12 col-sm-12">
                <div class="productContainer row">
                  <div class="collection-header">
                    <h1 class="category-name tp_title">Thời trang nam</h1>
                    <div class="order-by-box">
                      <label for="">Sắp xếp</label>
                      <select
                        name="SortBy"
                        class="sortBy"
                        onchange="location = this.value;"
                      >
                        <option selected value="/thoi-trang-nam-pc28593.html?">
                          Mới nhất
                        </option>
                        <option value="/thoi-trang-nam-pc28593.html?show=nameAsc">
                          Tên từ A-Z
                        </option>
                        <option value="/thoi-trang-nam-pc28593.html?show=nameDesc">
                          Tên từ Z-A
                        </option>
                        <option value="/thoi-trang-nam-pc28593.html?show=priceDesc">
                          Giá giảm dần
                        </option>
                        <option value="/thoi-trang-nam-pc28593.html?show=priceAsc">
                          Giá tăng dần
                        </option>
                      </select>
                    </div>
                  </div>
                  <div id="resultAjax" class="collection-body">
                    <div class="productCategory products">
                      ${ProductShopListComponent()}
                    </div>
                    <div class="pagination">
                      <div class="links col-lg-12 col-md-12 col-xs-12 col-sm-12">
                        <div class="paginator">
                          <span class="labelPages">1 - 18 / 18</span>
                          <span class="titlePages">&nbsp;&nbsp;Trang: </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ${Footer()}
  `;
};

export default ShopPage;
