import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Body from "../../Home/Body";
import "@testing-library/jest-dom";

describe("Testing search functionality", () => {
  beforeEach(async () => {
    navigator.geolocation.getCurrentPosition.mockImplementationOnce((success) =>
      success({
        coords: {
          latitude: 12.34,
          longitude: 56.78,
        },
      })
    );
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render body component and search for Burger", () => {
    const resCardsBeforeSearch = screen.getAllByTestId("res-card");

    const searchBtn = screen.getByTestId("search-btn");
    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "Burger" } }); // Burger
    fireEvent.click(searchBtn);

    // screen should load cards with burgers
    const resCardsAfterSearch = screen.getAllByTestId("res-card");

    expect(resCardsAfterSearch.length).not.toBe(resCardsBeforeSearch.length);
    expect(resCardsBeforeSearch.length).toBeGreaterThan(0);
    expect(resCardsAfterSearch.length).toBeGreaterThan(0);
  });
});
