// Model
let expierence = [{
        id: 'tommy',
        title: 'Full Stack Web Developer',
        company: 'TOMMY',
        peroid: 'December 2015 - Present',
        projects: [
            'Why painful the sixteen how minuter looking nor. Subject but why ten earnest husband imagine sixteen brandon. Are unpleasing occasional celebrated motionless unaffected conviction out. Evil make to no five they.',
            'It if sometimes furnished unwilling as additions so. Blessing resolved peculiar fat graceful ham. Sussex on at really ladies in as elinor.',
            'Put all speaking her delicate recurred possible. Set indulgence inquietude discretion insensible bed why announcing.',
        ]
    }, {
        id: 'bigdrop',
        title: 'Full Stack Web Developer',
        company: 'BIGDROP',
        peroid: 'December 2014 - January 2015',
        projects: [
            'Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh.',
            'And sir dare view but over man. So at within mr to simple assure. Mr disposing continued it offending arranging in we.',
            'Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure so of.',
        ]
    }, {
        id: 'cuker',
        title: 'Full Stack Web Developer',
        company: 'CUKER',
        peroid: 'January 2015 - September 2015',
        projects: [
            'Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how.',
            'Promotion an ourselves up otherwise my. High what each snug rich far yet easy. In companions inhabiting mr principles at insensible do.',
            'Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay.',
        ]
    }];

let currentActiveId = 'tommy';

render(currentActiveId);
getActiveButton();

function getById(id) {
    const result = expierence.filter(function (expierence) {
        if(id === expierence.id) {
            return expierence;
        } else {
            return false;
        }
    });

    return result;
}

// View

function render(id) {
    const info = getById(id);

    info.forEach(function(expInfo) {
        const title = document.getElementById('title');
        title.innerText = expInfo.title;
        const company = document.getElementById('company');
        company.innerText = expInfo.company;
        const peroid = document.getElementById('peroid');
        peroid.innerText = expInfo.peroid;
        
        createInfo(expInfo);
    });
}

function getActiveButton() {
    const buttons = document.getElementById('companies').children;

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id === currentActiveId) {
            buttons[i].className = 'comp-btn active'; 
        } else {
            buttons[i].className = 'comp-btn';
        }
    }

    topicButtons(buttons);
}

// Contoller
function createInfo(expInfo) {
    const infoContainer = document.getElementById('info');
    infoContainer.innerHTML = '';
    for (let i = 0; i < expInfo.projects.length; i++) {
        const container = document.createElement('div');
        container.className = 'info-container';
        const icon = document.createElement('img');
        icon.className = 'arrow-ico';
        icon.src = 'icons/double-arrow.svg';
        const text = document.createElement('div');
        text.className = 'info-text';
        text.innerText = expInfo.projects[i];

        infoContainer.appendChild(container);
        container.appendChild(icon);
        container.appendChild(text);
    }
    getActiveButton();
}

function topicButtons(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            currentActiveId = buttons[i].id;
            render(currentActiveId);
        }
    }
}