import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../../Home/Header";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Testing header component", () => {
  // it("Should load logo", () => {
  //   render(
  //     <BrowserRouter>
  //       <Provider store={appStore}>
  //         <Header />
  //       </Provider>
  //     </BrowserRouter>
  //   );

  //   expect(screen.getAllByRole("img")).toBeInTheDocument();
  // });
  // it("Should load cart", () => {
  //   render(
  //     <BrowserRouter>
  //       <Provider store={appStore}>
  //         <Header />
  //       </Provider>
  //     </BrowserRouter>
  //   );
  //   expect(screen.getAllByText("cart")).toBeInTheDocument();
  // });

  it("Should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByTestId("login-btn", { name: "Login" });

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByTestId("login-btn", { name: "Logout" });

    expect(logoutBtn).toBeInTheDocument();
  });
});
