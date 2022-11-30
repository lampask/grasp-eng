type Data = {
    guides: Array<Guide>;
    texts: Array<ChallengeText>;
} 

type Guide = {
    name: string;
    description: string;
};

type ChallengeText = {
    name: string;
    text: string;
    author: string;
    devices: Array<Device>
};

type Device = {
    name: number;
    range: Array<number>;
};