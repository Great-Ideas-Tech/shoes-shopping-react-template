import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const ProductCarousel = () => {
  const options = {
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<img src='assets/img/product/prev.png' alt='Prev' class='prev-product'/>",
      "<img src='assets/img/product/next.png' alt='Next' class='next-product'/>"
  ]
  };

  return (
    // style

<section className="">
<style>{`
    .next-product{
    position: absolute;
    top: 6.5%;
    right: 35%;
    opacity: .3;
    }
    .prev-product{
    position: absolute;
    top: 6.5%;
    left: 35%;
    opacity: .3;
    }

    .next-product:hover , .prev-product:hover{
        opacity: 1;
    }
    `}</style>
      <OwlCarousel className="active-product-area section_gap" {...options}>
        {/* single product slide */}
        <div className="single-product-slider">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="section-title">
                  <h1>Latest Products</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p1.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p2.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p3.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p4.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p5.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p6.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p7.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p8.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single product slide */}
        <div className="single-product-slider">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="section-title">
                  <h1>Coming Products</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p6.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p8.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p3.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p5.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p1.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p4.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p1.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* single product */}
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <img
                    className="img-fluid"
                    src="assets/img/product/p8.jpg"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <a href="" className="social-info">
                        <span className="ti-bag" />
                        <p className="hover-text">add to bag</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-heart" />
                        <p className="hover-text">Wishlist</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-sync" />
                        <p className="hover-text">compare</p>
                      </a>
                      <a href="" className="social-info">
                        <span className="lnr lnr-move" />
                        <p className="hover-text">view more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default ProductCarousel;
