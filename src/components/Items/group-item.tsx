import { Collapse } from '@nextui-org/react';
import LineItem from './line-item';

function GroupItem({ title, dataList, onViewDetails }: any) {
  const countUpdate = dataList.filter((p) => p.isUpdate);
  const countNew = dataList.filter((p) => p.isNew);

  let titleText = `${title}`;
  if (countUpdate?.length > 0) {
    titleText = `${titleText} - (${countUpdate?.length} update)`;
  }
  if (countNew?.length > 0) {
    titleText = `${titleText} - (${countNew?.length} new)`;
  }

  return (
    <div style={styles.item} key={title}>
      <Collapse.Group>
        <Collapse title={titleText}>
          {dataList &&
            dataList?.length > 0 &&
            dataList.map((item) => {
              if (typeof item === 'string') {
                return <h5>{item}</h5>;
              }
              return <LineItem data={item} onViewDetails={onViewDetails} />;
            })}
        </Collapse>
      </Collapse.Group>
    </div>
  );
}

const styles = {
  item: {
    border: '1px grey solid',
    cursor: 'pointer',
    marginBottom: 10,
    borderRadius: 5,
  },
  collapsible: {
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    width: 600,
    marginTop: 20,
  },
};

export default GroupItem;
