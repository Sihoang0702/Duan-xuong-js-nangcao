const Header = () => {
  return /*html*/ `
    <div id="boxMenu">
        <ul class="mainMenu">
            <li>
                <a class="tp_menu_item" title="Trang chủ" href="/">Trang chủ</a>
            </li>   
            <li>
                <a class="tp_menu_item" title="Trang chủ" href="/shop">Cửa hàng</a>
            </li>   
            <li>
                <a class="tp_menu_item" title="Tin tức" href="/news">Tin tức</a>
            </li>
        </ul>
    </div>

            <div class="blockHeader tp_header">
                <div class="blockHeaderTop hidden-xs hidden-sm"><div class="container">
                    <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                        <div class="blockHotline">
                            <p>Tra cứu tình trạng đơn hàng của bạn</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                        <div class="subWrp">
                            <form class="form-inline" id="frmIndexOrder" action="/order/search">
                            <input type="text" placeholder="Nhập SĐT hoặc Mã số đơn hàng" name="q" class="subcrible">
                            <button type="submit">Tra cứu</button>
                            </form>
                            <i class="fal fa-times"></i>
                        </div>
                    </div>
                </div>
            </div>
        <div class="blockHeaderMiddle">
                <div class="container">

                    <div class="col-lg-3 col-md-3 col-xs-12 col-sm-12">

                        <div class="row">

                            <div class="hidden-lg hidden-md col-xs-2 col-sm-2 headerBar">
                                <a href="#boxMenu"><i class="fal fa-bars"></i></a>
                            </div>

                            <div class="col-lg-12 col-md-12 col-xs-8 col-sm-8">
                                <a href="/" class="logo"><img alt="logo" src="https://pos.nvncdn.net/4be5a3-2552/store/20150119_AQP6o3XaWTdul3l7oGj00KJr.jpg"></a>
                            </div>
                            <div class="clearfix">
                            </div>
                            <div class="hidden-lg hidden-md col-xs-2 col-sm-2 headerBar">
                                <i class="fal fa-search"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12 blockSearch">
                        <div class="blockSearchDesktop">
                            <form class="frmSearch" action="/search" method="get">
                            <input class="txtSearch" placeholder="Tìm kiếm" name="q">
                            <button type="submit"><i class="fal fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 hidden-xs hidden-sm">
                        <div class="top-social">
                            <a href="https://www.facebook.com/nhanh.vn" class="ico-fb"><i class="fab fa-facebook-f"></i></a>
                            <a href="" class="ico-ins"><i class="fab fa-instagram"></i></a>
                            <a href="" class="ico-you"><i class="fab fa-youtube"></i></a>
                            <a href="/user/signin"><i class="fal fa-user-circle"></i></a>
                            <a href="/cart" class="top-cart"><i class="fal fa-shopping-cart"></i><span class="cart-count">0</span></a>
                        </div>
                    </div>
                </div>
            </div>
        <div class="blockHeaderBottom hidden-xs hidden-sm tp_menu">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12" style="position: inherit">
                        <div class="row">
                            <div class="blockMenu">
                                        <ul class="mainMenu">
                                                    <li>
                                                    <a class="tp_menu_item" title="Trang chủ" href="/">Trang chủ</a>
                                                    </li>
                                                    <li>
                <a class="tp_menu_item" title="Trang chủ" href="/shop">Cửa hàng</a>
            </li>
                                                    <li><a class="tp_menu_item"title="Tin tức" href="/news">Tin tức</a></li>
                                        </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
};

export default Header;
