import { Navbar, Switch, Text } from '@nextui-org/react';
import { PiMoon, PiSunBold } from 'react-icons/pi';

export default function FilterOptions(props: any) {
  const { isIgnoreDep, changeIsIgnoreDep } = props || {};

  return (
    <Navbar isCompact isBordered variant="static">
      <Navbar.Content
        css={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          width: '100%',
          // backgroundColor: 'red',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Switch
            size="md"
            checked={isIgnoreDep}
            onChange={changeIsIgnoreDep}
          />
          <Text style={{ marginLeft: 10 }}>{`Ignore [DEPRECATED]`}</Text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Switch
            size="md"
            checked={isIgnoreDep}
            onChange={changeIsIgnoreDep}
          />
          <Text style={{ marginLeft: 10 }}>{`Updated Only`}</Text>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Switch
            size="md"
            checked={isIgnoreDep}
            onChange={changeIsIgnoreDep}
          />
          <Text style={{ marginLeft: 10 }}>{`New Only`}</Text>
        </div>
      </Navbar.Content>
    </Navbar>
  );
}
