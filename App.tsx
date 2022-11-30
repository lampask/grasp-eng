import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import LoadingScreen from './src/components/LoadingScreen';
import { Intro } from './src/layout/Intro';
import { Main } from './src/layout/Main';

export default function App() {
  const textState = useState(0);
  const [wasIntroduced, setIntro] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/lampask/grasp-eng/dev/texts.json')
      .then((response) => response.json())
      .then((json) => {
        (json as Data).texts = (json as Data).texts.sort(() => Math.random() - 0.5);
        setData(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <RecoilRoot>
      {isLoading ? <LoadingScreen /> : (
        <>
          <Main data={data} textState={textState} />
          {wasIntroduced ? <></> : <Intro introduced={setIntro} />}
        </>
      )}
    </RecoilRoot>
  );
}