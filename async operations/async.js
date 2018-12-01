const strg = localStorage;
let imgList = [];
for (let i = 0; i < strg.length; i++) {
  key = strg.key(i);
  imgList.push(strg.getItem(key));
}
for (var i =0; i < imgList.length; i ++) {
  loadImage(imgList[i])
  .then(function(url) {
    $('.container').append('<img  class="item" src="'+url+'" />');
  })
  .catch(function(url) {
    console.log("Cannot load the image by path: ", url);
  });
}

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

$(document).ready(function(){
  $(".openPopup").click(function() {
    $('.selectItemPopup').css('display','block');
  });
  $(".closePopup").click(function() {
    $('.selectItemPopup').css('display','none');
  });
  $(".addItem").click(function() {
    let path = $(".selectAnimal").val();
    imgList.push(path);
    strg.setItem(Math.floor(Math.random(1,100)*100), path);
    loadImage(path)
    .then(function(url) {
      $('.container').append('<img  class="item" src="'+url+'" />');
      $('.selectItemPopup').css('display','none');
    })
    .catch(function(url) {
      console.log("Cannot load the image by path:  ", url);
    });
  });
});
