import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { renderHook } from "@testing-library/react";

describe("useIntersectionObserverのテスト", () => {
  it("仮テスト", () => {
    const { result } = renderHook(() => useIntersectionObserver());
    expect(result.current).toStrictEqual({});
  });
});
