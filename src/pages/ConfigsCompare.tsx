import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { Grid, Text } from '@nextui-org/react';
import { compareData, groupData, processData } from '../utils/string';
import { GroupItem } from '../components/Items';
import FilterOptions from '../components/FilterOptions';
import ComparisonPopup from '../components/ComparisonPopup';

type Props = {
  a: any;
};

export default function ConfigsCompare(props: Props) {
  let reader: FileReader;
  const [fileDataLeft, setFileDataLeft] = useState<any>();
  const [fileDataRight, setFileDataRight] = useState<any>();

  const [rawDataLeft, setRawDataLeft] = useState<any>();
  const [rawDataRight, setRawDataRight] = useState<any>();

  const [groupDataLeft, setGroupDataLeft] = useState<any>();
  const [groupDataRight, setGroupDataRight] = useState<any>();

  const [currentDataLeft, setCurrentDataLeft] = useState<any>();
  const [currentDataRight, setCurrentDataRight] = useState<any>();

  const [isIgnoreDep, setIsIgnoreDep] = useState<any>();
  const [isUpdateOnly, setIsUpdateOnly] = useState<any>();
  const [isNewOnly, setIsNewOnly] = useState<any>();

  const isViewDetails = useMemo(() => {
    if (currentDataLeft && currentDataRight) {
      return true;
    }

    return false;
  }, [currentDataLeft, currentDataRight]);

  useEffect(() => {
    async function doAction() {
      const left = await processData(fileDataLeft);
      const right = await processData(fileDataRight);

      const groupDataUAT = groupData(right);
      setRawDataRight(right);
      setGroupDataRight(groupDataUAT);

      const dataFinal = compareData(left, right);
      const groupDataDEV = groupData(dataFinal);
      setRawDataLeft(left);
      setGroupDataLeft(groupDataDEV);
    }

    if (fileDataLeft && fileDataRight) {
      doAction();
    }
  }, [fileDataLeft, fileDataRight]);

  const handleIsUpdateOnly = () => {
    const left = rawDataLeft;
    const right = rawDataRight;
    const groupDataUAT = groupData(right);
    setGroupDataRight(groupDataUAT);

    if (!isUpdateOnly) {
      const dataFinal = compareData(left, right).filter((p) => p.isUpdate);
      const groupDataDEV = groupData(dataFinal);
      setGroupDataLeft(groupDataDEV);

      setIsNewOnly(false);
    } else {
      const dataFinal = compareData(left, right);
      const groupDataDEV = groupData(dataFinal);
      setGroupDataLeft(groupDataDEV);
    }

    setIsUpdateOnly(!isUpdateOnly);
  };

  const handleIsNewOnly = () => {
    const left = rawDataLeft;
    const right = rawDataRight;
    const groupDataUAT = groupData(right);
    setGroupDataRight(groupDataUAT);

    if (!isNewOnly) {
      const dataFinal = compareData(left, right).filter((p) => p.isNew);
      const groupDataDEV = groupData(dataFinal);
      setGroupDataLeft(groupDataDEV);

      setIsUpdateOnly(false);
    } else {
      const dataFinal = compareData(left, right);
      const groupDataDEV = groupData(dataFinal);
      setGroupDataLeft(groupDataDEV);
    }

    setIsNewOnly(!isNewOnly);
  };

  const handleFileRead1 = () => {
    const content = reader.result;
    setFileDataLeft(content);
  };

  const handleFileRead2 = () => {
    const content = reader.result;
    setFileDataRight(content);
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

  const onViewDetails = (id: any) => {
    const leftItem = _.find(rawDataLeft, (p) => p.key === id);
    setCurrentDataLeft({
      text: undefined,
      json: leftItem,
    });
    const rightItem = _.find(rawDataRight, (p) => p.key === id);
    setCurrentDataRight({
      text: undefined,
      json: rightItem,
    });
  };

  return (
    <div style={styles.container}>
      <Grid.Container gap={1} style={styles.top}>
        <Grid>
          <Text color="#610726" style={styles.fileTitle}>
            Select File 1 (*.txt)
          </Text>
          <input
            type="file"
            id="file1"
            onChange={changeHandler1}
            accept=".txt"
          />
        </Grid>
        <Grid>
          <Text color="#610726" style={styles.fileTitle}>
            Select File 2 (*.txt)
          </Text>
          <input
            type="file"
            id="file2"
            onChange={changeHandler2}
            accept=".txt"
          />
        </Grid>
      </Grid.Container>
      <div style={styles.filter}>
        <FilterOptions
          isIgnoreDep={isIgnoreDep}
          changeIsIgnoreDep={() => setIsIgnoreDep(!isIgnoreDep)}
          isUpdateOnly={isUpdateOnly}
          changeIsUpdateOnly={() => handleIsUpdateOnly()}
          isNewOnly={isNewOnly}
          changeIsNewOnly={() => handleIsNewOnly()}
        />
      </div>
      <div style={styles.content}>
        <div style={styles.column}>
          {groupDataLeft?.length > 0 &&
            groupDataLeft.map((item) => {
              return (
                <GroupItem
                  title={item.key}
                  dataList={item.value}
                  onViewDetails={onViewDetails}
                />
              );
            })}
        </div>
        <div style={styles.column}>
          {groupDataRight?.length > 0 &&
            groupDataRight.map((item) => {
              return <GroupItem title={item.key} dataList={item.value} />;
            })}
        </div>
      </div>
      <ComparisonPopup
        title={currentDataLeft?.json?.title}
        initLeftContent={currentDataLeft}
        initRightContent={currentDataRight}
        visible={isViewDetails}
        onClose={() => {
          setCurrentDataLeft(null);
          setCurrentDataRight(null);
        }}
      />
    </div>
  );
}

const styles: any = {
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  top: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  fileTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    gap: 20,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    width: '47%',
  },
  filter: {
    marginTop: 20,
  },
};
