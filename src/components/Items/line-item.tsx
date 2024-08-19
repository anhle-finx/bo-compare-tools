import { Text } from '@nextui-org/react';

function LineItem({ data, onViewDetails }: any) {
  const { title, isNew, isUpdate, key } = data || {};
 
  return (
    <div
      style={
        isNew
          ? styles.collapsibleNew
          : isUpdate
          ? styles.collapsibleUpdate
          : styles.collapsible
      }
      key={key}
      onClick={() => onViewDetails(key)}
    >
      <Text style={{ fontWeight: 'bold', color: '#333' }}>{title}</Text>
    </div>
  );
}

const styles = {
  collapsible: {
    backgroundColor: '#DAD7CD',
    color: 'black',
    marginBottom: 15,
    border: '1px #000 solid',
    borderRadius: 5,
    padding: 10,
    flexDirectio: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  collapsibleNew: {
    backgroundColor: '#7AE582',
    marginBottom: 15,
    border: '1px #000 solid',
    borderRadius: 5,
    padding: 10,
    flexDirectio: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  collapsibleUpdate: {
    backgroundColor: 'yellow',
    marginBottom: 15,
    border: '1px #000 solid',
    borderRadius: 5,
    padding: 10,
    flexDirectio: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
};

export default LineItem;
