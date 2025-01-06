import { render, screen } from "@testing-library/react";
import ResCard, { withEnhancementsResCard } from "../../Home/ResCard";
import rescardMockData from "../Mocks/resCardMockData.json";
import "@testing-library/jest-dom";

it("Should render restaurant card component with props data", () => {
  render(<ResCard resData={rescardMockData} />);
  expect(screen.getByText("Delhi Dastarkhwan Restaurant")).toBeInTheDocument();
});

it("Should render HOC for res card", () => {
  const ResCardEnhanced = withEnhancementsResCard(ResCard);
  render(<ResCardEnhanced resData={rescardMockData} />);
  expect(screen.getByText("Delhi Dastarkhwan Restaurant")).toBeInTheDocument();
});
