import React from 'react'
import PageBanner from './components/PageBanner'

export default function blog() {
  return (
    <>
    <PageBanner page="Blog" header="Blog Page" />
    <>
  {/*================Blog Categorie Area =================*/}
  <section className="blog_categorie_area">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="categories_post">
            <img src="assets/img/blog/cat-post/cat-post-3.jpg" alt="post" />
            <div className="categories_details">
              <div className="categories_text">
                <a href="blog-details.html">
                  <h5>Social Life</h5>
                </a>
                <div className="border_line" />
                <p>Enjoy your social life together</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="categories_post">
            <img src="assets/img/blog/cat-post/cat-post-2.jpg" alt="post" />
            <div className="categories_details">
              <div className="categories_text">
                <a href="blog-details.html">
                  <h5>Politics</h5>
                </a>
                <div className="border_line" />
                <p>Be a part of politics</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="categories_post">
            <img src="assets/img/blog/cat-post/cat-post-1.jpg" alt="post" />
            <div className="categories_details">
              <div className="categories_text">
                <a href="blog-details.html">
                  <h5>Food</h5>
                </a>
                <div className="border_line" />
                <p>Let the food be finished</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================Blog Categorie Area =================*/}
  {/*================Blog Area =================*/}
  <section className="blog_area">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog_left_sidebar">
            <article className="row blog_item">
              <div className="col-md-3">
                <div className="blog_info text-right">
                  <div className="post_tag">
                    <a href="#">Food,</a>
                    <a className="active" href="#">
                      Technology,
                    </a>
                    <a href="#">Politics,</a>
                    <a href="#">Lifestyle</a>
                  </div>
                  <ul className="blog_meta list">
                    <li>
                      <a href="#">
                        Mark wiens
                        <i className="lnr lnr-user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        12 Dec, 2018
                        <i className="lnr lnr-calendar-full" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        1.2M Views
                        <i className="lnr lnr-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        06 Comments
                        <i className="lnr lnr-bubble" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="blog_post">
                  <img src="assets/img/blog/main-blog/m-blog-1.jpg" alt="" />
                  <div className="blog_details">
                    <a href="single-blog.html">
                      <h2>Astronomy Binoculars A Great Alternative</h2>
                    </a>
                    <p>
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction.
                    </p>
                    <a href="single-blog.html" className="white_bg_btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <article className="row blog_item">
              <div className="col-md-3">
                <div className="blog_info text-right">
                  <div className="post_tag">
                    <a href="#">Food,</a>
                    <a className="active" href="#">
                      Technology,
                    </a>
                    <a href="#">Politics,</a>
                    <a href="#">Lifestyle</a>
                  </div>
                  <ul className="blog_meta list">
                    <li>
                      <a href="#">
                        Mark wiens
                        <i className="lnr lnr-user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        12 Dec, 2018
                        <i className="lnr lnr-calendar-full" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        1.2M Views
                        <i className="lnr lnr-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        06 Comments
                        <i className="lnr lnr-bubble" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="blog_post">
                  <img src="assets/img/blog/main-blog/m-blog-2.jpg" alt="" />
                  <div className="blog_details">
                    <a href="single-blog.html">
                      <h2>The Basics Of Buying A Telescope</h2>
                    </a>
                    <p>
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction.
                    </p>
                    <a href="single-blog.html" className="white_bg_btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <article className="row blog_item">
              <div className="col-md-3">
                <div className="blog_info text-right">
                  <div className="post_tag">
                    <a href="#">Food,</a>
                    <a className="active" href="#">
                      Technology,
                    </a>
                    <a href="#">Politics,</a>
                    <a href="#">Lifestyle</a>
                  </div>
                  <ul className="blog_meta list">
                    <li>
                      <a href="#">
                        Mark wiens
                        <i className="lnr lnr-user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        12 Dec, 2018
                        <i className="lnr lnr-calendar-full" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        1.2M Views
                        <i className="lnr lnr-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        06 Comments
                        <i className="lnr lnr-bubble" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="blog_post">
                  <img src="assets/img/blog/main-blog/m-blog-3.jpg" alt="" />
                  <div className="blog_details">
                    <a href="single-blog.html">
                      <h2>The Glossary Of Telescopes</h2>
                    </a>
                    <p>
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction.
                    </p>
                    <a href="single-blog.html" className="white_bg_btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <article className="row blog_item">
              <div className="col-md-3">
                <div className="blog_info text-right">
                  <div className="post_tag">
                    <a href="#">Food,</a>
                    <a className="active" href="#">
                      Technology,
                    </a>
                    <a href="#">Politics,</a>
                    <a href="#">Lifestyle</a>
                  </div>
                  <ul className="blog_meta list">
                    <li>
                      <a href="#">
                        Mark wiens
                        <i className="lnr lnr-user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        12 Dec, 2018
                        <i className="lnr lnr-calendar-full" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        1.2M Views
                        <i className="lnr lnr-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        06 Comments
                        <i className="lnr lnr-bubble" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="blog_post">
                  <img src="assets/img/blog/main-blog/m-blog-4.jpg" alt="" />
                  <div className="blog_details">
                    <a href="single-blog.html">
                      <h2>The Night Sky</h2>
                    </a>
                    <p>
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction.
                    </p>
                    <a href="single-blog.html" className="white_bg_btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <article className="row blog_item">
              <div className="col-md-3">
                <div className="blog_info text-right">
                  <div className="post_tag">
                    <a href="#">Food,</a>
                    <a className="active" href="#">
                      Technology,
                    </a>
                    <a href="#">Politics,</a>
                    <a href="#">Lifestyle</a>
                  </div>
                  <ul className="blog_meta list">
                    <li>
                      <a href="#">
                        Mark wiens
                        <i className="lnr lnr-user" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        12 Dec, 2018
                        <i className="lnr lnr-calendar-full" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        1.2M Views
                        <i className="lnr lnr-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        06 Comments
                        <i className="lnr lnr-bubble" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="blog_post">
                  <img src="assets/img/blog/main-blog/m-blog-5.jpg" alt="" />
                  <div className="blog_details">
                    <a href="single-blog.html">
                      <h2>Telescopes 101</h2>
                    </a>
                    <p>
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction.
                    </p>
                    <a href="single-blog.html" className="white_bg_btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <nav className="blog-pagination justify-content-center d-flex">
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">
                      <span className="lnr lnr-chevron-left" />
                    </span>
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    01
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    04
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    09
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Next">
                    <span aria-hidden="true">
                      <span className="lnr lnr-chevron-right" />
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_right_sidebar">
            <aside className="single_sidebar_widget search_widget">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Posts"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Search Posts'"
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="lnr lnr-magnifier" />
                  </button>
                </span>
              </div>
              {/* /input-group */}
              <div className="br" />
            </aside>
            <aside className="single_sidebar_widget author_widget">
              <img
                className="author_img rounded-circle"
                src="assets/img/blog/author.png"
                alt=""
              />
              <h4>Charlie Barber</h4>
              <p>Senior blog writer</p>
              <div className="social_icon">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-github" />
                </a>
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </div>
              <p>
                Boot camps have its supporters andit sdetractors. Some people do
                not understand why you should have to spend money on boot camp
                when you can get. Boot camps have itssuppor ters andits
                detractors.
              </p>
              <div className="br" />
            </aside>
            <aside className="single_sidebar_widget popular_post_widget">
              <h3 className="widget_title">Popular Posts</h3>
              <div className="media post_item">
                <img src="assets/img/blog/popular-post/post1.jpg" alt="post" />
                <div className="media-body">
                  <a href="blog-details.html">
                    <h3>Space The Final Frontier</h3>
                  </a>
                  <p>02 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="assets/img/blog/popular-post/post2.jpg" alt="post" />
                <div className="media-body">
                  <a href="blog-details.html">
                    <h3>The Amazing Hubble</h3>
                  </a>
                  <p>02 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="assets/img/blog/popular-post/post3.jpg" alt="post" />
                <div className="media-body">
                  <a href="blog-details.html">
                    <h3>Astronomy Or Astrology</h3>
                  </a>
                  <p>03 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="assets/img/blog/popular-post/post4.jpg" alt="post" />
                <div className="media-body">
                  <a href="blog-details.html">
                    <h3>Asteroids telescope</h3>
                  </a>
                  <p>01 Hours ago</p>
                </div>
              </div>
              <div className="br" />
            </aside>
            <aside className="single_sidebar_widget ads_widget">
              <a href="#">
                <img className="img-fluid" src="assets/img/blog/add.jpg" alt="" />
              </a>
              <div className="br" />
            </aside>
            <aside className="single_sidebar_widget post_category_widget">
              <h4 className="widget_title">Post Catgories</h4>
              <ul className="list cat-list">
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Technology</p>
                    <p>37</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Lifestyle</p>
                    <p>24</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Fashion</p>
                    <p>59</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Art</p>
                    <p>29</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Food</p>
                    <p>15</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Architecture</p>
                    <p>09</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex justify-content-between">
                    <p>Adventure</p>
                    <p>44</p>
                  </a>
                </li>
              </ul>
              <div className="br" />
            </aside>
            <aside className="single-sidebar-widget newsletter_widget">
              <h4 className="widget_title">Newsletter</h4>
              <p>
                Here, I focus on a range of items and features that we use in
                life without giving them a second thought.
              </p>
              <div className="form-group d-flex flex-row">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Enter email"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email'"
                  />
                </div>
                <a href="#" className="bbtns">
                  Subcribe
                </a>
              </div>
              <p className="text-bottom">You can unsubscribe at any time</p>
              <div className="br" />
            </aside>
            <aside className="single-sidebar-widget tag_cloud_widget">
              <h4 className="widget_title">Tag Clouds</h4>
              <ul className="list">
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Architecture</a>
                </li>
                <li>
                  <a href="#">Fashion</a>
                </li>
                <li>
                  <a href="#">Food</a>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Lifestyle</a>
                </li>
                <li>
                  <a href="#">Art</a>
                </li>
                <li>
                  <a href="#">Adventure</a>
                </li>
                <li>
                  <a href="#">Food</a>
                </li>
                <li>
                  <a href="#">Lifestyle</a>
                </li>
                <li>
                  <a href="#">Adventure</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================Blog Area =================*/}
</>

    </>
  )
}

