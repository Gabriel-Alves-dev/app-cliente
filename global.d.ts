declare global {
  interface Window {
    BX?: {
      LiveChat?: {
        openLiveChat: () => void;
      };
    };
  }
}

export {};
