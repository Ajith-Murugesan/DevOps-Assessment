import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
import Header from "../src/Header"

describe("Emoji Search Testleri", () => {

    test("Başlık render edilmeli", () => {
        render(<Header />);
        const headerText = screen.getByText(/Emoji Search/i);
        expect(headerText).toBeInTheDocument();
        });

    test("Emoji listesi render edilmeli", () => {
        render(<App />);
        const items = screen.getAllByTestId("row");
        expect(items.length).toEqual(20);
        });

    test("Filtreleme işlemi yapıldığında emoji listesi render edilmeli", () => {
        render(<App />);
        const inputText = screen.getByText("1234");
        expect(inputText).toBeInTheDocument("1234");
        });
        
    test("Emojiye tıklandığında emoji kopyalanmalı", () => {
        render(<App />);
        const clicks = screen.getAllByTestId("row");
        expect(clicks[0]).toHaveAttribute("data-clipboard-text");
        });

  });
    