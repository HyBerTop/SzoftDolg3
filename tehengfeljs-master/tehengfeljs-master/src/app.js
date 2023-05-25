const doc = {
    radiusInput: document.querySelector('#radius'),
    heightInput: document.querySelector('#height'),
    surfaceInput: document.querySelector('#surface'),
    calcButton: document.querySelector('#calcButton'),
    badinputDiv: document.querySelector('#badinput')
};

const state = {
    radius: null,
    height: null,
    surface: null,
    goodInput: true
};

window.addEventListener('load', () => {
    init();
});

function init() {
    doc.badinputDiv.style.display = 'none';
    doc.calcButton.addEventListener('click', () => {
        startCalc();
    });
}

function startCalc() {
    console.log('start calc...');
    startInput();
    if(state.goodInput) {
        state.surface = calcSurface(state.radius, state.height);        
    }
    startOutput();
}

function startInput() {
    state.radius = doc.radiusInput.value;
    state.height = doc.heightInput.value;
    state.goodInput = true;
    if(!isGoodInput(state.radius)) {
        state.goodInput = false;
    }
    if(!isGoodInput(state.height)) {
        state.goodInput = false;
    }
}

function startOutput() {
    if(state.goodInput) {
        doc.surfaceInput.value = state.surface;
        doc.badinputDiv.style.display = 'none';
    }else {
        doc.badinputDiv.style.display = 'block';
    }
    
}

function calcSurface(radius, height) {
    let surface =
        2 * Math.PI * Math.pow(radius, 2) +
        2 * Math.PI * radius * height;
    return surface;
}

function isGoodInput(input) {
    let inputStr = String(input);
    if(inputStr.match(/^[0-9.]+$/)) {
        return true;
    }else {
        return false;
    }
}