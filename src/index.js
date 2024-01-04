console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4") 

// Example test for Challenge 1
test("Fetch images and render them to the DOM", async () => {
    document.body.innerHTML = '<div id="images-container"></div>';
    await yourFunctionForChallenge1();
    const imagesContainer = document.getElementById('images-container');
    expect(imagesContainer.children.length).toBeGreaterThan(0);
  });
  
  // Example test for Challenge 2

  test("Fetch breeds and render them to the DOM", async () => {
    document.body.innerHTML = '<ul id="breeds-list"></ul>';
    await yourFunctionForChallenge2();
    const breedsList = document.getElementById('breeds-list');
    expect(breedsList.children.length).toBeGreaterThan(0);
  });
  
  // Example test for Challenge 3

test("Change font color on breed click", () => {
    document.body.innerHTML = '<ul id="breeds-list"><li>Labrador</li></ul>';
    const breedsList = document.getElementById('breeds-list');
    
    yourFunctionForChallenge3();  
    
    const breedListItem = breedsList.querySelector('li');
    breedListItem.click();
    
    expect(breedListItem.style.color).toBe('red');  
  });
  
  // Example test for Challenge 4
  test("Filter breeds based on dropdown selection", () => {
    document.body.innerHTML = '<ul id="breeds-list"><li>Labrador</li><li>Akita</li></ul>' +
                               '<select id="filter-dropdown"><option value="a">A</option></select>';
    const breedsList = document.getElementById('breeds-list');
    const filterDropdown = document.getElementById('filter-dropdown');
  
    yourFunctionForChallenge4(); 
  
    filterDropdown.value = 'a';
    filterDropdown.dispatchEvent(new Event('change'));
  
    const breedListItems = breedsList.querySelectorAll('li');
    expect(breedListItems[0].style.display).toBe('block');
    expect(breedListItems[1].style.display).toBe('none');
  });
  
  