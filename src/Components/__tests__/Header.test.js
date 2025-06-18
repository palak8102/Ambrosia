import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should render header componant with a login button",() =>{

    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name:"login"});

    expect(loginButton).toBeInTheDocument();
});

it("should render header componant with a cart item",() =>{

    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems=screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout on click",() =>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name:"login"});

    fireEvent.click(loginButton);

    const logoutButton=screen.getByRole("button",{name:"logout"});

    expect(logoutButton).toBeInTheDocument();
});