/**
 * editor顶部工具栏
 *
 * @file header.tsx
 * @author guyunlong
 */
import React from 'react';
import {UnorderedListOutlined} from '@ant-design/icons';
import './editor-header.less'

export function EditorHeader() {
    return (
        <div className="editor-header">
            <div className="editor-header-toolbar">
                <div className="toolbar-item">
                    <UnorderedListOutlined />
                </div>
                <div className="toolbar-item">
                    <UnorderedListOutlined />
                </div>
                <div className="toolbar-item">
                    <UnorderedListOutlined />
                </div>
                <div className="toolbar-item">
                    <UnorderedListOutlined />
                </div>
                <div className="toolbar-item">
                    <UnorderedListOutlined />
                </div>
                <div className="toolbar-item">
                    <UnorderedListOutlined />
                </div>
                <div className="toolbar-item">
                    <UnorderedListOutlined />
                </div>
            </div>
        </div>
    );
}