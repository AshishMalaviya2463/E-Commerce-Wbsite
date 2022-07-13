import React from 'react'
import { useState } from 'react'

const Product = () => {

    const [search, setSearch] = useState([]);

    const productData = [
        {
            image: 'assets/images/p1.png',
            name: "Men's Shirt",
            price: "$75"
        },
        {
            image: 'assets/images/p2.png',
            name: "Men's Shirt",
            price: "$80"
        },
        {
            image: 'assets/images/p3.png',
            name: "Women's Dress",
            price: "$68"
        },
        {
            image: 'assets/images/p4.png',
            name: "Women's Dress",
            price: "$70"
        },
        {
            image: 'assets/images/p5.png',
            name: "Women's Dress",
            price: "$70"
        },
        {
            image: 'assets/images/p6.png',
            name: "Women's Dress",
            price: "$58"
        },
        {
            image: 'assets/images/p7.png',
            name: "Women's Dress",
            price: "$80"
        },
        {
            image: 'assets/images/p8.png',
            name: "Men's Shirt",
            price: "$68"
        },
        {
            image: 'assets/images/p9.png',
            name: "Men's Shirt",
            price: "$65"
        },
        {
            image: 'assets/images/p10.png',
            name: "Men's Shirt",
            price: "$65"
        },
        {
            image: 'assets/images/p11.png',
            name: "Men's Shirt",
            price: "$65"
        }
    ]

    const handleSearch = (val) => {

        const srData = productData.filter((d) => (
            d.name.toLocaleLowerCase().includes(val.toLocaleLowerCase()) ||
            d.price.includes(val)
        ))

        setSearch(srData)
    }

    const finalData = search.length > 0 ? search : productData;

    return (
        <>
            <div>
                {/* inner page section */}
                <section className="inner_page_head">
                    <div className="container_fuild">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="full">
                                    <h3>Product Grid</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end inner page section */}
                {/* product section */}
                <section className="product_section layout_padding">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>
                                Our <span>products</span>
                            </h2>
                            <form className="row g-3">
                                <div className="col-auto">
                                    <input type="search" className="form-control" id="inputsearch" placeholder="Search Here" onChange={(e) => handleSearch(e.target.value)} />
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary mb-3">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            {
                                finalData.map((d) => {
                                    return (
                                        <div className="col-sm-6 col-md-4 col-lg-3" key={d.image}>
                                            <div className="box">
                                                <div className="option_container">
                                                    <div className="options">
                                                        <a href className="option1">
                                                            Add To Cart
                                                        </a>
                                                        <a href className="option2">
                                                            Buy Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="img-box">
                                                    <img src={d.image} alt="" />
                                                </div>
                                                <div className="detail-box">
                                                    <h5>
                                                        {d.name}
                                                    </h5>
                                                    <h6>
                                                        {d.price}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="btn-box">
                            <a href>
                                View All products
                            </a>
                        </div>
                    </div>
                </section>
                {/* end product section */}
            </div>

        </>
    )
}

export default Product
