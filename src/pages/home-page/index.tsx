/* eslint-disable implicit-arrow-linebreak */
// @packages
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React, {
  FC,
  useEffect,
  useState,
} from 'react';
import Message from '../../components/message';

interface IData {
  [key: string]: string
}

const data: IData = {
  Germany: 'Berlin', Azerbaijan: 'Baku', Poland: 'Warszawa', 'Papua New Guinea': 'Port Moresby',
};

const HomePage: FC = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<boolean>(false);
  const [dataTransformed, setDataTransformed] = useState<any>([]);

  const transformData = (newData) => Object.entries(newData).flat().sort(() => 0.5 - Math.random());

  useEffect(() => {
    setDataTransformed(transformData(data));
  }, [data]);

  useEffect(() => {
    if (selectedValues.length === 2) {
      const country = Object
        .keys(data)
        .find((key) => data[key] === selectedValues[0]) || selectedValues[0];
      const city = data[selectedValues[1]] || selectedValues[1];

      if (data[country] === city) {
        delete data[country];
        setDataTransformed(transformData(data));
        setSelectedValues([]);
      } else {
        setWrongAnswers(true);
      }
    }
  }, [selectedValues]);

  const handleOnClick = (selectedValue: string) => {
    if (wrongAnswers) {
      setSelectedValues([]);
      setWrongAnswers(false);
      setSelectedValues([selectedValue]);
    } else {
      setSelectedValues([...selectedValues, selectedValue]);
    }
  };

  const getButtonColor = (buttonValue) => {
    if (selectedValues.includes(buttonValue) && !wrongAnswers) return 'blue';
    if (selectedValues.includes(buttonValue) && wrongAnswers) return 'red';

    return null;
  };

  if (dataTransformed.length <= 0) return <Message message="Congratulations!" />;

  return (
    <Container maxWidth="sm">
      {dataTransformed.map((item) => (
        <Button
          color="inherit"
          key={item}
          onClick={() => handleOnClick(item)}
          sx={{ m: 1, backgroundColor: getButtonColor(item) }}
          variant="contained"
        >
          {item}
        </Button>
      ))}
    </Container>
  );
};

export default HomePage;
