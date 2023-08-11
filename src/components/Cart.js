// import React from 'react'

import Footer from "./Footer";
import Header from "./Header";

const Cart = () => {
  return `
  <div class="container">
    ${Header()}
    
    <section class="container mx-auto px-6 pt-6 h-[600px]" style="background-color: #f3f1f6">
      <h2 class="text-amber-950 text-2xl text-center uppercase mt-5">
        Giỏ hàng của bạn
      </h2>
      <div class="product">
        <div class="product--info pt-4 grid grid-cols-2 gap-4">
          <div class="product__summary">
            
            <div class="product--voucher">
              <div class="voucher--info py-3 flex justify-around items-center bg-white rounded-md">
                <div class="voucher text-[13px]">
                  <div class="voucher--freeship flex items-center gap-3 px-4">
                    <img src="//theme.hstatic.net/200000077237/1001053688/14/truck.png?v=128" alt="Freeship"
                      style="width: 30px" />
                    <p>
                      <strong class="uppercase text-[11px]">Miễn phí giao hàng toàn quốc</strong>
                      với tất cả các đơn hàng từ <strong class="text-[11px]">1.000.000₫</strong>
                    </p>
                  </div>
                  <div class="voucher-sale flex items-center gap-3 px-4">
                    <img src="https://theme.hstatic.net/200000077237/1001053688/14/sale-tag.png?v=128" alt="Voucher"
                      style="width: 30px" />
                    <p >
                      Đơn hàng từ <strong>1.500.000</strong> nhận
                      voucher <strong class="uppercase">Giảm</strong> thêm 10%
                      cho đơn hàng
                    </p>
                  </div>
                </div>
                <div class="add--products w-44">
                  <a href="/shop" class="bg-black text-white p-3 rounded-md hover:no-underline">Mua thêm</a>
                </div>
              </div>
            </div>
            

            
            <div class="info__products mb-4">
              <div class="info__products--detail bg-white mt-4 py-4 rounded-md">
                <div class="w-4/5 mx-auto bg-white shadow-md p-6">
                  <h2 class=" text-center text-[25px] font-bold mb-4">Thông tin đơn hàng</h2>
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <div class="w-12 h-12 bg-gray-200">
                        <img src="https://picsum.photos/200/300" alt="">
                      </div>
                      <div class="ml-4">
                        <p class="font-bold">Áo thun</p>
                        <div class="text-gray-600 flex gap-3">Số lượng: <button
                        class="decrease-btn w-8 h-6 bg-gray-200 rounded-md border border-gray-300 flex items-center justify-center focus:outline-none">
                        -
                      </button>
                      <input
                        id="quantity-input"
                        type="number"
                        min="1"
                        value="1"
                        class="w-16 h-6 px-2 text-center border border-gray-300 rounded-md mx-2"
                      >
                      <button
                        class="increase-btn w-8 h-6 bg-gray-200 rounded-md border border-gray-300 flex items-center justify-center focus:outline-none">
                        +
                      </button>
                      
                        </div>
                        <p class="text-gray-600 pt-1">Đơn giá: $25</p>
                        <p class="text-gray-600">Tổng cộng: $50</p>
                      </div>
                    </div>

                    <div class="flex items-center">
                      <div class="w-12 h-12 bg-gray-200"><img src="https://picsum.photos/200/300" alt=""></div>
                      <div class="ml-4">
                        <p class="font-bold">Quần jeans</p>
                        <div class="text-gray-600 flex gap-3">Số lượng: <button
                          class="w-8 h-6 bg-gray-200 rounded-md border border-gray-300 flex items-center justify-center focus:outline-none">
                          -
                        </button>
                        <input type="number" min="1" value="1"
                          class="w-16 h-6 px-2 text-center border border-gray-300 rounded-md mx-2">
                        <button
                          class="w-8 h-6 bg-gray-200 rounded-md border border-gray-300 flex items-center justify-center focus:outline-none">
                          +
                        </button>
                      </div>
                        <p class="text-gray-600 pt-1">Đơn giá: $100</p>
                        <p class="text-gray-600">Tổng cộng: $100</p>
                      </div>
                    </div>


                  </div>
                </div>

              </div>
            </div>
           
          </div>

          <div class="order__summary flex justify-end  max-h-[438px] ">
            <div class="oder__summary--detail bg-white w-4/5 min-h-4 rounded-md">
              <h2 class="font-bold text-center pt-4 text-[30px]">
                Tóm tắt đơn hàng
              </h2>
              <div class="price__products flex justify-around pt-10">
                <p>Mã đơn hàng:</p>
                <p><strong>DH123456</strong></p>
              </div>
              <div class="price__products flex justify-around pt-4">
                <p>Ngày đặt hàng:</p>
                <p><strong>15/07/2023</strong></p>
              </div>
              <div class="price__products flex justify-around pt-4">
                <p>Tổng giá trị đơn hàng:</p>
                <p><strong>680.000₫</strong></p>
              </div>

              <div class="payment flex justify-center py-5">
                <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white text-[15px]">Thanh Toán</span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    ${Footer()}
  </div>
  `;
};

export default Cart;
