import React from "react";

const MenuDisplay = ({ title, description, price}) => {
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Price:", description);


    return (
        <main className="menu-item">
            <div className="container">
                <div className="row">
                    {/* {
                        items.map((item) => {
                            const { id, title, description, price } = item;
                            return( */}
                                <div className="col-6">
                                {/* <div className="col-6" key={id}> */}
                                    <article className="main-div">
                                        <div className="content">
                                            <div className="title">
                                                <h4>{title}</h4>
                                                <h6>${price}</h6>
                                            </div>
                                            <p>{description}</p>
                                        </div>
                                    </article>
                                </div>
                            {/* );
                        })} */}
                </div>
            </div>
        </main>
    );
};

export default MenuDisplay;
