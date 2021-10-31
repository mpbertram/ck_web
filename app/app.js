var runChuck = () => {
    Module.ccall('executeCode', null, ['string', 'string'], ['test', document.getElementById('chuck-code').value]);
}
