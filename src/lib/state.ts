import { atom } from "recoil";

export const selectedState = atom({
    key: "selected",
    default: [] as boolean[],
});

export const resultsState = atom({
    key: "results",
    default: -1 as number,
});

export const pairingState = atom({
    key: "pairing",
    default: [] as Array<{
        textId: number;
        deviceId: number;
    }>,
});

export const settingState = atom({
    key: "settings",
    default: {} as Settings
});