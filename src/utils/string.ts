import _ from 'lodash';

const dataTypes = [
  'profiles',
  'pickLists',
  'actionMeta',
  'objects',
  'flows',
  'layouts',
  'applications',
];

function checkIsObject(raw: any) {
  return _.startsWith(raw, '{');
}

function checkIsString(raw: any) {
  return _.startsWith(raw, `"\\"`);
}

async function processData(fileText: any) {
  const rawData = [];
  const data = fileText.split('\n');

  let lastType: any = '';
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    if (!checkIsObject(item)) {
      const cleanItem = item.replaceAll(`\\"`, ``);
      lastType = cleanItem;
    } else {
      try {
        const jsonItem = JSON.parse(item);
        const displayName =
          jsonItem?.data?.displayName ||
          `[${jsonItem?.entityType}] - ${jsonItem?.data?.displayName || ''}`;

        rawData.push({
          key: jsonItem?.data?.name,
          value: jsonItem,
          type: jsonItem?.entityType, //lastType.replaceAll('"', ""),
          title: `${displayName} (${jsonItem?.data?.name})`,
        });
      } catch (error) {
        console.log('🚀 ~ processData ~ error:', error);
      }
    }
  }

  return rawData.filter((p) => dataTypes.includes(p.type));
}

function compareData(newData: any, oldData: any) {
  const finalData = [];
  for (let index = 0; index < newData.length; index++) {
    const newItem = newData[index];
    const oldItem = _.find(oldData, (p) => p.key === newItem.key);

    if (!oldItem) {
      finalData.push({
        ...newItem,
        isNew: true,
      });
    } else {
      const isUpdate = !_.isEqual(
        _.omit(newItem?.value, ['template.version', 'credential.url']),
        _.omit(oldItem?.value, ['template.version', 'credential.url'])
      );

      finalData.push({
        ...newItem,
        isUpdate,
      });
    }
  }

  return finalData;
}

function groupData(raw: any) {
  const data = _.groupBy(raw, 'type');
  return Object.keys(data).map((key) => ({ key, value: data[key] }));
}

export { checkIsObject, processData, checkIsString, compareData, groupData };
