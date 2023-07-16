// import React from 'react'

const Cart = () => {
  return `
  <div class="container">
    <header class="container mx-auto px-6 pt-6">
      <div class="flex flex-row">
        <div class="basis-1/4 pl-28">
          <img src="https://picsum.photos/50/50" alt="" />
        </div>
        <div class="basis-1/2 relative px-8">
          <div class="absolute pointer-events-auto py-3 pl-1.5">
            <svg class="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <input type="text" placeholder="Search"
            class="rounded border border-slate-400 border-solid h-10 w-full pl-10" />
        </div>

        <div class="basis-1/4 flex flex-row gap-4 px-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle"
            viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart"
            viewBox="0 0 16 16">
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </div>
      </div>
      <nav class="flex justify-center border-t-2 mt-5 border-current">
        <a href="/dashboard"
          class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-zinc-500 hover:text-white">TRANG CHỦ</a>
        <div class="relative group flex flex-row rounded-lg hover:bg-zinc-500 hover:text-white">
          <a href="/team" class="font-medium px-3 py-2 dark:hover:text-white rounded-lg">THỜI TRANG NỮ</a>
          <ul
            class="absolute hidden group-hover:block top-10 left-0 bg-slate-100 rounded-lg text-slate-900 w-36 pl-5 border">
            <li><a href="" class="block"></a>ÁO</li>
            <li><a href="" class="block"></a>QUẦN</li>
            <li><a href="" class="block"></a>VÁY</li>
          </ul>
        </div>
        <div class="relative group flex flex-row rounded-lg hover:bg-zinc-500 hover:text-white">
          <a href="/team" class="font-medium px-3 py-2 dark:hover:text-white rounded-lg">THỜI TRANG NỮ</a>
          <ul
            class="absolute hidden group-hover:block top-10 left-0 bg-slate-100 rounded-lg text-slate-900 w-36 pl-5 border">
            <li><a href="" class="block"></a>ÁO</li>
            <li><a href="" class="block"></a>QUẦN</li>
          </ul>
        </div>
        <a href="/reports"
          class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-zinc-500 hover:text-white">TIN TỨC</a>
      </nav>
    </header>
    <!-- cart -->
    <section class="container mx-auto px-6 pt-6" style="background-color: #f3f1f6">
      <h2 class="text-amber-950 text-2xl text-center uppercase mt-5">
        Giỏ hàng của bạn
      </h2>
      <div class="product">
        <div class="product--info pt-4 grid grid-cols-2 gap-4">
          <div class="product__summary">
            <!-- start voucher -->
            <div class="product--voucher">
              <div class="voucher--info py-3 flex justify-around items-center bg-white">
                <div class="voucher">
                  <div class="voucher--freeship flex items-center gap-3">
                    <img src="//theme.hstatic.net/200000077237/1001053688/14/truck.png?v=128" alt="Freeship"
                      style="width: 30px" />
                    <p>
                      <strong class="uppercase">Miễn phí giao hàng toàn quốc</strong>
                      với tất cả các đơn hàng từ <strong>1.000.000₫</strong>
                    </p>
                  </div>
                  <div class="voucher-sale flex items-center gap-3">
                    <img src="https://theme.hstatic.net/200000077237/1001053688/14/sale-tag.png?v=128" alt="Voucher"
                      style="width: 30px" />
                    <p>
                      Chi tiêu thêm <strong>1.500.000</strong> để nhận được
                      voucher <strong class="uppercase">Giảm</strong> thêm 10%
                      cho đơn hàng
                    </p>
                  </div>
                </div>
                <div class="add--products">
                  <a href="#" class="bg-black text-white p-2 uppercase text-[13px] rounded-md">Mua thêm</a>
                </div>
              </div>
            </div>
            <!-- end vocher-->

            <!-- detail products -->
            <div class="info__products mb-4">
              <div class="info__products--detail bg-white mt-4 py-4">
                <div class="max-w-md mx-auto bg-white shadow-md p-6">
                  <h2 class="text-xl font-bold mb-4">Thông tin đơn hàng</h2>
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <div class="w-12 h-12 bg-gray-200">
                        <img src="https://picsum.photos/200/300" alt="">
                      </div>
                      <div class="ml-4">
                        <p class="font-bold">Áo thun</p>
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
                        <p class="text-gray-600">Đơn giá: $25</p>
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
                        <p class="text-gray-600">Đơn giá: $100</p>
                        <p class="text-gray-600">Tổng cộng: $100</p>
                      </div>
                    </div>


                  </div>
                </div>

              </div>
            </div>
            <!-- end detail products -->
          </div>
          <!-- end -->

          <div class="order__summary">
            <div class="oder__summary--detail  bg-white w-full min-h-4">
              <h2 class="font-bold text-center pt-4 text-xl">
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
                <div class="text-center bg-black w-36 p-2 rounded-md">
                  <a href="#" class="text-white uppercase">Thanh Toán</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="container mx-auto bg-slate-50 mt-8">
      <div class="flex flex-row bg-white list-none pb-4">
        <div class="basis-1/3 px-20" >
            <p class="text-lg font-medium">INFORMATION</p>
            <li><a href="" class="no-underline block py-1">Về chúng tôi</a></li>
            <li><a href="" class="no-underline block py-1">Các điều khoản và điều kiện</a></li>
            <li><a href="" class="no-underline block py-1">Chính sách bảo mật</a> </li>
        </div>
        <div class="basis-1/3 px-20">
            <p class="text-lg font-medium">SOCIALIZE</p>
            <li><a href="" class="no-underline block py-1">Facebook</a></li>
            <li><a href="" class="no-underline block py-1">Instagram</a></li>
        </div>
        <div class="basis-1/3 px-20">
            <p class="text-lg font-medium">CUSTOMER SERVICE</p>
            <li><a href="" class="no-underline block py-1">Liên hệ chúng tôi</a> </li>
            <li><a href="" class="no-underline block py-1">Phiếu quà tặng</a> </li>
            <li><a href="" class="no-underline block py-1">Câu hỏi thường gặp</a> </li>
            <li><a href="" class="no-underline block py-1">Thông tin vận chuyển</a> </li>
        </div>
      </div>
   </footer>
  </div>
  `
}

export default Cart