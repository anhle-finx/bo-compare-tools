import { Navbar, Switch, Text } from '@nextui-org/react';

export default function FilterOptions(props: any) {
  const {
    isIgnoreDep,
    changeIsIgnoreDep,
    isUpdateOnly,
    changeIsUpdateOnly,
    isNewOnly,
    changeIsNewOnly,
  } = props || {};

  return (
    <Navbar isCompact isBordered variant="static">
      <Navbar.Content css={styles.bar}>
        {/* <div style={styles.switch}>
          <Switch
            size="md"
            checked={isIgnoreDep}
            onChange={changeIsIgnoreDep}
          />
          <Text style={{ marginLeft: 10 }}>{`Ignore [DEPRECATED]`}</Text>
        </div> */}

        <div style={styles.switch}>
          <Switch
            size="md"
            checked={isUpdateOnly}
            onChange={changeIsUpdateOnly}
          />
          <Text style={{ marginLeft: 10 }}>{`Updated Only`}</Text>
        </div>

        <div style={styles.switch}>
          <Switch size="md" checked={isNewOnly} onChange={changeIsNewOnly} />
          <Text style={{ marginLeft: 10 }}>{`New Only`}</Text>
        </div>
      </Navbar.Content>
    </Navbar>
  );
}

const styles: any = {
  bar: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  switch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};
