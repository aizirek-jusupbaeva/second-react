import React from "react";
import './Cart.css'
const Cart = ()=>{
    return(
        <div className="block">
            <div className="first-parent">
                <div className="first-product">
                    <img className="img" src="https://img.freepik.com/premium-photo/red-high-heel-women-shoes-isolated-on-white-background-3d-rendering-illustration_97167-276.jpg" alt="" />
                    <div className="price">
                        <h3>$60.00</h3>
                        <h3 className="line">$115.00</h3>
                    </div>
                    <button className="click">ADD TO CART</button>
                </div>
                <div className="second-product">
                    <img className="img" src="https://chasi55.ru/images/product/s/75/78/178757f0e93.jpg" alt="" />
                    <div className="price">
                        <h3>$95.00</h3>
                        <h3 className="line">$195.00</h3>
                    </div>
                    <button className="click">ADD TO CART</button>
                </div>
                <div className="third-product">
                    <img className="img" src="https://www.buddhatrends.com/cdn/shop/products/buddha-trends-women-s-jeans-high-waist-boyfriend-jeans-13702088589377_1024x1024.jpg?v\u003d1599815312" alt="" />
                    <div className="price">
                        <h3>$40.00</h3>
                        <h3 className="line">$95.00</h3>
                    </div>
                    <button className="click">ADD TO CART</button>
                </div>
                <div className="fourth-product">
                    <img className="img" src="https://cdnstatic.rg.ru/uploads/images/gallery/ef7db307/1_f33d3b45.jpg" alt="" />
                    <div className="price">
                        <h3>$80.00</h3>
                        <h3 className="line">$125.00</h3>
                    </div>
                    <button className="click">ADD TO CART</button>
                </div>
            </div>
            <div className="second-parent">
                <div className="first-product">
                    <img className="img" src="https://static.henderson.ru/images/catalog/product/SHL-2145-S/SHL-2145-S-BLUE-5-1.jpg" alt="" />
                    <div className="price">
                        <h3>$80.00</h3>
                        <h3 className="line">$130.00</h3>
                    </div>
                    <button className="click">ADD TO CART</button>
                </div>
                <div className="second-product">
                    <img className="img" src="https://object.pscloud.io/cms/cms/Photo/img_0_320_402_8.jpg" alt="" />
                    <div className="price">
                        <h3>$145.00</h3>
                        <h3 className="line">$195.00</h3>
                    </div>
                    <button className="click">ADD TO CART</button>
                </div>
                <div className="third-product">
                    <img className="img" src="https://avatars.dzeninfra.ru/get-zen_doc/1874110/pub_5d0a13b1c0d07200b0640add_5d0a19331faf4000b0d9b9ee/scale_1200" alt="" />
                    <div className="price">
                        <h3>$200.00</h3>
                        <h3 className="line">$265.00</h3>
                    </div>
                    <button className="click">ADD TO CART</button>
                </div>
                <div className="fourth-product">
                    <img className="img" src="https://www.gadget.kg/upload/catalog/61/item_6058/40b78c89b5fa35583fde2a9d77f05d1c.jpg" alt="" />
                    <div className="price">
                        <h3>$80.00</h3>
                        <h3 className="line">$125.00</h3>
                    </div>
                    <button className="click">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}
export default Cart