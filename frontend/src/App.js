import React from "react";
import "./App.css";
import axios from "axios";
import TreeMenu from "react-simple-tree-menu";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await axios.get("http://localhost:3004/data");
    const outputJson = transformJson(response.data.content.document);
    getAndSetContent(outputJson);
    setData(outputJson);
  };
  const transformJson = (inputJson) => {
    const buildTree = (node, parentId) => {
      let nodes = [];
      for (let item of inputJson) {
        if (item.parent_id === parentId) {
          let childNode = {
            key: Date.now().toString(36) + Math.random().toString(36).substr(2),
            id: item.id,
            label: item.name,
            content: item.content,
            children: buildTree(item, item.id),
            nodes: buildTree(item, item.id),
          };
          nodes.push(childNode);
        }
      }
      return nodes;
    };
    let result = [];
    for (let item of inputJson) {
      if (item.parent_id === "") {
        let rootNode = {
          key: Date.now().toString(36) + Math.random().toString(36).substr(2),
          id: item.id,
          label: item.name,
          content: item.content,
          children: buildTree(item, item.id),
          nodes: buildTree(item, item.id, inputJson),
        };
        result.push(rootNode);
      }
    }
    return result;
  };
  const getAndSetContent = (data) => {
    const dataWithnodes = data.find((val) => val.nodes.length);
    setContent(dataWithnodes.nodes);
  };

  return (
    <div className="content--wrapper">
      <aside className="aside">
        <TreeMenu
          hasSearch={false}
          data={data}
          onClickItem={({ key, label, ...props }) => {
            if (props.children.length) setContent(props.children);
            else setSelectedChapter(props.id);
          }}
        />
      </aside>
      <main className="main">
        {content.map((data) => (
          <div key={data.key}>
            <h2>{data.label}</h2>
            <p
              className={`${data.id === selectedChapter ? "gray__background" : null}`}
            >
              {data.content}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
