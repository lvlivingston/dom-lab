// Task 5.0 that replaces Task 3.0 to include sub-menu data
// const menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '#', subLinks: [
//         {text: 'all', href: '/catalog/all'},
//         {text: 'top selling', href: '/catalog/top'},
//         {text: 'search', href: '/catalog/search'},
//     ]},
//     {text: 'orders', href: '#' , subLinks: [
//         {text: 'new', href: '/orders/new'},
//         {text: 'pending', href: '/orders/pending'},
//         {text: 'history', href: '/orders/history'},
//     ]},
//     {text: 'account', href: '#', subLinks: [
//         {text: 'profile', href: '/account/profile'},
//         {text: 'sign out', href: '/account/signout'},
//     ]},
// ];

// Menu data structure copied in from Task 3.0 that was replaced by Task 5.0
// const menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
// ];

//Task 1.0 Select and cache the <main> element in a variable named mainEl.

// Leah's attempt
//let mainEl = document.querySelector('main');

//Task 1.1 Set the background color of mainEl using the --main-bg CSS custom property.

// Leah's attempt
// mainEl.style.setProperty('background-color', 'var(--main-bg)');

//Task 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.

// Leah's attempt
// mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//Task 1.3 Add a class of flex-ctr to mainEl.

// Leah's attempt
// mainEl.classList.add('flex-ctr');

//Task 2.0 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

// Leah's attempt
// let topMenuEl = document.querySelectorAll('#top-menu');

//Task 2.1 Set the height topMenuEl element to be 100%.

// Leah's attempt
// topMenuEl.style.setProperty('height', '100%');

//Task 2.2 Set the background color of topMenuEl using the --top-menu-bg CSS custom property.

// Leah's attempt
// topMenuEl.style.setProperty('background-color', 'var(--top-menu-bg)');

//Task 2.3 Add a class of flex-around to topMenuEl.

// Leah's attempt
// topMenuEl.classList.add('flex-around');

// Task 3.0 Copy the following data structure to the top of script.js: 
// See top of script.js where data structure was pasted.

//Task 3.1 Iterate over the entire menuLinks array and for each “link” object: 
//Create an <a> element.
//On the new element, add an href attribute with its value set to the href property of the “link” object.
//Set the new element’s content to the value of the text property of the “link” object.
//Append the new element to the topMenuEl element.

// Leah's attempt
// menuLinks.forEach(function(item) {
//     let link = document.createElement('a');
//     link.href = item.href;
//     link.textContent = item.text;
//     topMenuEl.appendChild(link);
// });

//Part 2: 1. Insert an additional <nav> element (<nav id="sub-menu"></nav>) within the <header> element in index.html:
//See index.html where added

//Part 2: 2. Add the following CSS to the bottom of style.css:
//See style.css where added

//Task 4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

// Leah's attempt
// let subMenuEl = document.querySelector('#sub-menu');

//Task 4.1 Set the height subMenuEl element to be 100%.

// Leah's attempt
// subMenuEl.style.setProperty('height', '100%');

//Task 4.2 Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.

// Leah's attempt
// subMenuEl.style.setProperty('background-color', 'var(--sub-menu-bg)');

//Task 4.3 Add the class of flex-around to the subMenuEl element.

// Leah's attempt
// subMenuEl.classList.add('flex-around');

//Task 4.4 Set the CSS position property of subMenuEl to the value of absolute.

// Leah's attempt
// subMenuEl.style.position = 'absolute';

//Task 4.5 Set the CSS top property of subMenuEl to the value of 0.

// Leah's attempt
// subMenuEl.style.setProperty('top', '0');

//Task 5.0 Replace the menuLinks array in script.js with this version that adds sub-menu data:
//See top of script.js where data structure was replaced.

//Task 5.1 Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
//Declare a global showingSubMenu variable and initialize it to false;

// Leah's attempt
// let topMenuLinks = topMenuEl.querySelectorAll('a');
// let showingSubMenu = false;

//Task 5.2 Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should call the event object’s preventDefault() method.
//The second line of code function should immediately return if the element clicked was not an <a> element.
//console.log the content of the <a> to verify the handler is working.

// Task 5.3 Next in the event listener, if the clicked <a> link has a class of active:
// Remove the active class from the clicked <a> element.
// Set the showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.
// return; from the event listener function.

//Task 5.4 Add code to the bottom of the the event listener that iterates over each <a> element in topMenuLinks and removes the class name of active, regardless of whether the <a> element has a class of active or not.

//Task 5.5 Next, the event listener should add a class name of active to the <a> element that was clicked.

//Task 5.6 Next, add code in the event listener that sets showingSubMenu to true if the clicked <a> element’s “link” object within menuLinks has a subLinks property (all do, except for the “link” object for ABOUT), otherwise, set it to false.

//Task 5.7 If showingSubMenu is true:
//Call a buildSubMenu function, passing to it the subLinks array for the clicked <a> element.
//Set the CSS top property of subMenuEl to 100%.
//Otherwise (showingSubMenu is false):
//Set the CSS top property of subMenuEl to 0.
//Since the About link has been clicked, set mainEl.innerHTML to '<h1>about</h1>'.

// Leah's attempt
// topMenuEl.addEventListener('click', function(event) {
//     event.preventDefault();
//     let clickedLink = event.target.closest('a');

