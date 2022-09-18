import { Ad } from "./Ad.component";
import { Product } from "./Product.component";

export function ShopMainDisplay() {
    
    return (
        <div className="shop-main">
            <label className="title">מבצעים ןמןצרים מומלצים</label>
            <label> כותרת משנה כלשהיא </label>
            <div className="products-container">
                <Ad img="https://ae01.alicdn.com/kf/HTB1jcZTXELrK1Rjy1zbq6AenFXaX/Oral-B-Electric-Toothbrush-2D-Clean-Rotating-Toothbrush-Rechargeable-Toothbrush-Teeth-Dual-Clean-Brush-Heads.jpg"/>
                <Product
                    isNew
                    rating="3"
                    name="honey"
                    price="22.5"
                    img="https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/HMM68_Z_P_7296073179863_1.png"
                />
                <Product
                    isNew
                    rating="2"
                    name="honey"
                    price="22.5"
                    img="https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/HMM68_Z_P_7296073179863_1.png"
                 />
                <Product 
                    isNew
                    rating="5"
                    name="honey"
                    price="22.5"
                    img="https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/HMM68_Z_P_7296073179863_1.png"
                />
                <Product
                    isNew
                    name="honey"
                    price="22.5"
                    rating="0"
                    img="https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/HMM68_Z_P_7296073179863_1.png"
                 />
                <Product 
                    isNew
                    name="honey"
                    price="22.5"
                    rating="3"
                    img="https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/HMM68_Z_P_7296073179863_1.png"
                />
                <Product 
                    isNew
                    name="honey"
                    price="22.5"
                    rating="10"
                    img="https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/HMM68_Z_P_7296073179863_1.png"
                />
            </div>

        </div>
    )
}