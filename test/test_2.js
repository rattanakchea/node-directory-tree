"use strict";

const expect = require("chai").expect;
const dirtree = require("../lib/directory-tree");
const testTree = require("./fixture.js");
const excludeTree = require("./fixtureExclude.js");
const excludeTree2 = require("./fixtureMultipleExclude.js");

describe("directoryTree Test 2", () => {
  it("should list the children in a directory with multiple extensions", () => {
    const tree = dirtree("./test/test_data", {
      extensions: [/\.txt$/, /\.md$/]
    });

    // 4 including the empty `some_dir_2`.
    // should return 5 including the new md file extension
    expect(tree.children.length).to.equal(5);
  });
});
