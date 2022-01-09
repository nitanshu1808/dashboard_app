import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Panel from './Panel';

const SwitchablePanel = (props) => {
  const [panel, setPanel] = useState(props.defaultPanel);
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const open = () => setMenuOpen(true);
  const close = () => setMenuOpen(false);
  const choose = (panel) => {
    setPanel(panel);
    close();
  }

  const title = (
    <React.Fragment>
      <IconButton onClick={open} ref={anchorRef}><ArrowDropDownIcon /></IconButton>
      {props.panels[panel].title}
      <Menu
        open={menuOpen}
        anchorEl={anchorRef.current}
        onClose={close}
      >
        {Object.keys(props.panels).map((panel) => {
          if (props.panels[panel].header) {
            return <ListSubheader key={panel}>{props.panels[panel].title}</ListSubheader>
          } else {
            return <MenuItem key={panel} onClick={() => choose(panel)}>{props.panels[panel].title}</MenuItem>;
          }
        })}
      </Menu>
    </React.Fragment>
  );

  return (
    <Panel title={title} sx={props.sx}>
      {props.panels[panel].content}
    </Panel>
  );
}

export default SwitchablePanel;
