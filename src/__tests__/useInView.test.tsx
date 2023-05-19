import useInView from "../hooks/useInView";
import { renderHook } from "@testing-library/react";

const IntersectionObserverMock = () => ({
  observe: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(IntersectionObserverMock);

describe("hooks/useInView.ts", () => {
  it("デフォルト状態のテスト", () => {
    const { result } = renderHook(() => useInView());

    expect(result.current).toEqual(
      expect.objectContaining({
        ref: expect.any(Function),
        entry: undefined,
        isIntersecting: false,
      }),
    );
  });
});
