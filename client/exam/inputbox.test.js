// // InputBox.test.js
// import { render, screen, fireEvent } from "@testing-library/react"
// import InputBox from "./InputBox"

// test("renders label and input correctly", () => {
//   render(<InputBox label="Name" value="" onChange={() => {}} />)
//   expect(screen.getByText("Name")).toBeInTheDocument()
//   expect(screen.getByRole("textbox")).toBeInTheDocument()
// })

// test("calls onChange when input changes", () => {
//   const handleChange = jest.fn()
//   render(<InputBox label="Name" value="" onChange={handleChange} />)
//   const input = screen.getByRole("textbox")
//   fireEvent.change(input, { target: { value: "Sue" } })
//   expect(handleChange).toHaveBeenCalled()
// })
