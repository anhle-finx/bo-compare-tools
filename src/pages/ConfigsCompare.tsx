import { Grid, Text, Button } from '@nextui-org/react';
import React from 'react';
import FilterOptions from '../components/FilterOptions';
import ComparisonPopup from '../components/ComparisonPopup';

type Props = {
  a: any;
};

export default function ConfigsCompare(props: Props) {
  let reader: FileReader;
  const [data1, setData1] = React.useState<any>();
  const [data2, setData2] = React.useState<any>();

  const [isViewDetails, setIsViewDetails] = React.useState<boolean>();
  const [objectLeft, setObjectLeft] = React.useState<any>({
    text: undefined, // can be used to pass a stringified JSON document instead
    json: {
      array: [1, 2, 3],
      boolean: true,
      color: '#82b92c',
      null: null,
      number: 123,
      object: { a: 'b', c: 'd' },
      string: 'Hello World',
    },
  });
  const [objectRight, setObjectRight] = React.useState<any>({
    text: undefined,
    json: {
      array: [1, 2, 3],
      null: null,
      number: 123,
      object: { a: 'b', c: 'd' },
      string: 'Hello World 2',
    },
  });

  const handleFileRead1 = () => {
    const content = reader.result;
    setData1(content);
  };

  const handleFileRead2 = () => {
    const content = reader.result;
    setData2(content);
  };

  const changeHandler1 = (e) => {
    const { files } = e.target;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      reader = new FileReader();
      reader.onloadend = handleFileRead1;
      reader.readAsText(file);
    }
  };

  const changeHandler2 = (e) => {
    const { files } = e.target;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      reader = new FileReader();
      reader.onloadend = handleFileRead2;
      reader.readAsText(file);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <Grid.Container
        gap={1}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 20,
          paddingLeft: '15%',
          paddingRight: '15%',
        }}
      >
        <Grid>
          <Text
            color="#610726"
            style={{ fontWeight: 'bold', marginBottom: 10 }}
          >
            Select File 1 (*.txt)
          </Text>
          <div>
            <input
              type="file"
              id="file1"
              onChange={changeHandler1}
              accept=".txt"
            />
          </div>
        </Grid>
        <Grid>
          <Text
            color="#610726"
            style={{ fontWeight: 'bold', marginBottom: 10 }}
          >
            Select File 2 (*.txt)
          </Text>
          <div>
            <input
              type="file"
              id="file2"
              onChange={changeHandler2}
              accept=".txt"
            />
          </div>
        </Grid>
      </Grid.Container>
      <div style={{ marginTop: 20 }}>
        <FilterOptions />
      </div>
      <Button
        onClick={() => setIsViewDetails(true)}
        size="md"
        style={{ width: 150 }}
      >
        Test
      </Button>
      <ComparisonPopup
        title="Test"
        initLeftContent={objectLeft}
        initRightContent={objectRight}
        visible={isViewDetails}
        onClose={() => setIsViewDetails(false)}
      />
    </div>
  );
}
