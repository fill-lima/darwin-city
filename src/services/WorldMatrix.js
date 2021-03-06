import contants from '../helpers/constants';
import Road from '../components/Road';
import RoadJunction from '../components/Road/Junction';

const matrixSize = 25;
const {worldWidth, worldHeight, tileSize} = contants;

class MatrixTile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.contents = [];
    this.sceneX = (worldWidth / 2 * -1) + (x * tileSize) + (tileSize / 2);
    this.sceneY = (worldHeight / 2 * -1) + (y * tileSize) + (tileSize / 2);
  }

  getRoadContents() {
    return this.contents.filter((content) => content instanceof Road);
  }

  getJunctionContents() {
    return this.contents.filter((content) => content instanceof RoadJunction);
  }
}

class CityMatrix {
  constructor() {
    this.size = matrixSize;
    this.matrix = [];

    for(let i = 0; i < this.size; i++) {
      this.matrix[i] = [];
      for(let j = 0; j < this.size; j++) {
        this.matrix[i][j] = new MatrixTile(i, j);
      }
    }
  }

  getTiles() {
    const tiles = [];

    for(let i = 0; i < this.matrix.length; i++) {
      for(let j = 0; j < this.matrix[i].length; j++) {
        tiles.push(this.matrix[i][j]);
      }
    }

    return tiles;
  }

  getTile(x, y) {
    return this.matrix[x][y];
  }

  setTileContent(x, y, contentNode) {
    const hasContent = this.matrix[x][y].contents.some((content) => content === contentNode);
    if(hasContent) {
      return;
    }

    this.matrix[x][y].contents.push(contentNode);
  }

  getRoadMatrix() {
    const newMatrix = [];

    for(let i = 0; i < this.matrix.length; i++) {
      newMatrix[i] = [];

      for(let j = 0; j < this.matrix[i].length; j++) {
        const roadContents = this.matrix[i][j].getRoadContents();
        newMatrix[i][j] = {roads: roadContents};
      }
    }

    return newMatrix;
  }
}

export default new CityMatrix();
