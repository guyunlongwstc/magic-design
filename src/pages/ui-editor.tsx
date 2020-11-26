/**
 * 设计编辑页面
 *
 * @file designEditor.tsx
 * @author guyunlong
 */

import React from 'react';
import {EditorHeader} from '@components/editor-header';
import {EditorCanvas} from '@components/editor-canvas';
import {EditorProps} from '@components/editor-props';
import {EditorSidebar} from '@components/editor-sidebar';
import './ui-editor.less';

export function App() {
      return (
        <div className="editor-page">
            <EditorHeader></EditorHeader>
            <div className="editor-container">
                <EditorSidebar></EditorSidebar>
                <EditorCanvas></EditorCanvas>
                <EditorProps></EditorProps>
            </div>
        </div>
      );
  }

export default App;