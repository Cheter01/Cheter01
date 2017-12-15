//set field size here
const HEX_T = 15;

const HEX_R = HEX_T * (Math.sqrt(3)/2);

//set build animation speed here
const BUILDSPEED = 150;
//set search animation speed here
const SEARCHSPEED = 50;

//set to true for a different algorithm
const METHOD = false;

mazeCanvas = document.getElementById('maze');
var mazeCtx = mazeCanvas.getContext('2d');
mazeCtx.canvas.width = window.innerWidth;
mazeCtx.canvas.height = window.innerHeight;

let infoElement = document.getElementById('info');
infoElement.innerHTML = "Inizia la costruzione del labirinto";
infoElement.addEventListener("click",onClick);

const possible_text = [
//P
[0,20,2], [0,20,3], [0,19,2], [0,19,3], [0,18,2], [0,18,3], [0,16,2], [0,16,3], [1,18,0], [1,17,1], [1,17,2], [1,17,3], [1,16,0], [1,16,2], [1,16,3], [1,15,1], [1,15,2], [1,15,3],
//O
[2,18,2], [2,18,3], [2,17,2], [2,17,3], [2,15,2], [2,15,3], [2,14,2], [2,14,3], [3,18,0], [3,17,1], [3,17,2], [3,17,3], [3,16,2], [3,16,3], [3,15,2], [3,15,3], [3,14,2], [3,14,3], [3,13,2], [3,13,3], [3,14,0], [3,13,1],
//S
[4,16,2], [4,16,3], [4,14,2], [4,14,3], [4,13,2], [4,13,3], [4,12,2], [4,12,3], [5,16,0], [5,15,1], [5,15,2], [5,15,3], [5,14,0], [5,14,2], [5,14,3], [5,13,1], [5,13,2], [5,13,3], [5,12,0], [5,11,1], [5,11,2], [5,11,3],
//S
[6,14,2], [6,14,3], [6,12,2], [6,12,3], [6,11,2], [6,11,3], [6,10,2], [6,10,3], [7,14,0], [7,13,1], [7,13,2], [7,13,3], [7,12,0], [7,12,2], [7,12,3], [7,11,1], [7,11,2], [7,11,3], [7,10,0], [7,9,1], [7,9,2], [7,9,3],
//I
[8,12,2], [8,12,3], [8,11,2], [8,11,3], [8,10,2], [8,10,3], [8,9,2], [8,9,3], [8,8,2], [8,8,3],
//B
[9,11,2], [9,11,3], [9,9,2], [9,9,3], [9,7,2], [9,7,3], [10,11,0], [10,10,1], [10,10,2], [10,10,3], [10,9,0], [10,9,2], [10,9,3], [10,8,1], [10,8,2], [10,7,0], [10,7,2], [10,7,3], [10,6,1], [10,6,2],
//L
[11,9,2], [11,9,3], [11,8,2], [11,8,3], [11,7,2], [11,7,3], [11,6,2], [11,6,3], [11,5,2], [11,5,3], [12,9,0], [12,8,1], [12,8,2], [12,8,3],
//E
[13,7,2], [13,7,3], [13,6,2], [13,6,3], [13,5,2], [13,5,3], [13,4,2], [13,4,3], [13,3,2], [13,3,3], [14,7,0], [14,6,1], [14,6,2], [14,6,3], [14,5,0], [14,4,1], [14,4,2], [14,4,3], [14,3,0], [14,2,1], [14,2,2], [14,2,3]
]

const MAZE_SIZEX = Math.floor(window.innerWidth / HEX_R / 2 + Math.floor(window.innerWidth / HEX_R / 2) % 2);
const MAZE_SIZEY = Math.floor(window.innerHeight / HEX_T - Math.floor(window.innerHeight / HEX_T) % 2);

let stepcount = 0;

mazeCtx.translate(-HEX_T, -HEX_T);

let building = false;
let finishedBuilding = false;
let searching = false;
let finishedSearching = false;

