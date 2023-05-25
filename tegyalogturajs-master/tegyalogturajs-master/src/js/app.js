const doc = {
    competitorInput: document.querySelector('#competitor'),
    reachedInput: document.querySelector('#reached'),    
    unsuccessfulInput: document.querySelector('#unsuccessful'),
    unsuccessfulPercentInput: document.querySelector('#unsuccessfulPercentInput'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    unsuccessful: null,
    unsuccessfulPercent: null
};

window.addEventListener('load', () => {
    init();
});

function init() {
    doc.calcButton.addEventListener('click', () => {
        startCalc();
    });
}

function startCalc() {
    let competitor = doc.competitorInput.value;
    let reached = doc.reachedInput.value;
    state.unsuccessful = getUnsuccessCount(competitor, reached);
    state.unsuccessfulPercent = getUnsuccessPercent(competitor, state.unsuccessful);
    doc.unsuccessfulInput.value = state.unsuccessful;
    doc.unsuccessfulPercentInput.value = state.unsuccessfulPercent;

}


function getUnsuccessCount(competitor, reached) {
    return competitor - reached;
}

function getUnsuccessPercent(competitor, unsuccessful) {
    let res = unsuccessful / competitor * 100;
    return res;
}
