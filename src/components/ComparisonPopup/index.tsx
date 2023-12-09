import { Button, Text, Modal, Row } from '@nextui-org/react';
import AppLogo from '../../assets/icon.svg';
import Layout from '../Layout';
import useDarkMode from 'use-dark-mode';
import { Link } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { PiMoon, PiSunBold } from 'react-icons/pi';
import Compare from '../../pages/Compare';

interface ComparisonPopupProps extends PropsWithChildren {
  initLeftContent?: any;
  initRightContent?: any;
  title?: string;
  visible: boolean;
  onClose: () => void;
}

export default function ComparisonPopup(props: ComparisonPopupProps) {
  const darkMode = useDarkMode();
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={props.visible}
      onClose={() => props.onClose()}
      fullScreen
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Diff compare DATA:
          <Text b size={18} style={{ marginLeft: 10 }}>
            {props?.title}
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Compare
          initLeftContent={props?.initLeftContent}
          initRightContent={props?.initRightContent}
        />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button auto flat color="error" onPress={() => props.onClose()}>
          Close
        </Button>
        <Button auto onPress={() => props.onClose()}>
          Sign in
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}