class vertex {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class triangleFieldCoord {
  constructor(x, y, n) {
    this.x = x;
    this.y = y;
    this.n = n;
  }
}

/* inside triangleField the v coordinates are in-world (HEX_T and HEX_R are ths stepsize) */
class triangleField {
  constructor(mazefield, n) {
    this.mazefield = mazefield;
    this.coord = new triangleFieldCoord(mazefield.x, mazefield.y, n);
    this.v = new Array(3);
    this.walls = [true, true, true];
    this.visitables = [0, 1, 2];
    this.unfinisheds = [0, 1, 2];
    this.visited = false;
    this.finished = false;
    this.searched = false;
    this.deadend = false;
    this.distance;

    this.v[0] = new vertex(mazefield.x * 2 * HEX_R, mazefield.y * HEX_T);
    switch (n) {
      case 0:
        this.v[1] = new vertex(this.v[0].x - HEX_R, this.v[0].y + HEX_T/2);
        this.v[2] = new vertex(this.v[0].x - HEX_R, this.v[0].y - HEX_T/2);
        break;
      case 1:
        this.v[1] = new vertex(this.v[0].x, this.v[0].y + HEX_T);
        this.v[2] = new vertex(this.v[0].x - HEX_R, this.v[0].y + HEX_T/2);
        break;
      case 2:
        this.v[1] = new vertex(this.v[0].x + HEX_R, this.v[0].y + HEX_T/2);
        this.v[2] = new vertex(this.v[0].x, this.v[0].y + HEX_T);
        break;
      case 3:
        this.v[1] = new vertex(this.v[0].x + HEX_R, this.v[0].y - HEX_T/2);
        this.v[2] = new vertex(this.v[0].x + HEX_R, this.v[0].y + HEX_T/2);
        break;
    }
  }

  checkFieldStatus() {
    if (this.mazefield.maze.routeStack.length > 0) {
      if (this.visitables.length !== 0) {
        for(let i = 0; i < this.visitables.length; i++) {
          if (this.getNeighbour(this.visitables[i]).visited) {
            this.visitables.splice(i--, 1);
          }
        }
      }
      if (this.unfinisheds.length !== 0) {
        for(let i = 0; i < this.unfinisheds.length; i++) {
          if (this.getNeighbour(this.unfinisheds[i]).finished) {
            this.unfinisheds.splice(i--, 1);
          }
        }
      }
      if (this.visitables.length === 0) {
        this.finished = true;
      }
    }
    if (this.finished) {
      let deadend = true;
      for(let i = 0; i < 3; i++) {
        if (!this.walls[i]) {
          if (!this.getNeighbour(i).searched) deadend = false;
        }
      }
      this.deadend = deadend;
    }
  }

  //returns the neigbouring triangleField (in d direction)
  getNeighbour(d) {
    let Xdir = 0, Ydir = 0, newN = 0;
    switch (d) {
      case 0:
        if(this.coord.n === 3) {
          Ydir = -1;
          newN = 2;
        } else {
          newN = this.coord.n + 1;
        }
        break;
      case 1:
        if (this.coord.n === 0) {
          Xdir = -1;
          newN = 3;
        } else if (this.coord.n === 1) {
          Ydir = 1;
          newN = 0;
        } else if (this.coord.n === 2) {
          Ydir = 1;
          newN = 3;
        } else if (this.coord.n === 3) {
          Xdir = 1;
          newN = 0;
        }
        break;
      case 2:
        if(this.coord.n === 0) {
          Ydir = -1;
          newN = 1;
        } else {
          Ydir = 0;
          newN = this.coord.n - 1;
        }
        break;
    }
    if (this.mazefield.maze.fields[this.coord.x + Xdir][this.coord.y + Ydir] !== undefined) {
      return this.mazefield.maze.fields[this.coord.x + Xdir][this.coord.y + Ydir].t[newN];
    } else {
      console.log("Error: no neighbour!")
      return false;
    }
  }

  removeWall(d) {
    this.walls[d] = false;
    if (this.walls.indexOf(d) !== -1) {
      this.visitables.splice(this.walls.indexOf(d), 1);
    }
  }