//     if (clickedLink && (
//         clickedLink.parentElement.id === 'top-menu' || 
//         clickedLink.parentElement.id === 'sub-menu'
//         )) {
//         console.log(clickedLink.textContent.toLowerCase()); 
//     }

//     topMenuLinks.forEach(function(link) {
//         link.classList.remove('active');
//     })

//     let linkObject = menuLinks.find(link => link.href === clickedLink.getAttribute('href'));
//     showingSubMenu = linkObject && linkObject.subLinks ? true : false;

//     if (clickedLink.classList.contains('active')) {
//         clickedLink.classList.remove('active');
//         showingSubMenu = false;
//         subMenuEl.style.setProperty('top', '0');
//         mainEl.innerHTML = '';
//         return;
//     }
//     clickedLink.classList.add('active');

//     if (showingSubMenu) {
//         buildSubMenu(linkObject.subLinks);
//         subMenuEl.style.setProperty('top', '100%');
//     } else {
//         subMenuEl.style.setProperty('top', '0');
//     }
    
//     if (clickedLink.textContent.toLowerCase() === 'about') {
//         mainEl.innerHTML = '<h1>About</h1>';
//     }
//     console.log(event.target);
// });

//Task 5.8 Code the buildSubMenu function so that it:
// Clears the contents of subMenuEl.
// Iterates over the subLinks array passed as an argument; and for each “link” object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the “link” object.
// Set the new element’s content to the value of the text property of the “link” object.
// Append the new element to the subMenuEl element.

// Leah's attempt
// function buildSubMenu(subLinks) {
//     let subMenuEl = document.getElementById('sub-menu');
//     subMenuEl.innerHTML = '';
//     subLinks.forEach(function(link) {
//         let anchorElement = document.createElement('a');
//         anchorElement.href = link.href;
//         anchorElement.textContent = link.text;
//         subMenuEl.appendChild(anchorElement);
//     });
// }

//Task 6.0 Attach a delegated ‘click’ event listener to subMenuEl.
// The first line of code of the event listener function should call the event object’s preventDefault() method.
// The second line of code function should immediately return if the element clicked was not an <a> element.
// console.log the content of the <a> to verify the handler is working.

//Task 6.1 Next, subMenuEl’s event listener should:
// Set showingSubMenu to false.
// Set the CSS top property of subMenuEl to 0.

//Task 6.2 Next, subMenuEl’s event listener should remove the class name of active from each <a> element in topMenuLinks - whether the active class exists or not.

//Task 6.3 Next, subMenuEl’s event listener should update the contents of mainEl to the contents of the <a> element, within an <h1>, clicked within subMenuEl.

// subMenuEl.addEventListener('click', function(event) {
//     event.preventDefault();
//     const link = event.target.closest('a');
//     if (!link) return;
//     console.log(link.textContent);
//     showingSubMenu = false;
//     subMenuEl.style.top = '0';
//     topMenuLinks.forEach(function(link) {
//       link.classList.remove('active');
//     });
//     link.classList.add('active');
//     mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
//   });




  //Copied exactly from solution... then works :(

  // Menu data structure (Task 5.0)
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  // Task 1.0
  const mainEl = document.querySelector('main');
  
  // Task 1.1
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  // Task 1.2
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  
  // Task 1.3
  mainEl.classList.add('flex-ctr');
  
  // Task 2.0
  const topMenuEl = document.getElementById('top-menu');
  
  // Task 2.1
  topMenuEl.style.height = '100%'
  
  // Task 2.2
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  
  // Task 2.3
  topMenuEl.classList.add('flex-around');
  
  // Task 3.0
  // menuLinks data structure copied at the top
  
  // Task 3.1
  menuLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });
  
  // Task 4.0
  const subMenuEl = document.getElementById('sub-menu');
  
  // Task 4.1
  subMenuEl.style.height = '100%';
  
  // Task 4.2
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  
  // Task 4.3
  subMenuEl.classList.add('flex-around');
  
  // Task 4.4
  subMenuEl.style.position = 'absolute';
  
  // Task 4.5
  subMenuEl.style.top = '0';
  
  // Task 5.0
  // menuLinks array updated at the top
  
  // Task 5.1
  const topMenuLinks = document.querySelectorAll('#top-menu a');
  let showingSubMenu = false;
  
  // Task 5.2
  topMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    const link = evt.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);
    // Task 5.3
    if (link.classList.contains('active')) {
      link.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = '0';
      return;
    }
    // Task 5.4
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    // Task 5.5
    link.classList.add('active');
    // Task 5.6
    const linkData = menuLinks.find(function(linkObj) {
      return linkObj.text === link.textContent;
    });
    showingSubMenu = 'subLinks' in linkData;
    // Task 6.4
    // Task 5.7
    if (showingSubMenu) {
      buildSubMenu(linkData.subLinks);
      subMenuEl.style.top = '100%';
    } else {
      subMenuEl.style.top = '0';
      mainEl.innerHTML = '<h1>about</h1>';
    }
  });
  
  // Task 5.8
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function(link) {
      const linkEl = document.createElement('a');
      linkEl.setAttribute('href', link.href);
      linkEl.textContent = link.text;
      subMenuEl.appendChild(linkEl);
    });
  }
  
  // Task 6.0
  subMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    const link = evt.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);
    // Task 6.1
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    // Task 6.2
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    // Task 6.3
    mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
  });