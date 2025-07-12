import { create } from '@ethan-utils/zustand';

interface CaptchaState {
  countdown: number;
  setCountdown: (n: number) => void;
  startTime: number | null;
  setStartTime: (t: number | null) => void;
  clear: () => void;
}

export const useCaptchaStore = create<CaptchaState>(
  (set) => ({
    countdown: 0,
    setCountdown: (n) =>
      set((state) => {
        state.countdown = n;
      }),
    startTime: null,
    setStartTime: (t) =>
      set((state) => {
        state.startTime = t;
      }),
    clear: () =>
      set((state) => {
        state.countdown = 0;
        state.startTime = null;
      }),
  }),
  { name: 'captcha-timer', storage: localStorage },
);
