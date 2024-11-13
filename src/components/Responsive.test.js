import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Responsive from "./Responsive";

describe("Home", () => {
  it("renders Responsive", () => {
    render(<Responsive />);

    expect(screen.getByText(/Saint Mopierre is a large city, known for being the birthplace of a music genre./i)).toBeInTheDocument();
    expect(screen.getByText(/Eulake is a small town situated besides a lake. It is known for its mining heritage./i)).toBeInTheDocument();
    expect(screen.getByText(/Prince Loeilles is a large town, known for the battle of Prince Loeilles./i)).toBeInTheDocument();
  });
});
