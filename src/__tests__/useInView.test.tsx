import React from "react";
import useInView from "../hooks/useInView";
import { render, renderHook } from "@testing-library/react";

const HookWrapper = () => {
  const { ref, isIntersecting } = useInView();
  return (
    <div ref={ref}>
      <p data-testid="isIntersecting">{isIntersecting ? "true" : "false"}</p>
    </div>
  );
};

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
  it("レンダーテスト", () => {
    const { getByTestId } = render(<HookWrapper />);
    const isIntersecting = getByTestId("isIntersecting");

    expect(isIntersecting.textContent).toBe("false");
  });
});
