
document.addEventListener('DOMContentLoaded', ShowStoredData);

var ul = document.querySelector('ul');

////////////////kiliarfunct//////////////////
kiliarfunct = () => {
    if (ul.hasChildNodes() === true) {
        if (confirm('Do you want to remove all TASKS?')) { ul.innerHTML = ''; }
    }
    else { alert('Please give an input to proceed!') }
    localStorage.clear();
}
///////////////remub///////////////////////
remub = (r) => {
    if (r.target.hasAttribute('href')) {
        if (confirm('Are you sure?')) {
            let rr = r.target.parentElement;
            rr.remove();
            removing_lis(rr);
        }
    }
    //  r.preventDefault();
}

ul.addEventListener('click', remub);
/////////////////////submitfunct/////////////
subfunct = (e) => {
    var a = document.createElement('a');
    var git = document.querySelector('.git');
    var li = document.createElement('li');
    a.setAttribute('href', '#');
    a.innerHTML = 'X';


    if (git.value === '') { alert('please give an input to proceed'); }
    else {
        li.appendChild(document.createTextNode
            (`${git.value} `));
        li.appendChild(a);
        ul.appendChild(li);

        store_e_jomai(git.value);
        git.value = '';

    }
    // e.preventDefault();
}

//////////////////////filti/////////////////
filti = (f) => {
    let text = f.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) { task.style.display = "block"; }
        else { task.style.display = 'none'; }
    });
}


var t = document.querySelector('.t');
t.addEventListener('keyup', filti);


////////////store_e_jomai//////////////////
function store_e_jomai(task) {
    let TASKS;
    if (localStorage.getItem('TASKS') === null) { TASKS = []; }
    else {
        TASKS = JSON.parse(localStorage.getItem('TASKS'));
    }
    TASKS.push(task);
    localStorage.setItem('TASKS', JSON.stringify(TASKS))

}

///////////////ShowStoredData////////////////

function ShowStoredData() {
    let TASKS;
    if (localStorage.getItem('TASKS') === null) { TASKS = []; }
    else {
        TASKS =
        JSON.parse(localStorage.getItem('TASKS'))
    }


    TASKS.forEach(task => {
        let a = document.createElement('a');
        // var git = document.querySelector('.git');
        let li = document.createElement('li');
        a.setAttribute('href', '#');
        a.innerHTML = 'X';
        li.appendChild(document.createTextNode
            (task + ' '));
        li.appendChild(a);
        ul.appendChild(li);
    })
}
/////////////////////////////////////////////// 
////////////////removing lis///////////////////
function removing_lis(t) {
    let TASKS;
    if (localStorage.getItem('TASKS') === null) { TASKS = []; }
    else { TASKS = JSON.parse(localStorage.getItem('TASKS')); }
    t.removeChild(t.lastChild);
    TASKS.forEach((task, index) => {
        if (t.textContent.trim() === task) { TASKS.splice(index, 1); }
    })
    localStorage.setItem('TASKS', JSON.stringify(TASKS));
}
