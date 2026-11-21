import React from 'react'
import EmptyCart from "../assets/empty_cart.svg"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Cart = ({ cart, changeQuantity, removeItem }) => {
    function cartTotal() {
        let totalBooksPrice = 0
        cart.forEach(book => {
            totalBooksPrice += ((book.salePrice || book.originalPrice) * book.quantity)
        })
        return totalBooksPrice

    }
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                        </div>
                        <div className="cart__body">
                            {
                                cart.map(book => {
                                    return (
                                        <div className="cart__item">
                                            <div className="cart__book">
                                                <img src={book.url}
                                                    className="cart__book--img"
                                                    alt="" />
                                                <div className="cart__book--info">
                                                    <span className="cart__book--title">
                                                        {book.title}
                                                    </span>
                                                    <span className="cart__book--price">
                                                        ${(book.salePrice || book.originalPrice).toFixed(2)}
                                                    </span>
                                                    <button className="cart__book--remove" onClick={() => removeItem(book)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input type="number" min={0} max={99} className="cart__input"
                                                    value={book.quantity}
                                                    onChange={(event) => changeQuantity(book, event.target.value)} />
                                            </div>
                                            <div className="cart__total">
                                                $
                                                {((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {cart.length == 0 && (
                            <div className="cart__empty">
                                <img src=/*{EmptyCart}*/ "https://media.tenor.com/nEP6ovplEd8AAAAi/so-really.gif"
                                    alt="" className="cart__empty--img" />
                                <h2>You don't have any books in your cart!</h2>
                                <Link to="/books">
                                    <button className="btn">Browse Books</button>
                                </Link>
                            </div>
                        )}
                    </div>
                    {cart.length > 0 && (
                        <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${
                                    (cartTotal() * 0.9).toFixed(2)
                                }
                                </span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>${
                                    (cartTotal() * 0.1).toFixed(2)
                                }
                                </span>
                            </div>
                            <div className="total__item total__price">
                                <span>Price</span>
                                <span>${
                                    cartTotal().toFixed(2)
                                }
                                </span>
                            </div>
                            <button className="btn btn__checkout no-cursor"
                                onClick={() => alert(`\nThis feature is unavailable.\n\n Please try again at a later time.`)}>
                                Proceed to Checkout
                            </button>
                        </div>
                    )}
                </div >
            </main >
        </div >
    )
}

export default Cart