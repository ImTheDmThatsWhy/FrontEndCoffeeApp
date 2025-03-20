import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import "./review.css";

const CreateReview = async () => {
    try {
        await api.post("/review/post", newReview);
        setNewReview({ displayname: "", description: "", rating: "" });
    } catch (error) {
        if (error.response?.data)
            console.error("Error creating review:", error.response?.data);
        console.error("Error creating review:", error);
    }

    return (
        <main>
            <div className="reviewContainer">
                <h1 className="reviewHeading">
                    Write a Review <GiCoffeeCup />
                </h1>

                <div className="reviewinputs">
                    <form className="input">
                        <input
                            displayname="text"
                            placeholder="displayname"
                            value={newReview.displayname}
                            onChange={(e) =>
                                setNewReview({
                                    ...newReview,
                                    displayname: e.target.value,
                                })
                            }
                        />
                    </form>
                    <div className="reviewinputs">
                        <input
                            type="description"
                            placeholder="description"
                            value={newReview.description}
                            onChange={(e) =>
                                setNewReview({
                                    ...newReview,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="Submit_container">
                    <div className="submit">
                        <button className="button" onClick={CreateReview}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CreateReview;
