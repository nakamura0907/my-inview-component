import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { renderHook } from "@testing-library/react";

describe("useIntersectionObserverのテスト", () => {
  it("仮テスト", () => {
    expect(() => {
      renderHook(() => useIntersectionObserver());
    }).not.toThrow();
  });
});