  //call this on current field with the previous field's n coordiate, and dir
  prevRemoveWall(n, d) {
    let toremove = -1;
    switch (n) {
      case 0:
        if (d === 0) {
          toremove = 2;
        } else if (d === 1) {
          toremove = 1;
        } else if (d === 2) {
          toremove = 1;
        }
        break;
      case 1:
        if (d === 0) {
          toremove = 2;
        } else if (d === 1) {
          toremove = 2;
        } else if (d === 2) {
          toremove = 0;
        }
        break;
      case 2:
        if (d === 0) {
          toremove = 2;
        } else if (d === 1) {
          toremove = 0;
        } else if (d === 2) {
          toremove = 0;
        }
        break;
      case 3:
        if (d === 0) {
          toremove = 1;
        } else if (d === 1) {
          toremove = 1;
        } else if (d === 2) {
          toremove = 0;
        }
        break;
    }
    this.removeWall(toremove);
  }

  draw(ctx, color) {
    if (this.visited) {
      ctx.beginPath();
      ctx.fillStyle = `rgb(${0}, ${0}, ${0})`;
      ctx.moveTo(this.v[0].x + HEX_T, this.v[0].y + HEX_R*2);
      for (let i = 0; i < 3; i++) {
        if (this.visited === true) {
          ctx.fillStyle = `rgb(${155 + parseInt(this.coord.x*100/MAZE_SIZEX)}, ${255 - parseInt(this.coord.y*100/MAZE_SIZEY)}, ${215+this.coord.n*10})`;
        }

        if (this.finished === true) {
          ctx.fillStyle = `rgb(${100 + parseInt(this.coord.x*155/MAZE_SIZEX)}, ${100 + parseInt(this.coord.y*155/MAZE_SIZEY)}, ${this.coord.n*40})`;
        }
        if (this.walls[i] === false && this.finished === false) {
          ctx.fillStyle = `rgb(${155}, ${155}, ${155})`;
        }
        if (this.searched === true) {
          ctx.fillStyle = `rgb(${255 - parseInt(this.coord.x*155/MAZE_SIZEY)}, ${100 + this.coord.n*10}, ${100 + parseInt(this.coord.y*155/MAZE_SIZEX)})`;
        }
        if (this.deadend === true) {
          ctx.fillStyle = `rgb(${this.coord.n*20}, ${100 + parseInt(this.coord.y*155/MAZE_SIZEX)}, ${100 + parseInt(this.coord.x*155/MAZE_SIZEY)})`;
        }
        if (this.mazefield.maze.exitPoint === this) {
          ctx.fillStyle = `rgb(${0}, ${100}, ${255})`;
        }
        ctx.lineTo(this.v[(i + 1) % 3].x + HEX_T, this.v[(i + 1) % 3].y + HEX_R*2);
      }
      if (color) ctx.fillStyle = color;
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = 'rgb(0,0,0)';
      ctx.moveTo(this.v[0].x + HEX_T, this.v[0].y + HEX_R*2);
      for (let i = 0; i < 3; i++) {
        if (this.walls[i] === true) {
          ctx.lineTo(this.v[(i + 1) % 3].x + HEX_T, this.v[(i + 1) % 3].y + HEX_R*2);
          ctx.stroke();
        } else {
          ctx.moveTo(this.v[(i + 1) % 3].x + HEX_T, this.v[(i + 1) % 3].y + HEX_R*2);
        }
      }
    }
  }
}

//inside mazeField x and y are virtual coordinates (1 is the stepsize)
class mazeField {
  constructor(maze, x, y) {
    this.maze = maze;
    this.x = x;
    this.y = y;
    this.t = new Array(4);
    this.finished = false;
    for(let i = 0; i < 4; i++) {
      this.t[i] = new triangleField(this, i);
    }
  }

