import { render } from "@testing-library/react";
import Header from "../Header.js";
import { Provider } from "react-redux";
import store from "../../utils/Store.js";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  // load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo")
  console.log(logo[0])
  
  expect(logo[0].src).toBe("http://localhost/dummy.png")

});

test("cart should have zero items", () => {
  // load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart")
  
  expect(cart.innerHTML).toBe("Cart-0")

});
