import {render, waitFor, fireEvent} from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu"
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/Data";
import "@testing-library/jest-dom"
import Header from "../Header"



global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MENU_DATA);
        } 
    })
});


test("Add Items to Cart", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/> 
                <RestaurantMenu/>
            </Provider>
        </StaticRouter>
    );
    
    await waitFor(() => expect(body.getAllByTestId("addBtn")));

    const addBtn = body.getAllByTestId("addBtn")

    fireEvent.click(addBtn[0])

    const cart = body.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-1");
    // console.log(shimmer)
});