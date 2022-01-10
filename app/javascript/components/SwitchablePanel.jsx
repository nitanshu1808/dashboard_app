import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DataGridPersistence from './DataGridPersistence';
import Panel from './Panel';

const SwitchablePanel = (props) => {
  const storageKey = `switchable-${props.id}`;
  const [panel, setPanel] = useState(localStorage.getItem(storageKey) || props.defaultPanel);
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const open = () => setMenuOpen(true);
  const close = () => setMenuOpen(false);
  const choose = (panel) => {
    setPanel(panel);
    localStorage.setItem(storageKey, panel);
    close();
  }

  const persistence = {};
  for (var panelKey in props.panels) {
    const panel = props.panels[panelKey];
    if (panel.persistence) {
      persistence[panelKey] = DataGridPersistence(`table-${props.id}-${panelKey}`);
    }
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
      {
        (persistence[panel] && persistence[panel].dirty) ?
          <Button
            variant="contained"
            onClick={persistence[panel].save}
            sx={{ 'float': 'right' }}
          >
            Make Default View
          </Button> :
          <React.Fragment />
      }
    </React.Fragment>
  );

  return (
    <Panel title={title} sx={props.sx}>
      {
        persistence[panel] ?
          props.panels[panel].content(persistence[panel]) :
          props.panels[panel].content
      }
    </Panel>
  );
}

export default SwitchablePanel;
