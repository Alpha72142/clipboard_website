import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FirstHeroSection from "./component/FirstHeroSection";

describe("FirstHeroSection Component", () => {
  const mockData = {
    imageUrl: "test-image.jpg",
    imageUrlStyle: "test-image-class",
    header: "Test Header",
    description: "This is a test description",
  };

  test("renders the image with correct src and class", () => {
    render(<FirstHeroSection firstSectionInfo={mockData} />);
    const image = screen.getByAltText(""); // Fix: Use getByAltText instead

    expect(image).toHaveAttribute("src", mockData.imageUrl);
    expect(image).toHaveClass(mockData.imageUrlStyle);
  });

  test("renders the correct header and description", () => {
    render(<FirstHeroSection firstSectionInfo={mockData} />);
    expect(screen.getByText(mockData.header)).toBeInTheDocument();
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
  });

  test("renders download buttons with correct text", () => {
    render(<FirstHeroSection firstSectionInfo={mockData} />);

    const iosButton = screen.getByText(/Download for iOS/i);
    const macButton = screen.getByText(/Download for Mac/i);

    expect(iosButton).toBeInTheDocument();
    expect(macButton).toBeInTheDocument();
  });
});
