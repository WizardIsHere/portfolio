import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";

// Wrap the store in 'immer' to enable direct state mutation
const useWindowStore = create(
    immer((set) => ({
        // State
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        // Actions
        openWindow: (windowKey, data = null) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return; // Guard clause

                win.isOpen = true;
                win.zIndex = state.nextZIndex;
                win.data = data ?? win.data;
                state.nextZIndex += 1;
            }),

            closeWindow: (windowKey) =>
                set((state) => {
                        console.log("Closing window:", windowKey); // DEBUG LINE
                        const win = state.windows[windowKey];
                        if (!win) {
                                console.error("Window key not found:", windowKey);
                                return;
                        }
                        console.log("Window key found:", windowKey, "isOpen", win.isOpen);
                        win.isOpen = false;

                        win.zIndex = INITIAL_Z_INDEX;
                        win.data = null;
                }),

        focusWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;

                // Only update if it's not already the top window
                win.zIndex = state.nextZIndex;
                state.nextZIndex += 1;
            }),
    }))
);

export default useWindowStore;