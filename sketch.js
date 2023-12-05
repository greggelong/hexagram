let cnv
let binHex =[]

function setup() {
  cnv = createCanvas(800, 800);
  let cnx = windowWidth/2 -cnv.width/2 
  let cny = windowHeight/2 - (cnv.height/2)
  cnv.position(cnx,cny)
  frameRate(1)
  for (let i =0; i<64;i++){
    binHex.push(binConvert(i,6))

  }
  print(binHex)
  
}

function draw(){
  background(0)
  //let choi = floor(random(64))
  let choi = (frameCount-1)%64
  fill(255)
  textSize(20)
  text(binHex[choi].join(''),650,700)
  text(choi,100,700)
  showGram(binHex[choi])
}

function binConvert(a, bitLen) {
  // takes in a decimal and a bit length and returns a list of ones and zeros binary for that number

  let b = a.toString(2); // converts it to binary but leading zeros, not 8 bits eg. 3 = "11"
  let mask = "0".repeat(bitLen); // a mask to get the extra zeros
  let c = mask.slice(0, bitLen - b.length); // slice to get the right number of zeros
  // eg. if b = "11" then c = "000000"
  let binstring = c + b; // binary string so 3 will give 00000011 8 bits

  let binArray = int(binstring.split("")); // is an aray of ints so [0,0,0,0,0,0,1,1]
  return binArray;
}

function showGram(narray){
  fill(255,0,0)
  let y = 50;
  for (let i =0; i<narray.length; i++){
    if (narray[i]===0){
      rect(50,y,300,50);
      rect(450,y,300,50);
    }else{
      rect(50,y,700,50)
    }
    y+=100
  }
}
 