import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const isSidebarOpenRecoilState = atom<boolean>({
  key: "isSidebarOpenRecoilState",
  default: true,
});

export const useIsSidebarOpenState = () =>
  useRecoilValue(isSidebarOpenRecoilState);

export const useIsSidebarOpenStateMutator = () => {
  const setState = useSetRecoilState(isSidebarOpenRecoilState);

  const setIsSidebarOpen = useCallback(
    (isSidebarOpen: boolean) => setState(isSidebarOpen),
    [setState]
  );

  const toggleIsSidebarOpen = useCallback(
    () => setState((state) => !state),
    [setState]
  );

  return {
    setIsSidebarOpen,
    toggleIsSidebarOpen,
  };
};
