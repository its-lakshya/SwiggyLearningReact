import {render, waitFor, fireEvent} from "@testing-library/react";
import Body from "../Body"
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { RASTAURANT_DATA } from "../../mocks/Data";
import "@testing-library/jest-dom"



global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RASTAURANT_DATA);
        } 
    })
});


test("Show shimmer on HomePage", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    
    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(15);
    // console.log(shimmer)
});

test("Restraunt should load on HomePage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    
    await waitFor(() => expect(body.getByTestId('search-btn')))

    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(15);
    // console.log(shimmer)
});

test("Search for string on HomePage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    
    await waitFor(() => expect(body.getByTestId("search-btn")));

    const input = body.queryByTestId("search-input");
    fireEvent.change(input,
        {target:{
        value:"Darbar",
    },})

    const searchBtn=body.getByTestId("search-btn")

    fireEvent.click(searchBtn)

    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(2);
    // console.log(shimmer)
});