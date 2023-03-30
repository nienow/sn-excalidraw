import React, {useEffect, useState} from 'react';
import {useEditor} from "../providers/EditorProvider";

const TextArea = () => {
  const {data, saveNote, isLocked} = useEditor();

  const [text, setText] = useState('');

  useEffect(() => {
    setText(data.text);
  }, [data]);

  const onLocalChange = (e) => {
    setText(e.target.value);
    data.text = e.target.value;
    saveNote();
  };

  return (
    <textarea disabled={isLocked} value={text} onChange={onLocalChange}></textarea>
  );
}

export default TextArea
