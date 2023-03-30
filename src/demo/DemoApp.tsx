import React, {useRef, useState} from 'react';
import {EditorProvider} from "../providers/EditorProvider";
import {DATA_ONE, DATA_TWO, DATA_UNSUPPORTED} from "./test-data";

const EXAMPLES = [
  {title: 'One', data: DATA_ONE},
  {title: 'Two', data: DATA_TWO},
  {title: 'Unsupported', data: DATA_UNSUPPORTED}
]

const DemoApp = () => {
  const lastSavedRef = useRef<HTMLDivElement>();
  const [selected, setSelected] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const renderMenuItem = (_, i) => {
    return <div className={selected === i ? 'menu-item selected' : 'menu-item'} onClick={() => setSelected(i)}>{EXAMPLES[i].title}</div>;
  };

  const onToggleDisabled = (e) => {
    setDisabled(e.target.checked);
  };

  const save = () => {
    if (lastSavedRef.current) {
      lastSavedRef.current.textContent = `Last Saved: ${new Date().toLocaleTimeString()}`;
    }
  };
  return (
    <div className="demo">
      <div className="menu">
        {
          EXAMPLES.map(renderMenuItem)
        }
      </div>
      <div className="content">
        <div className="content-header">
          <div><input id="editingDisabled" type="checkbox" value={'' + disabled} onChange={onToggleDisabled}></input><label
            htmlFor="editingDisabled"> Editing Disabled</label></div>
          <div ref={lastSavedRef}></div>
        </div>
        <EditorProvider text={EXAMPLES[selected].data} save={save} isLocked={disabled}/>
      </div>
    </div>
  );
}

export default DemoApp
