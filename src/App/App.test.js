import React from 'react'
import { render, screen } from "@testing-library/react"
import App from "./App"
describe("App Component", () => {
    it("Should render the App correctly", () => {
        render(<App />)
    })

})