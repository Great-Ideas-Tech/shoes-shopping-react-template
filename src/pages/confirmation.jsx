import React from 'react'
import PageBanner from './components/PageBanner'

export default function confirmation() {
  return (
    <>
    <PageBanner
        page="
Confirmation"
        header="Confirmation"
      />

<>
  {/*================Order Details Area =================*/}
  <section className="order_details section_gap">
    <div className="container">
      <h3 className="title_confirmation">
        Thank you. Your order has been received.
      </h3>
      <div className="row order_d_inner">
        <div className="col-lg-4">
          <div className="details_item">
            <h4>Order Info</h4>
            <ul className="list">
              <li>
                <a href="#">
                  <span>Order number</span> : 60235
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Date</span> : Los Angeles
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Total</span> : USD 2210
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Payment method</span> : Check payments
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="details_item">
            <h4>Billing Address</h4>
            <ul className="list">
              <li>
                <a href="#">
                  <span>Street</span> : 56/8
                </a>
              </li>
              <li>
                <a href="#">
                  <span>City</span> : Los Angeles
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Country</span> : United States
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Postcode </span> : 36952
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="details_item">
            <h4>Shipping Address</h4>
            <ul className="list">
              <li>
                <a href="#">
                  <span>Street</span> : 56/8
                </a>
              </li>
              <li>
                <a href="#">
                  <span>City</span> : Los Angeles
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Country</span> : United States
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Postcode </span> : 36952
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="order_details_table">
        <h2>Order Details</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Pixelstore fresh Blackberry</p>
                </td>
                <td>
                  <h5>x 02</h5>
                </td>
                <td>
                  <p>$720.00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Pixelstore fresh Blackberry</p>
                </td>
                <td>
                  <h5>x 02</h5>
                </td>
                <td>
                  <p>$720.00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Pixelstore fresh Blackberry</p>
                </td>
                <td>
                  <h5>x 02</h5>
                </td>
                <td>
                  <p>$720.00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Subtotal</h4>
                </td>
                <td>
                  <h5 />
                </td>
                <td>
                  <p>$2160.00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Shipping</h4>
                </td>
                <td>
                  <h5 />
                </td>
                <td>
                  <p>Flat rate: $50.00</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Total</h4>
                </td>
                <td>
                  <h5 />
                </td>
                <td>
                  <p>$2210.00</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  {/*================End Order Details Area =================*/}
</>

    </>
  )
}

 