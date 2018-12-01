function loadImage(url) {
  return new Promise(function(resolve, reject) {
    let img = new Image();
    img.onload = function() {
      return resolve(url);
    }
    img.onerror = function() {
      return reject(url);
    }
    img.src = url;
  });
}
function Animal(url, name) {
  this.photo = url;
  this.name = name;
};
Animal.prototype.showInformation = function(url,name) {
  $('.container').append('<div class="block"><img  class="item" src="'+this.photo+'" /><h3>Nickname: '+ this.name + '</h3></div>');
  $('.selectItemPopup').css('display','none');
  $(".animalName").val('');
};
let popupActions = {
  openPopup: function() {
    $(".openPopup").click(function() {
      $('.selectItemPopup').css('display','block');
    });
  },
  addAnimal: function(imgList) {
    $(".addItem").click(function() {
      let path = $(".selectAnimal").val();
      let name = $(".animalName").val();
      imgList.push(path);
      localStorage.setItem(name, path);
      loadImage(path)
      .then(function(url) {
        new Animal(path,name).showInformation();
      })
      .catch(function(url) {
        console.log("Cannot load the image by path:  ", url);
      });
    });
  },
  closePopup: function() {
    $(".closePopup").click(function() {
      $('.selectItemPopup').css('display','none');
    });
  }
};
function loadAnimalsFromStorage() {
  let imgList = [];
  for (let i = 0; i < localStorage.length; i++) {
    let name = localStorage.key(i);
    imgList.push(localStorage.getItem(name));
    loadImage(imgList[i])
    .then(function(url) {
      new Animal(imgList[i],name).showInformation();
    })
    .catch(function(url) {
      console.log("Cannot load the image by path: ", url);
    });
  }
  return imgList;
}
$(document).ready(function(){
  let imgList = loadAnimalsFromStorage();
  popupActions.openPopup();
  popupActions.addAnimal(imgList);
  popupActions.closePopup();
});
