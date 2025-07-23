const guests = {
  guest1: {
    name: 'NAME',
    occupation: 'Chair',
    description: 'Description.',
    picture: 'src/adachi.png',
  },
  guest2: {
    name: 'Yanshan Wang, PhD, FAMIA',
    occupation: 'Chair Elect',
    description: 'Description.',
    picture: 'src/naoshi.png',
  },
  guest3: {
    name: 'NAME',
    occupation: 'Position',
    description: 'Description.',
    picture: 'src/adachi.png',
  },
  guest4: {
    name: 'NAME',
    occupation: 'Position',
    description: 'Description.',
    picture: 'src/adachi.png',
  },
  guest5: {
    name: 'NAME',
    occupation: 'Position',
    description: 'Description.',
    picture: 'src/adachi.png',
  },
  guest6: {
    name: 'NAME',
    occupation: 'Position',
    description: 'Description.',
    picture: 'src/adachi.png',
  },
};

function createGuest(guest) {
  const guestContainer = document.getElementById('guest-container');
  const guestElement = document.createElement('li');
  guestElement.innerHTML = `<div class="guest-image">
                                    <img src="${guest.picture}" alt="Guest picture">
                                </div>
                                <div class="guest-info">
                                    <h3>${guest.name}</h3>
                                    <h4>${guest.occupation}</h4>
                                    <hr>
                                    <p>${guest.description}</p>
                                </div>`;
  guestContainer.appendChild(guestElement);
}

function createGuestSection(guestsList, counter) {
  const guestContainer = document.getElementById('guest-container');
  guestContainer.innerHTML = '';
  for (let i = 0; i < counter; i += 1) {
    createGuest(guestsList[i]);
  }
}

let clicks = true;
const button = document.getElementById('more-button');
const mediaQuery = window.matchMedia('(min-width: 768px)');
const list = Object.values(guests);

function mediaQueryCheck() {
  if (mediaQuery.matches) {
    createGuestSection(list, list.length);
    button.style.display = 'none';
  } else {
    createGuestSection(list, 2);
    button.style.display = 'block';
  }
}

mediaQuery.addEventListener('change', () => {
  mediaQueryCheck();
  document.querySelector('.mobile-menu').style.display = 'none';
});

function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  mediaQueryCheck();
  addSmoothScrolling();
});

button.addEventListener('click', () => {
  if (clicks) {
    createGuestSection(list, list.length);
    clicks = false;
    button.innerHTML = `LESS
                            <img src="src/up-arrow.png" alt="Arrow">`;
  } else {
    createGuestSection(list, 2);
    clicks = true;
    document.getElementById('guests-id').scrollIntoView({ behavior: 'smooth' });
    button.innerHTML = `MORE
                            <img src="src/down-arrow.png" alt="Arrow">`;
  }
});

function openCloseMenu() {
  const x = document.querySelector('.mobile-menu');
  const y = document.querySelector('body');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    y.style.overflow = 'scroll';
  } else {
    x.style.display = 'flex';
    y.style.overflow = 'hidden';
  }
}

function addevent(id) {
  document.getElementById(id).addEventListener('click', () => {
    openCloseMenu();
  });
}

const ids = ['onclick-open', 'onclick-close', 'onclick-events', 'onclick-about', 'onclick-guests', 'onclick-sponsors', 'onclick-compaign', 'onclick-program'];
ids.forEach(addevent);