import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface CKEditorProps {
  data: string;
  onChange: (event: any, editor: any) => void;
}

const Editor: React.FC<CKEditorProps> = ({ data, onChange }) => {
  const editorConfiguration = {
    toolbar: [
      'heading', '|',
      'alignment', 'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', '|',
      'link', 'blockQuote', 'imageUpload', 'insertTable', 'mediaEmbed', 'codeBlock', '|',
      'bulletedList', 'numberedList', 'todoList', '|',
      'undo', 'redo', 'fontSize', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
      'indent', 'outdent', '|',
      'removeFormat', 'horizontalLine', 'pageBreak', '|',
      'specialCharacters', 'findAndReplace'
    ],
    height: '1400px' // Set the desired height here
  };
  
  return (
    <CKEditor
      editor={ClassicEditor}
      config={editorConfiguration}
      data={data}
      onChange={(event: any, editor: { getData: () => any; }) => {
        const data = editor.getData();
        onChange(event, editor);
      }}
    />
  );
};

export default Editor;
