import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../../utils/appStore";
import Header from "../../Home/Header";
import "@testing-library/jest-dom";
import ItemList from "../../Restaurant/ItemList";
import Cart from "../../Cart/Cart";

describe("Should add items into the cart", () => {
  it("Should load cart", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <ItemList
              menuItems={[
                {
                  id: "1",
                  title: "Paneer tikka",
                  description:
                    "Serves 2 | Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                  price: "14000",
                  img: "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg",
                  isVeg: true,
                },
                {
                  id: "2",
                  title: "Paneer 65",
                  description:
                    "Serves 2 | Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                  price: "16000",
                  img: "https://i.ytimg.com/vi/gcqZteUmQko/maxresdefault.jpg",
                  isVeg: true,
                },
                {
                  id: "3",
                  title: "Chicken 65",
                  description:
                    "Serves 2 | Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                  price: "18000",
                  img: "https://motionsandemotions.com/wp-content/uploads/2023/04/Untitled-design-14-1.jpg",
                  isVeg: false,
                },
                {
                  id: "11",
                  title: "Paneer Deadpool",
                  description:
                    "Serves 2 | Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                  price: "13000",
                  img: "https://milkandcardamom.com/wp-content/uploads/2018/08/Kadai-Paneer-1.jpg",
                  isVeg: true,
                },
                {
                  id: "12",
                  title: "Paneer 69",
                  description:
                    "Serves 2 | Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                  price: "15000",
                  img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-d4LzPWAxB4ZNfHukumWIuEpq20H56BDhDM7v6vW4Uvx9PKkamXV_pcT_i1KcLj4hKHphcP2xG-nuASkQJBEby2b4XF3xoKAf3bIPrwewv132yUWVKDa3F0tAVcsxKk_Qm4D1Wy28pAQ/s400/khoya+matar+paneer.JPG",
                  isVeg: true,
                },
                {
                  id: "13",
                  title: "Gives you wings!!",
                  description:
                    "Serves 2 | Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                  price: "19000",
                  img: "https://iamhomesteader.com/wp-content/uploads/2023/03/sweet-chili-chicken-5.jpg",
                  isVeg: false,
                },
                {
                  id: "21",
                  title: "Sleep!!!",
                  description:
                    "Serves 2 | Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                  price: "10000",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd1K1m3lachfVkt6jrO6QVcSX9fd5fPEsntg&s",
                  isVeg: true,
                },
                {
                  id: "22",
                  title: "Wake up!",
                  description:
                    "Serves 2 | Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
                  price: "12000",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbzm0wnlSib-K9HNN5SiFDVpU5SSS5KXAAQ&s",
                  isVeg: true,
                },
              ]}
            />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    const cartBtnBefore = screen.getByText("🛒 0 items");
    expect(cartBtnBefore).toBeInTheDocument();

    const menuItems = screen.getAllByTestId("menuitem-add-to-cart-btn");
    menuItems.forEach((item) => {
      fireEvent.click(item);
    });

    const cartBtnAfter = screen.getByText(`🛒 ${menuItems.length} items`);
    expect(cartBtnAfter).toBeInTheDocument();
  });
});