  draw(ctx) {
    this.t.forEach(function(item){
      item.draw(ctx);
    });
  }
}

class Maze {
  constructor() {
    this.finished = false;
    this.fields = new Array(MAZE_SIZEX);
    for(let i = 0; i < MAZE_SIZEX; i++) {
      this.fields[i] = new Array(MAZE_SIZEY);
      for(let j = 0; j < MAZE_SIZEY; j++) {
        this.fields[i][j] = new mazeField(this, i, j);
      }
    }
    for(let i = 0; i < MAZE_SIZEX; i++) {
      this.fields[i][0].t[0].visited = true;
      this.fields[i][0].t[3].visited = true;
      this.fields[i][MAZE_SIZEY - 1].t[1].visited = true;
      this.fields[i][MAZE_SIZEY - 1].t[2].visited = true;
    }
    for(let j = 0; j < MAZE_SIZEY; j++) {
      this.fields[0][j].t[0].visited = true;
      this.fields[0][j].t[1].visited = true;
      this.fields[MAZE_SIZEX - 1][j].t[3].visited = true;
      this.fields[MAZE_SIZEX - 1][j].t[2].visited = true;
    }
    this.finishedCnt = 0;
    possible_text.forEach(this.excludeCell.bind(this));
    this.currentNode = this.fields[MAZE_SIZEX/2][MAZE_SIZEY/2].t[1];
    this.d = 1;
    this.routeStack = [this.currentNode];
    this.searchPoint = this.fields[0][MAZE_SIZEY/2].t[2];
    this.searchPoint.searched = true;
    this.exitPoint = this.fields[MAZE_SIZEX-1][MAZE_SIZEY/2].t[1];
    this.searchStack = [this.searchPoint];
    this.crossPaths = [];
    this.deadendStack = [];
  }

  excludeCell(coordinate) {
    this.fields[coordinate[0] + MAZE_SIZEX / 2 - 10][coordinate[1] + MAZE_SIZEY / 2 - 11].t[coordinate[2]].visited = true;
    this.finishedCnt++;
  }

  draw(ctx) {
    this.fields.forEach(function(column){
      column.forEach(function(field){
        field.draw(ctx);
      });
    });
  }

  build() {
    this.currentNode = this.routeStack[this.routeStack.length - 1];
    //console.log(this.currentNode.coord, this.routeStack.length);
    this.currentNode.checkFieldStatus();
    if (this.currentNode.finished) {
      //console.log("FINISHED");
      this.finishedCnt++;
      this.routeStack.pop();
      this.currentNode.draw(mazeCtx);
      return;
    }
    let d = this.currentNode.visitables[getRandomInt(this.currentNode.visitables.length)];
    //console.log(`X: ${this.currentNode.coord.x}, Y: ${this.currentNode.coord.y}, n: ${this.currentNode.coord.n}, d: ${d}`);
    let nextNode = this.currentNode.getNeighbour(d);

    this.routeStack.push(nextNode);
    nextNode.visited = true;
    this.currentNode.removeWall(d);
    nextNode.prevRemoveWall(this.currentNode.coord.n, d);
    nextNode.checkFieldStatus();
    this.currentNode.draw(mazeCtx);
  }

  search() {
    this.searchPoint = this.searchStack[this.searchStack.length - 1];
    this.searchPoint.checkFieldStatus();
    let d = this.getNextToSearch();
    if (this.searchPoint.deadend) {
      this.deadendStack.push(this.searchStack.pop());
      this.searchPoint.draw(mazeCtx);
      if(this.deadendStack.length > 20) {
        this.searchPoint = this.getNextCrossPath();
      }
      return;
    } else {
      this.deadendStack.pop();
    }
    let nextNode = this.searchPoint.getNeighbour(d);
    this.searchStack.push(nextNode);
    nextNode.searched = true;
    nextNode.checkFieldStatus();
    this.searchPoint.draw(mazeCtx);
    this.crossPaths.forEach(function(item) {
      //item.draw(mazeCtx, "rgb(200,200,255)");
    });
  }

  getNextToSearch() {
    let searchable = [];
    for(let i = 0; i < 3; i++) {
      if (!this.searchPoint.walls[i]) {
        if (!this.searchPoint.getNeighbour(i).searched) {
          searchable.push(i);
        }
      }
    }
    if (searchable.length === 0) {
      this.searchPoint.deadend = true;
      return;
    }
    if (searchable.length === 1) {
      return searchable[0];
    }
    if (searchable.length === 2 || searchable.length === 3) {
      let xDir = this.exitPoint.coord.x - this.searchPoint.coord.x;
      let yDir = this.exitPoint.coord.y - this.searchPoint.coord.y;

      this.searchPoint.distance = Math.sqrt(Math.pow(xDir*2, 2) + Math.pow(yDir, 2));
      if (METHOD) {
        this.crossPaths.push(this.searchPoint);
        //this.searchPoint.draw(mazeCtx, "rgb(200,200,255)");
        this.searchStack.push(this.getNextCrossPath());
      }
      let dir = this.getCoordDir(this.searchPoint.coord.n, xDir, yDir, this.exitPoint.coord.n);
      if (searchable.indexOf(dir[0]) !== -1) {
        return searchable[searchable.indexOf(dir[0])];
      } else {
        return searchable[searchable.indexOf(dir[1])];
      }
    }
  }

