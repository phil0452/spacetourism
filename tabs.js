let tabList = document.querySelector('[role="tabList"]');
let tabs = tabList.querySelectorAll('[role="tab"]');

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
})

function changeTabPanel(e){
    let targetTab = e.target;
    let targetPanel = targetTab.getAttribute("aria-controls");
    let targetImage = targetTab.getAttribute("data-image");
    let targetContent = targetTab.getAttribute("data-article");
    
    let tabContainer = targetTab.parentNode;        // get div container for tabs
    let mainContainer = tabContainer.parentNode;    //get main content container
     console.log(tabContainer);
    console.log(mainContainer);

    tabContainer.querySelector("[aria-selected='true']").setAttribute("aria-selected", false);
    targetTab.setAttribute("aria-selected", true);
    
   //articles
   hideContent(mainContainer, "[role='tabpanel']", targetContent);
    showContent(mainContainer, [`#${targetContent}`]);
//images
   hideContent(mainContainer, "img", targetImage);
    showContent(mainContainer, [`#${targetImage}`]);
}

function hideContent(parent, content){
    parent.querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));
}

function hideContent(parent, content, targetImage){
    console.log(targetImage)

    parent.querySelectorAll(content)
    .forEach((item) => {
        if(item.id == targetImage) { item.classList.remove("hidden")}
        item.classList.remove("visible")
        item.classList.add("hidden")

         if(item.classList.contains("visible")) { item.classList.remove("visible")}
        })
}

function showContent(parent, content){
    parent.querySelector(content).classList.remove("hidden");
    parent.querySelector(content).classList.add('visible');
}
