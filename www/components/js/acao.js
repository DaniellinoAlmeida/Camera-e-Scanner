// Camera
$(document).on("click","#cam",function(){
  navigator.camera.getPicture(onSuccess, onFail,{
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    saveToPhotoAlbum: true
  });

  function onSuccess(ImageData){
    var image = document.getElementById('#img');
    image.src = "data:image/jpeg:Base64," + ImageData;
  }

  function onFail(message){
      alert('Failed because:' + message);
  }
});

// Scanner
$(document).on("click","#scan",function(){
  scanBarcode();
})

function scanBarcode() {
  window.plugins.barcodeScanner.scan( function(result){
    alert("We got a barcode\n" +
      "Result: " + result.text + "\n" +
      "Format: " + result.format+ "\n" +
      "Cancelled: " + result.cancelled);
  }, function(error) {
      alert("Scanning failed: " + error);
  }
  );
}

//Mapa
$(document).on('click','#mapa',function(){
    function geolocationSuccess (position) {

        navigator.notification.alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: '+ position.coords.longitude);
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess);
});