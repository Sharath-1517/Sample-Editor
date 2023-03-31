import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import CustomBlock from './custom-block';

const editor = new EditorJS({
  holder: 'editorjs',
  tools: {
    header: {
      class: Header,
      config: {
        placeholder: 'Enter a header',
        levels: [2, 3, 4],
        defaultLevel: 2
      }
    },
    customBlock: CustomBlock
  }
});
