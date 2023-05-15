import useInView from "../hooks/useInView";
import { renderHook } from "@testing-library/react";

describe("useInViewフックのテスト", () => {
  it("仮テスト", () => {
    expect(() => {
      renderHook(() => useInView());
    }).not.toThrow();
  });
});
