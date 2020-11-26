/**
 * editor顶部工具栏
 *
 * @file header.tsx
 * @author guyunlong
 */
import React, { useState } from "react";
import {
  UnorderedListOutlined,
  BorderVerticleOutlined,
  BorderInnerOutlined,
  EditOutlined,
  FontSizeOutlined,
  DragOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import classnames from "classnames";
import "./editor-header.less";

export function EditorHeader() {
  let [active, setActive] = useState("");

  return (
    <div className="editor-header">
      <div className="editor-header-toolbar">
        <div
          onClick={() => setActive("options")}
          className={classnames("toolbar-item", {
            active: active === "options",
          })}
        >
          <UnorderedListOutlined />
        </div>
        <div
          onClick={() => setActive("frame")}
          className={classnames("toolbar-item", { active: active === "frame" })}
        >
          <BorderVerticleOutlined />
        </div>
        <div
          onClick={() => setActive("shape")}
          className={classnames("toolbar-item", { active: active === "shape" })}
        >
          <BorderInnerOutlined />
        </div>
        <div
          onClick={() => setActive("pencel")}
          className={classnames("toolbar-item", {
            active: active === "pencel",
          })}
        >
          <EditOutlined />
        </div>
        <div
          onClick={() => setActive("text")}
          className={classnames("toolbar-item", { active: active === "text" })}
        >
          <FontSizeOutlined />
        </div>
        <div
          onClick={() => setActive("drag")}
          className={classnames("toolbar-item", { active: active === "drag" })}
        >
          <DragOutlined />
        </div>
        <div
          onClick={() => setActive("comment")}
          className={classnames("toolbar-item", {
            active: active === "comment",
          })}
        >
          <AliwangwangOutlined />
        </div>
      </div>
    </div>
  );
}
