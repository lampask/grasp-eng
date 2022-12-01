type Data = {
    guides: Array<Guide>;
    texts: Array<ChallengeText>;
    intro: Intro;
    results: Array<Result>;
    settings: Settings;
} 

type Result = {
    breakpoint: number;
    message: string;
}

type Settings = {
    rhetoricHeadline: string;
    checkAnswersButton: string;
    nextButton: string;
    correctColor: string;
    incorrectColor: string;
    primaryColor: string;
    secondaryColor: string;
}

type Intro = {
    title: string;
    content: string;
    buttonText: string;
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

