import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
const ExclusiveDeal= () => {
    const options = {
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        nav: true,
        dots: false,
        navText: [
            "<img src='assets/img/product/prev.png' alt='Prev' class='prev'/>",
            "<img src='assets/img/product/next.png' alt='Next' class='next'/>"
        ]
    };
  return (
    <>
    {/* Start exclusive deal Area */}
    <style>{`
    .next{
    position: absolute;
    top: 50%;
    right: 10%;
    opacity: .3;
    }
    .prev{
    position: absolute;
    top: 50%;
    left: 10%;
    opacity: .3;
    }

    .next:hover , .prev:hover{
        opacity: 1;
    }
    `}</style>
    <section className="exclusive-deal-area">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 no-padding exclusive-left">
            <div className="row clock_sec clockdiv" id="clockdiv">
              <div className="col-lg-12">
                <h1>Exclusive Hot Deal Ends Soon!</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
              <div className="col-lg-12">
                <div className="row clock-wrap">
                  <div className="col clockinner1 clockinner">
                    <h1 className="days">150</h1>
                    <span className="smalltext">Days</span>
                  </div>
                  <div className="col clockinner clockinner1">
                    <h1 className="hours">23</h1>
                    <span className="smalltext">Hours</span>
                  </div>
                  <div className="col clockinner clockinner1">
                    <h1 className="minutes">47</h1>
                    <span className="smalltext">Mins</span>
                  </div>
                  <div className="col clockinner clockinner1">
                    <h1 className="seconds">59</h1>
                    <span className="smalltext">Secs</span>
                  </div>
                </div>
              </div>
            </div>
            <a href="" className="primary-btn">
              Shop Now
            </a>
          </div>


          <div class="col-lg-6 no-padding exclusive-right">
					{/* <div class=""> */}
                    <OwlCarousel className="active-exclusive-product-slider" {...options}>
						{/* <!-- single exclusive carousel --> */}
						<div class="single-exclusive-slider">
							<img class="img-fluid" src="assets/img/product/e-p1.png" alt=""/>
							<div class="product-details">
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<h4>addidas New Hammer sole
									for Sports person</h4>
								<div class="add-bag d-flex align-items-center justify-content-center">
									<a class="add-btn" href=""><span class="ti-bag"></span></a>
									<span class="add-text text-uppercase">Add to Bag</span>
								</div>
							</div>
						</div>
						{/* <!-- single exclusive carousel --> */}
						<div class="single-exclusive-slider">
							<img class="img-fluid" src="assets/img/product/e-p1.png" alt=""/>
							<div class="product-details">
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<h4>addidas New Hammer sole
									for Sports person</h4>
								<div class="add-bag d-flex align-items-center justify-content-center">
									<a class="add-btn" href=""><span class="ti-bag"></span></a>
									<span class="add-text text-uppercase">Add to Bag</span>
								</div>
							</div>
						</div>
                        </OwlCarousel>
					{/* </div> */}
				</div>


        </div>
      </div>
    </section>
  </>
  
  )
}

export default ExclusiveDeal;

 