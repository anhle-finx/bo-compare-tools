import { Navbar, Switch, Text } from '@nextui-org/react';
import AppLogo from '../../assets/icon.svg';
import Layout from '../Layout';
import useDarkMode from 'use-dark-mode';
import { Link } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { PiMoon, PiSunBold } from 'react-icons/pi';

interface HeaderProps extends PropsWithChildren {
  children: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  const darkMode = useDarkMode();
  return (
    <Layout content={props.children}>
      <Navbar isCompact isBordered variant="static">
        <Navbar.Brand aria-label="Link to Homepage" as={Link} to="/" href="/">
          <img
            aria-label="App Logo"
            src={AppLogo}
            alt="App Logo"
            width="32"
            height="32"
            style={{ marginRight: 14 }}
          />
          <Text aria-label="Page Title" color="inherit" hideIn="xs">
            nFlow Compare Tools
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text>v1.0.0</Text>
            <Switch
              iconOn={<PiMoon aria-label="Dark Mode Icon" />}
              iconOff={<PiSunBold aria-label="Light Mode Icon" />}
              size="md"
              aria-label="Dark Mode Switch"
              checked={darkMode.value}
              onChange={darkMode.toggle}
            />
          </div>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
