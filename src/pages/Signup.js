const Signup = () => {
  return ` <section class="">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Đăng kí
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>

                      <input type="text" id="username"
                          class="bg-gray-50 border border-gray-300  text-gray-900     w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="User Name" required="">
                  </div>
                  <div>
                      <label for="password"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="Mật khẩu"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required="">
                  </div>

                  <div class="flex items-start">


                  </div>
                  <button type="submit"
                      class=" w-full rounded-lg px-5 py-2 text-white bg-orange-500     ">Đăng
                      Nhập</button>
                  <p class="text-sm font-light text-dark-500 dark:text-dark-400">
                      Bạn chưa có tài khoản? <a href="#"
                          class="font-medium text-blue-600 hover:underline ">Đăng
                          ký ngay</a>
                  </p>
                  <!-- Social login buttons -->
                  <a class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      style="background-color: #3b5998" href="#!" role="button" data-te-ripple-init
                      data-te-ripple-color="light">
                      <!-- Facebook -->
                      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-3.5 w-3.5" fill="currentColor"
                          viewBox="0 0 24 24">
                          <path
                              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                      Continue with Facebook
                  </a>

                  <button class="w-full group h-12 px-7 pb-2.5 pt-3 border-2 border-gray-300 rounded transition duration-300 
              hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                      <div class="relative flex items-center space-x-4 justify-center">
                          <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                              class="absolute left-10 w-5" alt="google logo">
                          <span
                              class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                              with Google</span>
                      </div>
                  </button>
              </form>
          </div>
      </div>
  </div>
</section>`;
};

export default Signup;
