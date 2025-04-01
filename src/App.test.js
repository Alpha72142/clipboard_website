import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

import FirstHeroSection from "./component/FirstHeroSection";

describe("testing", () => {
  const mockProps = {
    firstSectionInfo: {
      imageUrl: "/test-image.jpg",
      imageUrlStyle: "custom-style",
      header: "Test Header",
      description: "This is a test description.",
    },
  };
  test("renders component with provided props", () => {
    render(<FirstHeroSection {...mockProps} />);

    // Check if image renders correctly
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockProps.firstSectionInfo.imageUrl);
    expect(image).toHaveClass(mockProps.firstSectionInfo.imageUrlStyle);

    // Check if header is rendered
    expect(
      screen.getByText(mockProps.firstSectionInfo.header)
    ).toBeInTheDocument();

    // Check if description is rendered
    expect(
      screen.getByText(mockProps.firstSectionInfo.description)
    ).toBeInTheDocument();

    // Check if buttons are present
    expect(screen.getByText("Download for iOS")).toBeInTheDocument();
    expect(screen.getByText("Download for Mac")).toBeInTheDocument();
  });
});

