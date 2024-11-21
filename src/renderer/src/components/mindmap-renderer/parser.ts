function parseByMarkDown(input: string) {
  const lines = input.split("\n");
  const node = {};

  let curTitle = "";

  const titleMap = {
    "# ": 1,
    "## ": 2,
    "### ": 3,
    "#### ": 4,
    "##### ": 5,
    "###### ": 6,
  };

  function getTitle(line: string) {
    const prefix = line.match(/^(#+)\s/);
    if (prefix) {
      return line.substring(prefix[0].length);
    }
    return "";
  }

  for (const line of lines) {
    console.log(line);
    let titlePrefix = "";
    for (const key in titleMap) {
      if (line.startsWith(key)) {
        titlePrefix = titleMap[key];
        break;
      }
    }
    if (titlePrefix) {
      curTitle = getTitle(line);
      console.log("H" + titlePrefix, curTitle);
    } else {
      if (curTitle) {
        node[curTitle] = node[curTitle] ? [...node[curTitle], line] : [line];
      }
    }
  }

  // console.log(node);
  return node;
}

export { parseByMarkDown };
