import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsbeforeSearch=screen.getAllByTestId("resCard");
  expect(cardsbeforeSearch.length).toBe(8);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  
  const searchInput=screen.getByTestId("searchInput")
  
  fireEvent.change(searchInput,{target:{value:"burger"}});
  
  fireEvent.click(searchBtn);

  const cardsAfterSearch=screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(1)





//   expect(searchBtn).toBeInTheDocument();
});
