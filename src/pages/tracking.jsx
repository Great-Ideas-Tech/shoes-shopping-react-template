import React from "react";
import PageBanner from "./components/PageBanner";

export default function tracking() {
  return (
    <>
      <PageBanner
        page="
Fashon Category"
        header="Order Tracking"
      />
      <>
        {/*================Tracking Box Area =================*/}
        <section className="tracking_box_area section_gap">
          <div className="container">
            <div className="tracking_box_inner">
            <p>
  To track your order please enter your Order ID in the box below
  and press the &quot;Track&quot; button. This was given to you on your
  receipt and in the confirmation email you should have received.
</p>

              <form
                className="row tracking_form"
                action="#"
                method="post"
                noValidate="novalidate"
              >
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="order"
                    name="order"
                    placeholder="Order ID"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Order ID'"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Billing Email Address"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Billing Email Address'"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <button type="submit" value="submit" className="primary-btn">
                    Track Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*================End Tracking Box Area =================*/}
      </>
    </>
  );
}