  getNextCrossPath() {
    let minDistance = Math.sqrt(Math.pow(MAZE_SIZEX*2, 2) + Math.pow(MAZE_SIZEY, 2));
    let cpField = this.searchPoint;
    for (let i = 0; i < this.crossPaths.length; i++) {
      this.crossPaths[i].checkFieldStatus();
      if (this.crossPaths[i].deadend) {
        this.crossPaths.splice(i, 1);
        i--;
      } else if (this.crossPaths[i].distance + ((this.deadendStack.length - 15) * Math.min(i/10)) < minDistance) {
        minDistance = this.crossPaths[i].distance;
        cpField = this.crossPaths[i];
      }
    }
    return cpField;
  }

  getCoordDir(n, xDir, yDir, exitN) {
    let options = [];
    if (xDir === 0 && yDir === 0) {
      if (n < exitN) {
        options.push(0);
        options.push(2);
      } else {
        options.push(2);
        options.push(0);
      }
      return options;
    }
    switch (n) {
      case 0:
        if (xDir < 0) {
          options.push(1);
        }
        if (yDir < 0) {
          options.push(2);
          options.push(0);
        } else {
          options.push(0);
          options.push(2);
        }
        break;
      case 2:
        if (xDir < 0) {
          options.push(2);
        }
        if (yDir < 0) {
          options.push(0);
          options.push(1);
        } else {
          options.push(1);
          options.push(0);
        }
        break;
      case 1:
        if (xDir > 0) {
          options.push(0);
        }
        if (yDir > 0) {
          options.push(1);
          options.push(2);
        } else {
          options.push(2);
          options.push(1);
        }
        break;
      case 3:
        if (xDir > 0) {
          options.push(1);
        }
        if (yDir > 0) {
          options.push(2);
          options.push(0);
        } else {
          options.push(0);
          options.push(2);
        }
        break;
    }
    return options;
  }

  constructMaze() {
    let i = 0;
    while (this.finishedCnt < (MAZE_SIZEX) * (MAZE_SIZEY) * 4 - MAZE_SIZEX*4 - MAZE_SIZEY*4 + 4 && i < BUILDSPEED && building) {
      this.build();
      i++;
    }
    if (this.finishedCnt === (MAZE_SIZEX) * (MAZE_SIZEY) * 4 - MAZE_SIZEX*4 - MAZE_SIZEY*4 + 4 && !finishedSearching) {

      if (!searching) {
        finishedBuilding = true;
        infoElement.innerHTML = "Il labirinto è finito, clicca per iniziare la ricerca dell'uscita in automatico";
      } else {
        while (this.searchPoint !== this.exitPoint && i < SEARCHSPEED && searching) {
          this.search();
          stepcount++;
          i++;
        }
        if (this.searchPoint === this.exitPoint) {
          infoElement.innerHTML = `La strada per l'uscita è stata trovata in ${stepcount} tentativi`;
          finishedSearching = true;
          searching = false;
        }
      }
    }
    if (!finishedSearching) {
      window.requestAnimationFrame(this.constructMaze.bind(this));
    }
    return stepcount;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let myMaze;

window.onload = newMaze;

function newMaze() {
  myMaze = new Maze();
  myMaze.fields[MAZE_SIZEX/2][MAZE_SIZEY/2].t[1].visited = true;
  stepcount = myMaze.constructMaze();
}

function onClick() {
  if (!finishedBuilding) {
    building = true;
    infoElement.innerHTML = "Costruendo il labirinto...";
  } else {
    searching = true;
    infoElement.innerHTML = "Cercando l'uscita...";
  }
  if (finishedSearching) {
    finishedBuilding = false;
    finishedSearching = false;
    building = false;
    searchig = false;
    stepcount = 0;
    infoElement.innerHTML = "Inizia la costruzione del labirinto";
    //mazeCtx.clearRect(0, 0, mazeCtx.canvas.width + HEX_T, mazeCtx.canvas.height + HEX_T);
    newMaze();
  }
}
