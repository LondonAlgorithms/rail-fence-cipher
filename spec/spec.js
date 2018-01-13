describe("Rail fence cipher", function() {
  context("row()", function() {
    it("should return proper grid\"s row", function() {
      expect(row(0, 3)).to.equal(0);
      expect(row(1, 3)).to.equal(1);
      expect(row(2, 3)).to.equal(2);
      expect(row(3, 3)).to.equal(1);
      expect(row(4, 3)).to.equal(0);
      expect(row(5, 3)).to.equal(1);
      expect(row(6, 3)).to.equal(2);
      expect(row(7, 3)).to.equal(1);
      expect(row(8, 3)).to.equal(0);
    });
  });

  context("encrypt()", function() {
    it("should encrypt properly on three rows", function() {
      expect(encrypt("rail fence cipher", 3)).to.equal("r ciralfnecpeie h");
    });

    it("should encrypt properly on four rows", function() {
      expect(encrypt("London Algorithms Meetup", 4)).to.equal("L iMonArt epnolohseudgmt");
    });
  });

  context("createGrid()", function() {
    it("should create a grid with a proper pattern", function() {
      // x...x..
      // .x.x.x.
      // ..x...x
      var expected = [[], [], []];
      expected[0][0] = 'x';
      expected[1][1] = 'x';
      expected[2][2] = 'x';
      expected[1][3] = 'x';
      expected[0][4] = 'x';
      expected[1][5] = 'x';
      expected[2][6] = 'x';
      const actual = createGrid(3, 7);
      assertEqualGrids(actual, expected);
    });
  });

  context("fillGridHorizontally()", function() {
    it("should fill the grid properly", function() {
      // x...x..
      // .x.x.x.
      // ..x...x
      var actual = [[], [], []];
      actual[0][0] = 'x';
      actual[1][1] = 'x';
      actual[2][2] = 'x';
      actual[1][3] = 'x';
      actual[0][4] = 'x';
      actual[1][5] = 'x';
      actual[2][6] = 'x';

      // r... ..
      // .a.l.f.
      // ..i...e
      var expected = [[], [], []];
      expected[0][0] = 'r';
      expected[1][1] = 'a';
      expected[2][2] = 'i';
      expected[1][3] = 'l';
      expected[0][4] = ' ';
      expected[1][5] = 'f';
      expected[2][6] = 'e';

      fillGridHorizontally(actual, 3, 7, "r alfie");
      assertEqualGrids(actual, expected);
    });
  });

  context("readGridZigZag()", function() {
    it("should read from the grid properly", function() {
      // r... ..
      // .a.l.f.
      // ..i...e
      var grid = [[], [], []];
      grid[0][0] = 'r';
      grid[1][1] = 'a';
      grid[2][2] = 'i';
      grid[1][3] = 'l';
      grid[0][4] = ' ';
      grid[1][5] = 'f';
      grid[2][6] = 'e';

      expect(readGridZigZag(grid, 3, 7)).to.equal("rail fe");
    });
  });

  context("decrypt()", function() {
    it("should decrypt properly on three rows", function() {
      expect(decrypt("r ciralfnecpeie h", 3)).to.equal("rail fence cipher");
    });
    
    it("should decrypt properly on four rows", function() {
      expect(decrypt("L iMonArt epnolohseudgmt", 4)).to.equal("London Algorithms Meetup");
    });

    it("should be the inverse of encrypt() for any number of rows", function() {
      const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" + 
        "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " +
        "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " + 
        "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate " +
        "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
        "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est " +
        "laborum.";

      for (var key = 1; key <= 50; key++) {
        expect(decrypt(encrypt(text, key), key)).to.equal(text);
      }
    });
  });
});

function assertEqualGrids(actual, expected) {
  expect(actual.length).to.equal(expected.length);
  for (var i = 0; i < actual.length; i++) {
    expect(actual[i].length).to.equal(expected[i].length);
    for (var j = 0; j < actual[i].length; j++) {
      expect(actual[i][j]).to.equal(expected[i][j]);
    }
  }
}
