import React from 'react';
import {Excalidraw} from "@excalidraw/excalidraw";
import {useEditor} from "../providers/EditorProvider";

const Editor = () => {
  const {data, saveNote, isLocked} = useEditor();

  const onChange = (elements) => {
    data.elements = elements;
    saveNote();
  };

  const onLibraryChange = (libraryItems) => {
    data.libraryItems = libraryItems;
    saveNote();
  };

  return (
    <div className="main">
      <Excalidraw key={Math.random()} initialData={data} theme={'dark'} onChange={onChange} onLibraryChange={onLibraryChange}
                  viewModeEnabled={isLocked}/>
    </div>
  );
}

export default Editor
